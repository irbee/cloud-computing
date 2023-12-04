const Joi = require('@hapi/joi');

const assignmentRoutes = [
    {
        method: 'GET',
        path: '/assignments',
        handler: (request, h) => {
            // Logic to retrieve all assignments
            // Example: return a list of assignments from the database
            return { message: 'Get all assignments' };
        }
    },
    {
        method: 'POST',
        path: '/assignments',
        handler: (request, h) => {
            // Logic to create a new assignment
            // Example: save the new assignment data to the database
            const { courseID, title, description, deadline } = request.payload;
            return { message: 'Create a new assignment', courseID, title, description, deadline };
        },
        options: {
            validate: {
                payload: Joi.object({
                    courseID: Joi.number().integer().required(),
                    title: Joi.string().required(),
                    description: Joi.string().required(),
                    deadline: Joi.date().iso().required()
                })
            }
        }
    },
    // Add other routes for CRUD operations on assignments
    // Example: GET /assignments/{id}, PUT /assignments/{id}, DELETE /assignments/{id}
];

module.exports = assignmentRoutes;
