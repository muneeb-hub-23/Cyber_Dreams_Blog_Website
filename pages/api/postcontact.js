import * as fs from 'fs'
export default async function handler(req,res){
    if(req.method === 'POST'){
        let data = await fs.promises.readdir("contactdata")

        fs.writeFile(`contactdata/${data.length+1}.json`,JSON.stringify(req.body),'utf-8',(err)=>{
            if(err){
                console.log(err)
        }else{
            console.log("data saved successfully")
        }
        })
        res.status(200).json(req.body)
    }else{
        res.status(200).json(["No Data To Show"])
    }
}