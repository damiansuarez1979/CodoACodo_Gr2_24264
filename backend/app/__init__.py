from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config

db = SQLAlchemy()

def create_app():
    app = Flask(Tienda_De_Bicicletas)
    app.config.from_object(Config)

    db.init_app(app)

    from app.routes import bp as routes_bp
    app.register_blueprint(routes_bp)

    return app