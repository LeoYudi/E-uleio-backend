const { Model, DataTypes } = require('sequelize');

class Product extends Model {
    static init(connection) {
        super.init({
            id_publisher: DataTypes.INTEGER,
            id_category: DataTypes.INTEGER,
            name: DataTypes.STRING,
            author: DataTypes.STRING,
            description: DataTypes.TEXT,
            price: DataTypes.FLOAT,
            total_pages: DataTypes.INTEGER,
            image_uri: DataTypes.STRING,
            created_at: DataTypes.DATE
        }, {
            sequelize: connection
        })
    }
    static associations(models) {
        this.belongsTo(models.Publisher, { foreignKey: 'id_publisher', as: 'publisher' })
        this.belongsTo(models.Category, { foreignKey: 'id_category', as: 'category' })
    }
}

module.exports = Product