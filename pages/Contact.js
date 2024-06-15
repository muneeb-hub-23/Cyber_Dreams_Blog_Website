import React, { useState } from 'react'
import Head from 'next/head'
const Contact = () => {
const [formdata,setFormData] = useState({name:'',email:'',message:''})
const handleSubmit = async (e)=>{
    e.preventDefault()
    await fetch("http://localhost:3000/api/postcontact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formdata),
})
setFormData({name:'',email:'',message:''})
  }
const handleInputChange = (e)=>{
  setFormData(prevformdata=>({...prevformdata,[e.target.name]:e.target.value}))
}
  return (

    <div>
      {/* <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      </Head> */}
    <h1>Contact Us</h1>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Your Name</label>
    <input value={formdata.name} name='name' onChange={handleInputChange} type="text" className="form-control" id="name" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input value={formdata.email} name='email' onChange={handleInputChange} type="email" className="form-control" id="email" />
  </div>

  <div className="mb-3">
  <label className="form-label" htmlFor="message">Your Message</label>
  <textarea value={formdata.message} name='message' onChange={handleInputChange} type="text" className="form-control" id="message" />
   </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Contact