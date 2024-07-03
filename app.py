# app.py
from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def serve_js():
    return send_from_directory('static', 'script.js')

if __name__ == '__main__':
    app.run(debug=True)
