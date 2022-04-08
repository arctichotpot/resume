# 将pdf转换为...
from flask import Blueprint

pdfTo = Blueprint('pdfTo', __name__)


@pdfTo.route('/html')
def html():
    return "html"


@pdfTo.route('/word')
def word():
    return 'word'


@pdfTo.route('/markdown')
def markdown():
    return 'markdown'
