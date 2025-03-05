import React from "react";
const LandingPage=()=>{
    return(
        <div style={{textAlign:"center",padding:"20px"}}>
            <h1>Welcome to the Fake Currency Detection Application</h1>
            <p>Upload a currency note image to detect if it's Fake or Geniune.</p>
            <button style={{padding:"10px 20px",fontSize:"16px"}}>
                Get Started
            </button>
        </div>
    );
}

export default LandingPage;