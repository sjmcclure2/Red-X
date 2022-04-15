const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = 8080;

const app = express();

const authorizedUsers = [
  {username:"j", password:"1"},
  {username:"m", password:"2"}
]

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/login', (req, res) => {
  let author = false;
  for(let i = 0; i< authorizedUsers.length; i++) {
     if(req.body.username === authorizedUsers[i].username)
       if(req.body.password === authorizedUsers[i].password) {
         author = true;
         console.log(author)
       }
  }
  if(author) {
    console.log(author)
    res.status(200).send({
      token:'test123'
    })
  } else {
    res.status(404).json(req.body)

  }
})

app.get("/api", (req, res) => {
  res.json({message: "Hello World"});
});
app.get("/api/projects", (req, res) => {
  res.json([{name: "a new project",
            repo_owner: "that one guy"
           },{
             name:"a second project",
             repo_owner: "me"
           }]);
});

app.listen(PORT, () => {
  console.log(`Express app is listening on Port: ${PORT}`);
});