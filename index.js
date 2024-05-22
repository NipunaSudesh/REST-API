const express=require("express");
const bodyPaeser=require("body-parser");
const cors=require("cors");
const mongoose=require("mongoose");
//const userRouter =require('./routes/User.js');

const app=express();
app.use(cors());

const PORT =4000;
app.use(bodyPaeser.json());

app.get('/', (req, res) => res.send('Home Page'));

app.get('/users',(req,res) =>{
    
})

app.post('/user',(req,res) =>{
    console.log(req.body);
})


mongoose.set('strictQuery',false);
const mongodbUrl='mongodb+srv://nipunalahiru2000:password2000@cluster0.pmcaqag.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongodbUrl)
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