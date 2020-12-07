from flask import Blueprint, request, jsonify
import json
import pymongo
import os
import sys
from bson import objectid

# JSONEncoder to manage the MongoDB Objectid


class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, objectid):
            return str(o)
        return json.JSONEncoder.default(self, o)


# MongoDB config
client = pymongo.MongoClient(
    "mongodb+srv://yinnyC:pumpkin@cluster0.nqcaa.mongodb.net/twain?retryWrites=true&w=majority")
db = client.twain
album_collection = db.album

# Blueprints
indexRoute = Blueprint("index", __name__)
createRoute = Blueprint("create", __name__)
# Routes


@createRoute.route("/api/create", methods=["POST"])
def create():
    print(request.json, flush=True)
    album_collection.insert_one(request.json)
    return jsonify(data="create response")


@indexRoute.route("/api/items")
def index():
    return jsonify(data="something")
