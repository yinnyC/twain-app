from flask import Flask

app = Flask(__name__)


@app.route('/api', methods=['GET'])
def api():
    return{
        'userId': 1,
        'title': 'Flask React Application',
        'completed': False
    }


if __name__ == '__main__':
    app.run(debug=True)
