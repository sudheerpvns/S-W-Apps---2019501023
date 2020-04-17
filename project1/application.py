import os
import datetime
import requests
from flask import Flask, session, render_template,request
from flask_session import Session
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
names = {}

# Check for environment variable
if not os.getenv("DATABASE_URL"):
    raise RuntimeError("DATABASE_URL is not set")

# Configure session to use filesystem
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)
# Session(app)

# Set up database
engine = create_engine("postgres://aaazqwvuhlccwa:ea427198712503fdacce5bebdb4ea39407984d8550acd46ac00780e5f77246a2@ec2-54-88-130-244.compute-1.amazonaws.com:5432/dajd9u9u8dgmon")
db = SQLAlchemy(app)

class user(db.Model):
    user_id = db.Column(db.Integer, primary_key = True)
    user_name =db.Column(db.String(100), nullable = False)
    mail_id = db.Column(db.String(100), unique= True,nullable = False)
    password = db.Column(db.String(100),nullable = False)
    date_time = db.Column(db.Date, nullable = False)

db.create_all()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/register",methods=["POST","GET"])
def register():
    # session.clear()
    # id11 = 100
    if request.method == "GET":    
        return render_template("register.html")

    if request.method == "POST":
        # id = id11
        username = request.form.get("username")
        mailid = request.form.get("mail_id")
        pass1 = request.form.get("password")
        date_time = datetime.datetime.now()
        emails = user.query.filter_by(mail_id = mailid).first()
        if emails is None:
            new_user = user(user_name = username, mail_id = mailid, password = pass1,date_time=date_time)
            db.session.add(new_user)
            db.session.commit()
            # id11 += 1/
            return render_template("sucess.html")
        else:
            return render_template("error.html", msg= "Email is already registered")

@app.route("/admin")
def admin():
    data = user.query.order_by(user.user_name).all()
    # print(data)
    data1=[]
    for i in data:
        print(i.user_id,i.user_name,i.date_time)
        data1.append([i.user_name,i.date_time])
    return render_template("admin.html",datas=data1)

