import React from 'react'
import { useNavigate } from 'react-router-dom';

function Profile() {

    const data  = JSON.parse(localStorage.getItem("user"));

    const{user:{name,email}} = data;


    const navigate  = useNavigate();



    const  containerStyle = {

        "display":"flex",
        "flexDirection":"column",
        "gap":"1rem",
        "justifyContent":"center",
        "alignItems":"center",
        "backgroundColor":"black",
        "color":"white",
        "padding":"1rem"

    }

    const parentStyle={

        "display":"flex",
        "flexDirection":"column",
        "gap":"1rem",
        "justifyContent":"center",
        "alignItems":"center",
    }

    const logoutUser = ()=>{


        navigate("/");
        localStorage.removeItem("user");

    }
   

  return (
    <div style={parentStyle} >
        <div style={containerStyle}> 
            <h2>{name}</h2>
            <h2>{email}</h2>
            <button style={{padding:"10px 20px"}} onClick={()=> logoutUser()}>Log out</button>
        </div>
    </div>
  )
}

export default Profile