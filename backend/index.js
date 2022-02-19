const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/goals', require('./routes/goalRoutes'));

//turi likti paskutinis, kad pirmiausia viskas užsikrautų ir tik tada paleistų serverį
app.listen(port, ()=> console.log(`Server started on port ${port}`));