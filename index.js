const express=require("express");
const bodyPaeser=require("body-parser");
const cors=require("cors");
const mongoose=require("mongoose");
//const userRouter =require('./routes/User.js');

const app=express();
app.use(cors());

const PORT =5000;
app.use(bodyPaeser.json());

app.get('/', (req, res) => res.send('Home Page'));



const mongodbUrl='mongodb+srv://nipunalahiru2000:password2000@cluster0.pmcaqag.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log("Server is up and running on port " + PORT);
    });
})
.catch(err => console.error('Could not connect to MongoDB', err));
