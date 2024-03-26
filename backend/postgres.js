const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./database');
const { response } = require('express');

//create instance
const app = express();

app.use(bodyParser.json());
app.use(cors());


//Create database

// pool.query("CREATE DATABASE mywebsite_db").then((response)=>{
//     console.log("Database created");
// })
// .catch((err)=>{
//     console.log(err);

// })

//Create signup table
// const createTblQry = `CREATE TABLE signupTable(
//     user_id serial PRIMARY KEY,
//     name varchar(50) not null,
//     email varchar(50) unique not null,
//     password varchar(50) not null
// )`

// pool.query(createTblQry).then((response)=>{
//     console.log("Table created");
// })
// .catch((err)=>{
//     console.log(err);
// })


//Route to get all entries
app.get('/getUsers',(req,res)=>{

    const getQry = `SELECT * from signupTable;`;

    pool.query(getQry)
    .then(result=>{
        const allUsers = result.rows;
        res.json(allUsers);
    })
    .catch(error=>{
        console.log("Error fetching entries", error);
        res.json({error: "Error fetching entries"});
    })
})




//Route to handle Signup request
app.post('/userSignup', (req, res) => {

    const { name, email, password } = req.body;
    console.log(req.body);

    const insertQry = `
    INSERT INTO signupTable(name,email,password)
    VALUES($1, $2, $3)
   RETURNING user_id,name,email,password;
    `;

    const values = [name, email, password];

    pool.query(insertQry, values)
        .then(result => {
            const insertedUser = result.rows[0];
            // console.log(result.rows[0]);

            res.json(insertedUser);
        })
        .catch(error=>{
            console.log("Error inserting user", error);
            res.json({error: "Error inserting user"});
        })

})



//Route to handle Login request
app.post('/userLogin',(req,res)=>{

    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);

    pool.query( `SELECT * from signupTable WHERE email= $1`,[email],(err,result)=>{

        if(err)
        {
            console.log("error executing query");
            res.json({error:"error executing query"});
        }

        //Check if email exists
        if(result.rows.length === 0)
        {
            console.log("email not present");
            res.json({error:"email not present"});
        }

        const user = result.rows[0];

        //Check if correct credemntials
        if(user.password!== password)
        {
            console.log("Wrong password");
            res.json({error:"Wrong password"});
        }

        //Authentication successful
        else{
        console.log("Authenticated");
            res.json({result:"Login successful"});
        }

    })
})





app.listen(8000, () => {
    console.log("Listening to port 8000");
})