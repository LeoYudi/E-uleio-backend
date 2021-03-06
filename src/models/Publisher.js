const { Model, DataTypes } = require('sequelize');

class Publisher extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
    static associate(models) {
        this.hasMany(models.Product, { foreignKey: 'id_publisher', as: 'products' })
    }
}

module.exports = Publisher