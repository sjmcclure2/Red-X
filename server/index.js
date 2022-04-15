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
     if(req.body.username.toLowerCase() === authorizedUsers[i].username)
       if(req.body.password.toLowerCase() === authorizedUsers[i].password) {
         author = true;
         console.log(author)
       }
  }
  if(author) {
    res.send({
      token:'test123'
    })
  } else {
    res.status(404).json(req.body)

  }
})
const blankArray = [{name: "a new project",
repo_owner: "that one guy"
},{
name:"a second project",
repo_owner: "me"
},{
name: "a new project",
repo_owner: "that one guy"
},{
name:"a second project",
repo_owner: "me"
},{
name: "a new project",
repo_owner: "that one guy"
},{
name:"a second project",
repo_owner: "me"
},{
name: "a new project",
repo_owner: "that one guy"
},{
name:"a second project",
repo_owner: "me"
},{
name: "a new project",
repo_owner: "that one guy"
},{
name:"a second project",
repo_owner: "me"
},{
name: "a new project",
repo_owner: "that one guy"
},{
name:"a second project",
repo_owner: "me"
},{
name:"a second project",
repo_owner: "me"
},{
name: "a new project",
repo_owner: "that one guy"
},{
name:"a second project",
repo_owner: "me"
},{
name: "a new project",
repo_owner: "that one guy"
},{
name:"a second project",
repo_owner: "me"
},{
name: "17",
repo_owner: "that one guy"
},{
name:"16",
repo_owner: "me"
},{
name: "15",
repo_owner: "that one guy"
},{
name:"14",
repo_owner: "me"
},{
name: "13",
repo_owner: "that one guy"
},{
name:"12",
repo_owner: "me"
},{
name:"11",
repo_owner: "me"
},{
name: "10",
repo_owner: "that one guy"
},{
name:"9",
repo_owner: "me"
},{
name: "8",
repo_owner: "that one guy"
},{
name:"7",
repo_owner: "me"
},{
name: "6",
repo_owner: "that one guy"
},{
name:"5",
repo_owner: "me"
},{
name: "4",
repo_owner: "that one guy"
},{
name:"3",
repo_owner: "me"
},{
name: "2",
repo_owner: "that one guy"
},{
name:"1",
repo_owner: "me"
}];

function pushResults(limit, offset) {
  returnArray = [];
  for(i = offset; returnArray.length < limit; i++) {
    if(blankArray[i]) {
      returnArray.push(blankArray[i])
    } else {
      break;
    }
  }
  console.log(returnArray)
  return returnArray;
}

app.get("/api", (req, res) => {
  res.json({message: "Hello World"});
});
app.get("/api/projects", (req, res) => {
  let results = pushResults(req.query.limit, req.query.offset)
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Express app is listening on Port: ${PORT}`);
});