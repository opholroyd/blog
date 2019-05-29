const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

// Init middleware
app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/about', (res, req) => {
    res.body("about.html")
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('/api/members', require('./routes/api/members'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));


// Express Format
// app.get('/', function(req, res){
//     //fetch from db
//     //load pages
//     //return json
//     //full access to req and res
// })