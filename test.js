import  express  from "express";  // importing express
import url_details from "./middleware.js"

const app=express();   //create a reference variable for express to use it

app.get("/",(req,res)=>{     // https://localhost:3002/ after this '/' call here
    res.send("Hello World");
})

app.post("/about",(req,res,next)=>{
    console.log(req.method); //display method
    console.log(req.url); //display url
    next();        //next is used to call next function
},(req,res)=>{     // https://localhost:3002/about
    res.send("About Us");
})

app.put("/contact",url_details,(req,res)=>{     // https://localhost:3002/contact
    res.send("Contact me");
})


app.put("/secure",url_details,(req,res)=>{     
    res.send("Important Data");
})

app.post("/users/:userId/articles/:articleId",(req,res)=>{   //userId and articleid are data parameters from url
    console.log(req.params.userId);                          // req.params is used to fetch it
    res.send(req.params);
})

app.post("/users",(req,res)=>{        // using query params 

    res.send(req.query.userId);      // fetching data
    
})


app.listen(3000,()=>{
    console.log("Server started");
}); // express will use port 3002 or replace 3002 with frontend link
