from flask import Flask

app = Flask(__name__)
app.config['SECRET_KEY'] = 'blah'
socketio = SocketIO(app, cors_allowed_origins='*')


@socketio.on('message')
def handle_message(message):
    print('received message: ' + message)
    send(message, broadcast=True)


@app.route('/api', methods=['GET'])
def api():
    return{
        'userId': 1,
        'title': 'Flask React Application',
        'completed': False
    }


if __name__ == '__main__':
    # app.run(debug=True)
    socketio.run(app)
