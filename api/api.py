from flask_cors import CORS
from flask import Flask, request
from routes import indexRoute, createRoute

app = Flask(__name__)
CORS(app)

# Register the blueprints
app.register_blueprint(indexRoute)
app.register_blueprint(createRoute)


if __name__ == '__main__':
    app.run(debug=True)
