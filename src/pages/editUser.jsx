import InputBox from "../common/components/input"
import Buttons from "../common/components/button"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const EditUser = () =>{
    const editUser = JSON.parse(localStorage.getItem('editUser')||"{}");
    const [allUserData,setAllUserData] = useState(JSON.parse(localStorage.getItem('allUserData')||"[]"));
    const [userData,setUserData] = useState(editUser);
    const navigate = useNavigate();
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUserData({...userData,id:userData.id,[name]:value});
        console.log(userData);
    }
    const handleEdit = (e) => {
        if(userData.userName == "" || userData.email == "" || userData.contact == ""){
            return alert("Please fill all fields.")
        }
        if(userData.userName.length < 3) return alert("Please fill a valid name.")
        if(userData.email != ""){
            const email = userData.email;
            if(!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) return alert("Please fill a valid email.");
        }
        if(userData.contact != ""){
            const contact = userData.contact;
            if(contact.length != 10) return alert("Please fill a valid number.");
        }
        allUserData.map((item)=>{
            if(item.id == e.target.value){return item.userName = userData.userName , item.email = userData.email , item.contact = userData.contact }
        });
        setAllUserData([...allUserData]);
        localStorage.setItem('allUserData', JSON.stringify(allUserData));
        //console.log(allUserData);
        navigate("/user-list"); 
    }
    const handleMaxLength=(e)=>{
        console.log(e);
        e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    return(
        <>
        <div className='container'>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <div className="row m-4 p-4 rounded form-design">
                        <div className="col-12 m-3">
                            <h4><u>Edit User</u></h4>
                        </div>
                        <div className="col-12 mb-3">
                            <InputBox label="User Name: " labelStyle="col-lg-2 col-md-3 col-sm-12" inputStyle="col-lg-10 col-md-9 col-sm-12" type="text" placeholder="Enter your Name here" name="userName" value={userData.userName} onChange={handleChange}/>
                        </div>
                        <div className="col-12 mb-3">
                            <InputBox label="Email: " labelStyle="col-lg-2 col-md-3 col-sm-12" inputStyle="col-lg-10 col-md-9 col-sm-12" type="email" placeholder="Enter your Email here" name="email" value={userData.email} onChange={handleChange}/>
                        </div>
                        <div className="col-12 mb-5">
                            <InputBox label="Contact: " labelStyle="col-lg-2 col-md-3 col-sm-12" inputStyle="col-lg-10 col-md-9 col-sm-12" type="tel" placeholder="Enter your Mobile Number here" value={userData.contact} min="0" maxLength="10" name="contact" onChange={handleChange} onInput={handleMaxLength}/>
                        </div>
                        <div className="col-12 text-center">
                            <Buttons btnStyle="btn btn-primary" btnName="Update" onClick={handleEdit} value={userData.id}/>
                        </div>
                        {/* <div className="col-6">
                            <Buttons btnStyle="btn btn-danger" btnName="Cancel" onClick={handleReset}/>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
        </>
    )
}
export default EditUser