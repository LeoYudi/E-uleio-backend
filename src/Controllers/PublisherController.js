const Publisher = require('../models/Publisher');
const { hasNull } = require('../utils/hasNull');

module.exports = {
    async save(req, res) {

        if (!req.isAdmin)
            return res.status(403).send({ msg: 'forbidden' });

        if (hasNull(req.body, ['name']))
            return res.status(400).send({ msg: 'missing required data' });

        const { name } = req.body;

        try {

            const publisher = await Publisher.create({ name });

            return res.status(200).send(publisher);

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }
    },

    async list(req, res) {

        try {

            const publishers = await Publisher.findAll();

            if (publishers.length == 0)
                return res.status(404).send({ msg: 'not found' });

            return res.status(200).send(publishers);

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }
    },

    async edit(req, res) {

        if (!req.isAdmin)
            return res.status(403).send({ msg: 'forbidden' });
        if (hasNull(req.params, ['id_publisher']))
            return res.status(400).send({ msg: 'missing required data' });

        const { id_publisher } = req.params;
        const { name } = req.body;

        try {

            const publisher = await Publisher.findByPk(id_publisher);

            if (!publisher)
                return res.status(404).send({ msg: 'not found' });

            await publisher.update({ name });

            return res.status(200).send(publisher);

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }
    },

    async delete(req, res) {

        if (!req.isAdmin)
            return res.status(403).send({ msg: 'forbidden' });

        if (hasNull(req.params, ['id_publisher']))
            return res.status(400).send({ msg: 'missing required data' });

        const { id_publisher } = req.params;

        try {

            const publisher = await Publisher.findByPk(id_publisher);

            if (!publisher)
                return res.status(404).send({ msg: 'not found' });

            await publisher.destroy();

            return res.status(200).send({ msg: 'publisher deleted' });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: 'internal server error' });
        }
    }

}