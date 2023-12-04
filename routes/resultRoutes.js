const Joi = require('@hapi/joi');

const resultRoutes = [
    {
        method: 'GET',
        path: '/results',
        handler: (request, h) => {
            // Logic to retrieve all results
            // Example: return a list of results from the database
            return { message: 'Get all results' };
        }
    },
    {
        method: 'POST',
        path: '/results',
        handler: (request, h) => {
            // Logic to create a new result
            // Example: save the new result data to the database
            const { firstName, lastName, studentID } = request.payload;
            return { message: 'Create a new result', firstName, lastName, studentID };
        },
        options: {
            validate: {
                payload: Joi.object({
                    firstName: Joi.string().required(),
                    lastName: Joi.string().required(),
                    studentID: Joi.number().integer().required()
                })
            }
        }
    },
    // Add other routes for CRUD operations on results
    // Example: GET /results/{id}, PUT /results/{id}, DELETE /results/{id}
];

module.exports = resultRoutes;
