const Product = require('../models/Product');

module.exports = {
    async save(req, res) {
        const { name, author, description, price, total_pages, image_uri, id_category, id_publisher } = req.body;
        const product = await Product.create({
            id_publisher,
            id_category,
            name,
            author,
            description,
            price,
            total_pages,
            image_uri,
        });
        return res.status(200).send(product);
    },
    async list(req, res) {
        const products = await Product.findAll();

        return res.status(200).send(products);
    },
    async update(req, res) {
        const { id_product } = req.params;

        const { name, author, description, price, total_pages, image_uri, id_category, id_publisher } = req.body;

        const product = await Product.findByPk(id_product);

        const productUpdate = await product.update({
            id_publisher,
            id_category,
            name,
            author,
            description,
            price,
            total_pages,
            image_uri,
        });
        return res.status(200).send(productUpdate);
    },

    async delete(req, res) {
        const { id_product } = req.params;

        const product = await Product.findByPk(id_product);

        const productDeleted = await product.destroy();

        return res.status(200).send({ msg: 'product deleted' });
    }

}