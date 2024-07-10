from flask import Blueprint, request, jsonify
from app import db
from app.models import Bike

bp = Blueprint('main', __name__)

@bp.route('/bikes', methods=['POST'])
def create_bike():
    data = request.get_json()
    new_bike = Bike(name=data['name'], brand=data['brand'], price=data['price'], stock=data['stock'])
    db.session.add(new_bike)
    db.session.commit()
    return jsonify({"message": "Bike created"}), 201

@bp.route('/bikes', methods=['GET'])
def get_bikes():
    bikes = Bike.query.all()
    result = [{"id": bike.id, "name": bike.name, "brand": bike.brand, "price": bike.price, "stock": bike.stock} for bike in bikes]
    return jsonify(result)

@bp.route('/bikes/<int:id>', methods=['PUT'])
def update_bike(id):
    data = request.get_json()
    bike = Bike.query.get_or_404(id)
    bike.name = data['name']
    bike.brand = data['brand']
    bike.price = data['price']
    bike.stock = data['stock']
    db.session.commit()
    return jsonify({"message": "Bike updated"})

@bp.route('/bikes/<int:id>', methods=['DELETE'])
def delete_bike(id):
    bike = Bike.query.get_or_404(id)
    db.session.delete(bike)
    db.session.commit()
    return jsonify({"message": "Bike deleted"})
