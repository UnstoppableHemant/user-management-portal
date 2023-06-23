import { useEffect, useState } from "react"
import Buttons from "../common/components/button"
import Header from "../common/components/header"
import InputBox from "../common/components/input"

const AddUser = () => {
    const allUserData = JSON.parse(localStorage.getItem("allUserData") || "[]");
    const [formData,setFormData] = useState({
        id:Math.ceil(Math.random()*100000000000),
        userName:"",
        email:"",
        contact:"",
        noName:false
    });
    //const [validateFields,setValidateFields] =useState({errName:false});
    const [userList,setUserList] = useState(allUserData);
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData({...formData,id:Math.ceil(Math.random()*100000000000),[name]:value});
        console.log(formData);
    }
    const handleSubmit = () =>{
        //if(formData.userName=="")setValidateFields({...validateFields,errName:true});
        if(formData.userName == "" || formData.email == "" || formData.contact == ""){
            return alert("Please fill all fields.")
        }
        if(formData.userName.length < 3) return alert("Please fill a valid name.")
        if(formData.email != ""){
            const email = formData.email;
            if(!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) return alert("Please fill a valid email.");
        }
        if(formData.contact != ""){
            const contact = formData.contact;
            if(contact.length != 10) return alert("Please fill a valid number.");
        }
        setUserList([...userList,formData]);
        handleReset();
    }
    const handleReset = () =>{
        setFormData({userName:"", email:"", contact:""});
    } 
    const handleMaxLength=(e)=>{
        console.log(e);
        e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    useEffect(()=>{
        localStorage.setItem('allUserData', JSON.stringify(userList));
    },[userList])
    //console.log(validateFields);
    return (
        <>
        <div className='container'>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="row m-4 p-4 rounded form-design">
                        <div className="col-12 m-3">
                            <h4><u>Add User</u></h4>
                        </div>
                        <div className="col-12 mb-3">
                            <InputBox label="User Name: " type="text" placeholder="Enter your Name here" name="userName" value={formData.userName} onChange={handleChange}/>
                            {/* {validateFields.errName?<div className="text-danger">jkndks</div>:"" } */}
                        </div>
                        <div className="col-12 mb-3">
                            <InputBox label="Email: " type="email" placeholder="Enter your Email here" name="email" value={formData.email} onChange={handleChange}/>
                        </div>
                        <div className="col-12 mb-5">
                            <InputBox label="Contact: " type="number" placeholder="Enter your Mobile Number here" value={formData.contact} min="0" maxLength="10" name="contact" onChange={handleChange} onInput={handleMaxLength}/>
                        </div>
                        <div className="col-6 text-end">
                            <Buttons btnStyle="btn btn-success" btnName="Submit" onClick={handleSubmit}/>
                        </div>
                        <div className="col-6">
                            <Buttons btnStyle="btn btn-danger" btnName="Cancel" onClick={handleReset}/>
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
        </>
    )
}

export default AddUser