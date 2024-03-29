export default function url_details(req,res,next)
{
    console.log(req.method);
    console.log(req.url);
    var url=req.url;
    if(url==="/secure")
    {
        res.status(405).send("ACCESS DENIED");  //sending status
    }
    next();
}