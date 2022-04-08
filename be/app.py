from flask import Flask
from config import siteConfig

app = Flask(__name__)

HOST = siteConfig["host"]
PORT = siteConfig["port"]
ISDEBUG = siteConfig["debug"]


@app.route('/')
def hello():
    return "hello"


@app.route('/test_post', methods=["POST"])
def test():
    return "test_post"


app.run(host=HOST, port=PORT, debug=ISDEBUG)
