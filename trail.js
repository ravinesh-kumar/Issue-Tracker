import React from 'react'

const trail = () => {
    const navigate = userNavigate();

    const userform = {
        name:"",
        mobile:"",
        emial:"",
    }

    const formdata = async(formdata) =>{

        console.log(formdata);
        const response = await fetch("http://localhost:5000/user/add",{
            method:"POST",
            body:JSON.stringify(formdata),
            header : {
                "content-Type":"application/json"
            }
        })

        if(response.status == 200){
            console.log("success")
            Swal.fire({
                "icon": "success",
                "title":"well done",
                "text":"wounderfull job biro"
            })
            navigate("/login/or anypage you want to send the user ")
        }

    }


  return (
    <div>
      
    </div>
  )
}

export default trail
