from flask_cors import CORS
from flask import Flask, request, jsonify
import json
import pymongo
from bson import objectid
import time


class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, objectid):
            return str(o)
        return json.JSONEncoder.default(self, o)


############################################################
# SETUP
############################################################

client = pymongo.MongoClient(
    "mongodb+srv://yinnyC:pumpkin@cluster0.nqcaa.mongodb.net/twain?retryWrites=true&w=majority")
db = client.twain
album_collection = db.album

app = Flask(__name__)
CORS(app)

############################################################
# ROUTES
############################################################


@app.route("/api/create", methods=["POST"])
def createPhoto():
    #print(request.json, flush=True)
    obj = request.json
    now = time.time()
    obj['timestamp'] = now
    print(obj)
    print(now)
    album_collection.insert_one(request.json)
    return jsonify(data="create response")


@app.route("/api/updateCover", methods=["POST"])
def updateCover():
    #print(request.json, flush=True)
    obj = request.json
    now = time.time()
    obj['timestamp'] = now
    print(obj)
    print(now)
    album_collection.insert_one(request.json)
    return jsonify(data="update response")


if __name__ == '__main__':
    app.run(debug=True)
