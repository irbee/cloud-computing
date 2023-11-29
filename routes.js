app.get('/get-data', async (req, res) => {
  try {
    const snapshot = await admin.firestore().collection('your-collection').get();
    const data = snapshot.docs.map((doc) => doc.data());
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.post('/add-data', async (req, res) => {
  try {
    const { newData } = req.body;
    await admin.firestore().collection('your-collection').add(newData);
    res.status(201).json({ message: 'Data added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding data' });
  }
});
