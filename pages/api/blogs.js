import * as fs from 'fs'

export default function handler(req,res){
    fs.readdir(`blogdata`, (err,data)=>{
        if(err){
            res.status(200)
            res.send({error:"No Such Blog Found"})
        }else{
        res.status(200)
        res.send(data)
        }
    })
    
    
}