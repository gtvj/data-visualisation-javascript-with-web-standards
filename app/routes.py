from app import app
from flask import render_template
import json

@app.route('/')
@app.route('/home')
def home():
    with open('app/data/pages.json') as pages:
        pages = json.load(pages)
    return render_template("index.html", title="Data visualisation in JavaScript", pages=pages)

# All requests for pages go to this route
@app.route('/pages/<page>')
def page(page):
    with open('app/data/pages.json') as pages:
        pages = json.load(pages)
    return render_template("pages/{}.html".format(page), pages=pages)