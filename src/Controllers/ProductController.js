const Category = require('../models/Category');
const Product = require('../models/Product');
const Publisher = require('../models/Publisher');
const { hasNull } = require('../utils/hasNull');

module.exports = {
    async save(req, res) {
        if (!req.isAdmin)
            return res.status(404).send({ msg: 'forbidden' });

        if (hasNull(req.body, ['id_publisher', 'id_category', 'name', 'price', 'description', 'author']))
            return res.status(400).send({ msg: 'missing required data ' });

        const { name, author, description, price, total_pages, id_category, id_publisher, image_uri } = req.body;

        try {
            const category = await Category.findByPk(id_category);
            const publisher = await Publisher.findByPk(id_publisher);

            if (!category || !publisher)
                return res.status(404).send({ msg: 'category or publisher not found' });

            let product = await Product.create({
                id_publisher,
                id_category,
                name,
                author,
                description,
                price,
                total_pages,
                image_uri
            });

            return res.status(200).send(product);

        } catch (error) {
            console.log(error);
            res.status(500).send({ msg: 'internal server error' });
        }
    },
    async list(req, res) {

        if (hasNull(req.query, ['limit', 'page']))
            return res.status(400).send({ msg: 'missing required data' });

        const { id_publisher, id_category, limit, page } = req.query;

        let query = {
            where: {},
            limit: parseInt(limit),
            offset: (page - 1) * limit,
            include: { association: 'category' },
            include: { association: 'publisher' },
        };

        if (id_category)
            query.where.id_brand = parseInt(id_category);
        if (id_publisher)
            query.where.id_brand = parseInt(id_publisher);

        try {
            const products = await Product.findAll(query);

            if (products.length == 0)
                return res.status(404).sebd({ msg: 'products not found' });

            return res.status(200).send(products);

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }

    },
    async edit(req, res) {

        if (hasNull(req.params, ['id_product']))
            return res.status(400).send({ msg: 'missing required data' });

        const { id_product } = req.params;

        const { name, author, description, price, total_pages, id_category, id_publisher } = req.body;

        try {
            const product = await Product.findByPk(id_product);

            if (!product)
                return res.status(404).send({ msg: 'product not found' });

            if (id_category) {
                const category = await Category.findByPk(id_category);
                if (!category)
                    return res.status(404).send({ mag: 'category not found' });
            }

            if (id_publisher) {
                const publisher = await Publisher.findByPk(id_publisher);
                if (!publisher)
                    return res.status(404).send({ mag: 'publisher not found' });
            }

            await product.update({
                id_publisher,
                id_category,
                name,
                author,
                description,
                price,
                total_pages,
                //image_uri
            });

            return res.status(200).send(product);

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }

    },

    async delete(req, res) {
        if (hasNull(req.params, ['id_product']))
            return res.status(400).send({ msg: 'missing required data' });

        const { id_product } = req.params;

        try {
            const product = await Product.findByPk(id_product);

            if (!product)
                return res.status(404).send({ msg: 'product not found' });

            await product.destroy();

            return res.status(200).send(product);

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }
    }

}