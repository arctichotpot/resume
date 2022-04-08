from flask import Flask
from config import siteConfig
from file.toPdf import toPdf
from file.pdfTo import pdfTo

HOST = siteConfig["host"]
PORT = siteConfig["port"]
ISDEBUG = siteConfig["debug"]

app = Flask(__name__)

app.register_blueprint(toPdf, url_prefix='/toPdf')
app.register_blueprint(pdfTo, url_prefix='/pdfTo')

if __name__ == '__main__':
    app.run()

app.run(host=HOST, port=PORT, debug=ISDEBUG)
