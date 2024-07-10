from app import create_app

app = create_app("Tienda_De_Bicicletas")

if __name__ == '__main__':
    app.run(debug=True)
