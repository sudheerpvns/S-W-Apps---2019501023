import os
import requests
from flask import Flask, session, render_template,request
from flask_session import Session
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

app = Flask(__name__)
names = {}
# Check for environment variable
if not os.getenv("DATABASE_URL"):
    raise RuntimeError("DATABASE_URL is not set")

# Configure session to use filesystem
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)
Session(app)

# Set up database
engine = create_engine(os.getenv("DATABASE_URL"))
db = scoped_session(sessionmaker(bind=engine))


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/register",methods=["POST","GET"])
def register():
    # session.clear()
    if request.method == "GET":    
        return render_template("register.html")
        # username = request.form.get("username")
        # pass1 = request.form.get("pass")
        # print(username+"    "+pass1)
    if request.method == "POST":
        # print("here")
        username = request.form.get("username")
        pass1 = request.form.get("password")
        print (username+"    "+pass1)
        names[username] = pass1
        return render_template("userlist.html",name = names.keys())
