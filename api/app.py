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
DB_KEY = os.getenv('DB_KEY')
print(DB_KEY)
client = pymongo.MongoClient(DB_KEY)
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
