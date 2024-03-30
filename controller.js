import User from "./schema.js";

export async function createUser(req,res,next)
{
    console.log("Creating new User");
    console.log(req.body);
    const user=new User(req.body);      // creating an instance by passing the input from client using the predefinded schema [as like java object]  
    try{
        const userUpload=await user.save(); //save newly created object in mongoDB [async operation because updating DB with help of middleware mongoose]
        console.log("Done");
        res.status(201).json(userUpload);   //sending success message
    }
    catch(err)
    {
        console.log(err);
        res.status(500).send(err.message);  //detecing error
    } 

}