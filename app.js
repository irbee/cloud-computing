const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json'); // Replace with your own service account key
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://tes-bangkit-capstone.firebaseio.com/', // Replace with your Firestore database URL
});

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());


// Routes
app.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching courses' });
  }
});

app.post('/courses', async (req, res) => {
  try {
    const { title, instructor, duration } = req.body;
    const newCourse = new Course({ title, instructor, duration });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: 'Error creating course' });
  }
});

app.put('/courses/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, instructor, duration } = req.body;
    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      { title, instructor, duration },
      { new: true }
    );
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ error: 'Error updating course' });
  }
});

app.delete('/courses/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Course.findByIdAndDelete(id);
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting course' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
