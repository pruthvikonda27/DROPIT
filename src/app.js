require('dotenv').config();
const express = require('express');
const fileRoutes = require('./routes/fileRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/api', fileRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
