import React, { useState } from 'react'

const uploadphoto = () => {
const [myfile,setMyFile]=useState('')
const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(myfile)
}
const handleChange = (e)=>{
    setMyFile(e.target.value)
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="myfile">Select a file:</label>
        <input type="file" id="myfile" value={myfile} onChange={handleChange} name="myfile" />
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default uploadphoto