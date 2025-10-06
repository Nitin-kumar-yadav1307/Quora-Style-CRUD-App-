const express = require("express");
const app = express();
const path = require("path");
const uuidV4 = require("uuid-v4");
let port = 8080;
app.use(express.urlencoded({extended:true}));
//app.use(express.json());
const { v4:uuidv4} = require("uuid");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));


app.set("views",path.join(__dirname , "views"));
app.set("view engine", "ejs");//view->template

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {    id: uuidv4(),
        username : "Nitin",
        content : "i love coding" 

    },
    {      id: uuidv4(),
        username : "senku",
        content : "its getting exlerated" 
    },
    {   id : uuidv4(),
        username : "yami",
        content : "push your limits"
    }
];

app.get("/posts",( req , res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",( req , res)=>{
    res.render("new.ejs");
});

app.post("/posts/new",( req , res)=>{
   let {username,content} = req.body;
   let id = uuidv4();
   posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log("Requested id:", id);
  let post = posts.find((p) => p.id === id);
  console.log("Found post:", post);
  
  if (!post) {
    return res.status(404).send("Post not found");
  }
  res.render("show.ejs", { post });
});

app.patch("/posts/:id",(req,res) =>{
    let {id} = req.params;
    let newContenet = req.body.content;
     let post = posts.find((p) => p.id === id);
     post.content = newContenet;
     console.log(post);
     res.redirect("/posts");
    });

    app.get("/posts/:id/edit",(req,res)=>{
        let { id } = req.params;
        let post = posts.find((p) => p.id === id);
        res.render("edit.ejs",{post})
       

    });
    app.delete("/posts/:id",(req,res)=>{
       let {id} =req.params;
       posts = posts.filter((p) => id!== p.id);
       res.redirect("/posts");
    });

    

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});