const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json())
app.use(cors());

app.use('/api/exercises', require('./routes/exercises'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/users', require('./routes/users'));
app.use('/api/workouts', require('./routes/workouts'));
app.use(express.json());

app.listen(5000, () => {
    console.log('Listening on 5000');
})