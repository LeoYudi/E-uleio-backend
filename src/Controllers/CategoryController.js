const Category = require('../models/Category');

module.exports = {
    async save(req, res) {
        const { name } = req.body;

        const category = await Category.create({ name });

        return res.status(200).send(category);
    },
    async list(req, res) {
        const categories = await Category.findAll();

        return res.status(200).send(categories);
    },
    async edit(req, res) {
        const { id_category } = req.params;

        const { name } = req.body;

        const category = await Category.findByPk(id_category);

        const categoryUpdate = await category.update({ name });

        return res.status(200).send(categoryUpdate);
    },

    async delete(req, res) {
        const { id_category } = req.params;

        const category = await Category.findByPk(id_category);

        const categoryDeleted = await category.destroy();

        return res.status(200).send({ msg: 'cateogry deleted' });
    }

}