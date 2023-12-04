const Joi = require('@hapi/joi');

const courseRoutes = [
    {
        method: 'GET',
        path: '/courses',
        handler: (request, h) => {
            // Logic to retrieve all courses
            // Example: return a list of courses from the database
            return { message: 'Get all courses' };
        }
    },
    {
        method: 'POST',
        path: '/courses',
        handler: (request, h) => {
            // Logic to create a new course
            // Example: save the new course data to the database
            const { courseName, instructorID, schedule, description } = request.payload;
            // Example: Check if the course was successfully added to the database
            const courseAdded = true; // You should replace this with actual database logic

            if (courseAdded) {
                return h.response({ message: 'Course added successfully' }).code(201);
            } else {
                return h.response({ message: 'Failed to add course' }).code(500);
            }
        },
        
        options: {
            validate: {
                payload: Joi.object({
                    courseName: Joi.string().required(),
                    instructorID: Joi.number().integer().required(),
                    schedule: Joi.string().required(),
                    description: Joi.string().required()
                })
            }
        }
    },
    // Add other routes for CRUD operations on courses
    // Example: GET /courses/{id}, PUT /courses/{id}, DELETE /courses/{id}
];

module.exports = courseRoutes;
