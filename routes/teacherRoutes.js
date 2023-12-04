const Joi = require('@hapi/joi');

const teacherRoutes = [
    {
        method: 'GET',
        path: '/teachers',
        handler: (request, h) => {
            // Logic to retrieve all teachers
            // Example: return a list of teachers from the database
            return { message: 'Get all teachers' };
        }
    },
    {
        method: 'POST',
        path: '/teachers',
        handler: (request, h) => {
            // Logic to create a new teacher
            // Example: save the new teacher data to the database
            const { name, email, courseTaught, password } = request.payload;
            return { message: 'Create a new teacher', name, email, courseTaught };
        },
        options: {
            validate: {
                payload: Joi.object({
                    name: Joi.string().required(),
                    email: Joi.string().email().required(),
                    courseTaught: Joi.string().required(),
                    password: Joi.string().required()
                })
            }
        }
    },
    // Add other routes for CRUD operations on teachers
    // Example: GET /teachers/{id}, PUT /teachers/{id}, DELETE /teachers/{id}
];

module.exports = teacherRoutes;
