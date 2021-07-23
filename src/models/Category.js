const { Model, DataTypes } = require('sequelize');

class Category extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
    static associations(models) {
        this.hasMany(models.Product, { foreignKey: 'id_category', as: 'products' })
    }
}

module.exports = Category