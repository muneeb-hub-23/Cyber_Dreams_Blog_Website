import * as fs from 'fs'

export default async function handler(req,res){
    let allblogs = []
    let blogs = await fs.promises.readdir(`blogdata`)

    for(var ind=0; ind<blogs.length; ind++){
        let blog = await fs.promises.readFile('blogdata/'+blogs[ind],'utf-8')
        allblogs.push(JSON.parse(blog))
    }
    res.status(200)
    res.send(allblogs)

        // if(err){
        //     res.status(200)
        //     res.send({error:"No Such Blog Found"})
        // }else{
        // data.forEach((item)=>{
        //     fs.readFile('blogdata/'+item,'utf-8',(err,data)=>{
        //         if(err){
        //             console.log('file not found')
        //         }else{
        //             data = JSON.parse(data)
        //             allblogs.push({title:data.title,description:data.description})
                
        //         }
        //     })

        // })
        // res.status(200)
        // res.send(allblogs)
        // }
   // })
    
    
}