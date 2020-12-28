// loclohost:3000/users?age_gte=10&type=broadcast&car_ids=1,2,10,6&forest=true
const { Op } = require('sequelize');

module.exports = (query) => {
    let where = {
        limit: 20,
        offset: 0
    };

    if (query.limit) {
        where.limit = query.limit;
    }

    if (query.offset) {
        where.offset = query.offset;
    }

    if (query.age_gte) {
        where = {
            ...where,
            age: { [Op.gte]: query.age_gte }
        };
    }

    if (query.type) {
        where = {
            ...where,
            message_type: query.type
        };
    }

    if (query.car_ids) {
        const carsIds = query.car_ids.split(',');

        where = {
            ...where,
            car_id: {
                [Op.in]: carsIds
            }
        };
    }

    return where;
};
