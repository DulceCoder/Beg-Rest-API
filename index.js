const express = require("express");
const app = express();
app.use(express.json());

let userList = [
    {   
        name: "Pedro",
        age: 19,
        married: false,
    },
    {
        name: "Paulo",
        age: "20",
        married: false,
    },
    {
        name: "Suzie",
        age: "32",
        married: true, 
    },
];

app.get("/users", (req, res ) => {
    res.json(userList);
});

app.post("/users", (req, res) => {
    res.json(userList);

    const newUser = req.body;
    userList.push(newUser)
    res.json(userList); 
});



app.listen("3001", () => {
    console.log("Server running on port 3001");
});