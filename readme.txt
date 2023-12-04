npm install @hapi/hapi
npm install @hapi/joi
npm install mysql


//==========
untuk nanti ke cloud sql, ubah local mysql

const mysql = require('mysql');

// Create a connection to Google Cloud SQL
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

// Other parts of your Hapi server setup code go here...
