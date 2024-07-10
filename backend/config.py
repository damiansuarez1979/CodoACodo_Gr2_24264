import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'postgresql://dbuser:yt1mrcOEbdBwEqKNfpw1yQKVGJokNJTg@dpg-cq7a1b5ds78s738tl3kg-a/tienda_de_bicicletas'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
