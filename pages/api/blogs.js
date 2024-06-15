import * as fs from 'fs'

export default async function handler(req,res){
    let allblogs = []
    let blogs = await fs.promises.readdir(`blogdata`)
    let end = parseInt(req.query.end)
    blogs=blogs.slice(0,end)
    console.log(blogs)
    for(var f=0; f<blogs.length; f++){
        let blog = await fs.promises.readFile('blogdata/'+blogs[f],'utf-8')
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