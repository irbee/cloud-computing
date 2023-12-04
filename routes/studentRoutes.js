const Joi = require('@hapi/joi');

const studentRoutes = [
    {
        method: 'GET',
        path: '/students',
        handler: (request, h) => {
            // Logic to retrieve all students
            // Example: return a list of students from the database
            return { message: 'Get all students' };
        }
    },
    {
        method: 'POST',
        path: '/students',
        handler: (request, h) => {
            // Logic to create a new student
            // Example: save the new student data to the database
            const { name, email, password } = request.payload;
            return { message: 'Create a new student', name, email };
        },
        options: {
            validate: {
                payload: Joi.object({
                    name: Joi.string().required(),
                    email: Joi.string().email().required(),
                    password: Joi.string().required()
                })
            }
        }
    },
    // Add other routes for CRUD operations on students
    // Example: GET /students/{id}, PUT /students/{id}, DELETE /students/{id}
];

module.exports = studentRoutes;
