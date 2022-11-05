import React,{useEffect, useState} from 'react'
import './form.scss'
import { useLocation,Navigate } from 'react-router-dom'
const Edituser = () => {
    const location=useLocation()
  
    const [user,editUser]=useState({
        name:"",
        email:"",
        photo:"",
      
        error:"",
        open:false,
    })
    const[form,setForm]=useState({  formData: new FormData()})
     const{formData}=form;
    const{_id,name,email,photo,error,open}=user

useEffect(()=>{
 editUser({...location.state})
},[])


    const handleChange=event=>{
        const{name}=event.target;
        const value=name==="photo"?event.target.files[0]:event.target.value
        formData.set(name,value)
        editUser({...user,[name]:value,error:""})
    }

    const submit=async()=>{
        try{
            const res=await fetch(`http://localhost:5000/edit/${_id}`,{
                method:"put",
                body:formData
            })
            const data = await res.json()
            console.log(data)
            if(data.error){
                editUser({...user,error:data.error})
            }
            else{
                editUser({name:"",email:"",photo:"",open:true})
                setTimeout(()=>{
                    window.location.reload()
                },3000)
            }
        }
        catch(err){
            console.log(err)
        }
    }
   

    //form
    const fillForm=()=>{
        return   <form onSubmit={e=>e.preventDefault()}>
        <div className='form-group'>
                <label className='text-muted'>photo</label>
                <input 
                type="file"
                onChange={handleChange}
                name="photo"
                />
            </div>
        <div className='form-group'>
                <label className='text-muted'>name</label>
                <input 
                type="text"
                value={name}
                name="name"
                onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label className='text-muted'>email</label>
                <input 
                type="text"
                value={email}
                name="email"
                onChange={handleChange}
                />
            </div>
            <button className='btn btn-raised btn-primary mt-2' onClick={()=>submit()}>submit</button>
        </form>
    }
  return (
    <div className='container'>
        <h2 className='mt-5 mb-5'>Edit Form</h2>
        <div className='alert alert-danger' 
        style={{display:error?"":"none"}}
        >
            {error}
        </div>
        <div className='alert alert-info' 
        style={{display:open?"":"none"}}
        >
            post successfully sumitted
        </div>
        {fillForm()}
      

    </div>
  )
} 

export default Edituser