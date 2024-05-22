const express = require("express");
const bodyParser = require("body-parser"); 
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require('./Routes/user');


const app = express();
const PORT = 4000;


app.use(cors());
app.use(bodyParser.json());


app.use('/user', userRouter);


app.get('/', (req, res) => res.send('Home Page'));


const mongodbUrl = 'mongodb+srv://nipunalahiru2000:password2000@cluster0.pmcaqag.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log("Server is up and running on port " + PORT);
    });
})
.catch(err => console.error('Could not connect to MongoDB', err));


app.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use.`);
    } else {
        console.error('Server error:', err);
    }
});
