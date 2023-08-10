const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Rakib", email: "rakib@gmail.com" },
  { id: 2, name: "Sakib", email: "sakib@gmail.com" },
  { id: 3, name: "Akib", email: "akib@gmail.com" },
];

//API
app.get("/", (req, res) => {
  res.send("Users Management Server is Running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server is Running on PORT: ${port}`);
});
