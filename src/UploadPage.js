
import React,{useState} from "react";
const UploadPage=()=>{
    const[image,setImage]=useState(null);
    const handleImageChange=(e)=>{
        const file=e.target.files[0];
        if (file){
            setImage(URL.createObjectURL(file));
        }
    };
    return(
        <div style={{textAlign:"center",padding:"20px"}}>
            <h1>Upload Currency Note Image</h1>
            <input 
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{padding:"10px"}}
            />
            {image && (<div> 
                <h2>Preview of Uploaded Image:</h2>
                <img src={image} alt="Currency Preview" style={{maxWidth:"500px"}}/>
                </div>
                )}  
                <button style={{
                    padding:"20px",
                    fontSize:"16px",
                    marginTop:"20px",
                    background:"#4CAF50",
                    color:"lavender",
                }}
                >
                    Detect 
                </button>
        </div>
    );
};
export default UploadPage;