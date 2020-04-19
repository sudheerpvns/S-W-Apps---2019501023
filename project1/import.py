import os, csv

from sqlalchemy import *
from sqlalchemy.orm import scoped_session,sessionmaker
from flask_sqlalchemy import SQLAlchemy
# from tqdm import tqdm
from sqlalchemy.ext.declarative import declarative_base

engine = create_engine(os.getenv("DATABASE_URL"))
Session = sessionmaker(bind = engine)
session = Session()
Base = declarative_base()
db = scoped_session(sessionmaker(bind=engine))

class Book(Base):
    __tablename__ = "Books"
    isbn = Column(String, primary_key = True)
    title = Column(String, nullable = False)
    author = Column(String, nullable = False)
    year = Column(String, nullable = False)

Base.metadata.create_all(engine)
data = open("books.csv")

read = csv.reader(data)

for isbn,title,author,year in read:
    if isbn == "isbn":
        continue
    else:
        book = Book(isbn= isbn, title = title, author = author, year = year)
        session.add(book)
print('added')
session.commit()