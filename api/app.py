from flask_cors import CORS
from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
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
load_dotenv()  # Get the key from the '.env' file

MONGODB_USERNAME = os.getenv('MONGODB_USERNAME')
MONGODB_PASSWORD = os.getenv('MONGODB_PASSWORD')
MONGODB_DBNAME = os.getenv('MONGODB_DBNAME')
client = pymongo.MongoClient(
    f'mongodb+srv://{MONGODB_USERNAME}:{MONGODB_PASSWORD}@cluster0.nqcaa.mongodb.net/{MONGODB_DBNAME}?retryWrites=true&w=majority')

db = client.twain
album_collection = db.album
cover_collection = db.cover
day_collection = db.day

app = Flask(__name__)
CORS(app, resources=r'/api/*')

############################################################
# ROUTES
############################################################


@app.route("/api/create", methods=["POST"])
def createPhoto():
    #print(request.json, flush=True)
    obj = request.json
    timestamp = time.time()
    obj['timestamp'] = timestamp
    album_collection.insert_one(obj)
    print(obj)
    return jsonify(data="create response")


@app.route("/api/updateCover", methods=["POST"])
def updateCover():
    # print(request.json, flush=True)
    obj = request.json
    if not ("cover" in db.list_collection_names()):
        obj['name'] = 'cover'
        cover_collection.insert_one(obj)
    else:
        cover_collection.update_one({
            'name': 'cover'
        },
            {
            '$set': {'url': obj['url']}
        })
    return jsonify(data="update coverphoto response")


@app.route("/api/add_important_day", methods=["POST"])
def add_important_day():
    #print(request.json, flush=True)
    obj = request.json
    time_object = time.strptime(obj['date'], '%Y-%m-%d')
    epoch_timestamp = time.mktime(time_object)
    obj['timestamp'] = epoch_timestamp
    print(epoch_timestamp)
    day_collection.insert_one(request.json)
    return jsonify(data="create day response")


@app.route("/api/getAlbum", methods=['GET'])
def getAlbum():
    cursor = album_collection.find({})
    items = []
    for doucument in cursor:
        items.append({"_id": str(doucument["_id"]), "title": doucument["title"],
                      "url": doucument["url"], "timestamp": doucument["timestamp"]})
    items.sort(key=lambda x: x['timestamp'], reverse=True)
    return jsonify(data=items)


@app.route("/api/getCover", methods=['GET'])
def getCover():
    cursor = cover_collection.find_one({'name': 'cover'})
    items = {"_id": str(cursor["_id"]), "name": cursor["name"],
             "url": cursor["url"]}
    return jsonify(data=items)


if __name__ == '__main__':
    app.run(debug=True)
