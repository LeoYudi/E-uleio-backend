const Publisher = require('../models/Publisher');

module.exports = {
    async save(req, res) {
        const { name } = req.body;

        const publisher = await Publisher.create({ name });

        return res.status(200).send(publisher);
    },

    async list(req, res) {
        const publishers = await Publisher.findAll();

        return res.status(200).send(publishers);
    },

    async edit(req, res) {
        const { id_publisher } = req.params;

        const { name } = req.body;

        const publisher = await Publisher.findByPk(id_publisher);

        const publisherUpdate = await publisher.update({ name });

        return res.status(200).send(publisherUpdate);
    },

    async delete(req, res) {
        const { id_publisher } = req.params;

        const publisher = await Publisher.findByPk(id_publisher);

        const publisherDeleted = await publisher.destroy();

        return res.status(200).send({ msg: 'publisher deleted' });
    }

}