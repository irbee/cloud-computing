const Hapi = require('@hapi/hapi');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const submissionRoutes = require('./routes/submissionRoutes');
const resultRoutes = require('./routes/resultRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');

const mysql = require('mysql');

// Create a connection to a Gogle cloud SQL
const connection = mysql.createConnection({
  socketPath: '/cloudsql/your_project_id:your_region:your_instance_name',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to Google Cloud SQL:', err);
    return;
  }
  console.log('Connected to Google Cloud SQL database');
});

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    // Registering routes
    server.route(teacherRoutes);
    server.route(studentRoutes);
    server.route(courseRoutes);
    server.route(submissionRoutes);
    server.route(resultRoutes);
    server.route(assignmentRoutes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();