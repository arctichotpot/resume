# 将...转换为pdf
from flask import Blueprint

toPdf = Blueprint('toPdf', __name__)


@toPdf.route('/html')
def html():
    return "html"


@toPdf.route('/word')
def word():
    return 'word'


@toPdf.route('/markdown')
def markdown():
    return 'markdown'
