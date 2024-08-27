# testing webhooks
from flask import Flask, render_template, request, redirect, send_from_directory, url_for, session, Response, abort, jsonify, send_from_directory
from flask_migrate import Migrate
import os
from flask_sqlalchemy import SQLAlchemy
from functools import wraps
from dotenv import load_dotenv
from flask_cors import CORS


# PythonAnywhere and windows10 reference parent directories differently
# If trying to load the windows 10 way doesn't find a .env file (i.e. returns False), use the PythonAnywhere route
if load_dotenv("./finance.env") == False:
    load_dotenv("../finance.env")
else:
    load_dotenv("./finance.env")

# Initialise app and add CORS config
app = Flask(__name__, static_folder="dist", template_folder="src/templates")
CORS(app)


# Using sqlite3 db in Dev mode, MySQL in Production mode
# The correct URI is stored in the .env file
# Secret key changes for each new session; improves security
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URI")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_POOL_RECYCLE"] = 280
app.config["SQLALCHEMY_POOL_SIZE"] = 20
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0
app.config["SESSION_PERMANENT"] = False
app.config["SECRET_KEY"] = os.urandom(12).hex()
app.config["UPLOAD_FOLDER"] = "API/"
app.secret_key = os.urandom(12).hex()


db = SQLAlchemy(app)
# Allows us to migrate the db
# Needed when adding new columns to any table during development
# See db_migrate.txt in Notes/ for tips on how to migrate
# Doesn't work for MySQL, need to append manually via terminal
migrate = Migrate(app, db)


class NominalTransactions(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False, unique=True)
    company = db.Column(db.String(40))

    # Be able to use [key] to return attribute
    # E.g. transaction['client_code']
    def __getitem__(self, key):
        return self.__dict__[key]

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False, unique=True)
    username = db.Column(db.String(64))
    password = db.Column(db.String(128))

# Create database tables if they don't already exist
with app.app_context():
    db.create_all()


# Generic error page when error
# Most common error is url doesn't exist
# Or if database connection fails
# usually caused by re-starting database on PythonAnywhere and not giving time
@app.errorhandler(Exception)
def not_found(e):
    # return render_template("error.html", error=e)
    pass



# Wrapper for login required
# Loads user's personal theme
# If error/user doesn't exist in db, load login page
def login_required(f):
    @wraps(f)
    def wrap(company, email, username, session_key):
        try:
            if os.getenv("DEV") == "True" or session[email] == session_key:
                user = Users.query.filter(
                    Users.company == company, Users.email == email).first()
                design = user.designTheme
                return f(company, email, username, session_key,theme=design)
            else:
                return redirect(url_for("login"))
        except KeyError as exception:
            # etype, value, tb = sys.exc_info()
            # print(traceback.print_exception(etype, value, tb))
            # print("error", exception)
            return redirect(url_for("login"))

    return wrap

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/dashboard")
def addSubmission():
    return render_template("dashboard.html")

debug = os.getenv("DEBUG")
if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=debug)
