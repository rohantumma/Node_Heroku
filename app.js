const express = require('express');
const mongoose = require('mongoose');

// import router

//start exp app
const app = express();

mongoose.connect("mongodb+srv://max:max@cluster0.uokio.mongodb.net/kjk?retryWrites=true&w=majority")
        .then(()=>{
          console.log("CONNECTED TO DB..");
        })
        .catch(()=>{ console.log("CONNECTION ERROR...")
        });

app.use(express.json());

const alienRouter = require('./router/demo');

app.use('/aliens',alienRouter);


// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
