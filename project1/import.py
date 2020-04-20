import os, csv
from application import *
from sqlalchemy import *
from sqlalchemy.orm import scoped_session,sessionmaker
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from sqlalchemy.ext.declarative import declarative_base

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = false

db.init_app(app)

def main():
    app.app_context().push()
    db.create_all()
    data = open("books.csv")

    read = csv.reader(data)

    for isbn,title,author,year in read:
        # print(isbn)
        if isbn == "isbn":
            continue
        else:
            book = Book(isbn= isbn, title = title, author = author, year = year)
            db.session.add(book)
    
    db.session.commit()
    print('added')
if __name__ == "__main__":
    main()



