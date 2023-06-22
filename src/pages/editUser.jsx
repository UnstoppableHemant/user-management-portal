import InputBox from "../common/components/input"
import Buttons from "../common/components/button"
import { useState } from "react";
const EditUser = () =>{
    const editUser = JSON.parse(localStorage.getItem('editUser')||"{}");
    const [allUserData,setAllUserData] = useState(JSON.parse(localStorage.getItem('allUserData')||"[]"));
    const [userData,setUserData] = useState(editUser);
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUserData({...userData,id:userData.id,[name]:value});
        console.log(userData);
    }
    const handleEdit = (e) => {
        allUserData.map((item)=>{
            if(item.id == e.target.value){return item.userName = userData.userName , item.email = userData.email , item.contact = userData.contact }
        });
        setAllUserData([...allUserData]);
        console.log(allUserData);
    }
    return(
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
                            <InputBox label="User Name: " type="text" placeholder="Enter your Name here" name="userName" value={userData.userName} onChange={handleChange}/>
                        </div>
                        <div className="col-12 mb-3">
                            <InputBox label="Email: " type="email" placeholder="Enter your Email here" name="email" value={userData.email} onChange={handleChange}/>
                        </div>
                        <div className="col-12 mb-5">
                            <InputBox label="Contact: " type="tel" placeholder="Enter your Mobile Number here" value={userData.contact} max="10" name="contact" onChange={handleChange}/>
                        </div>
                        <div className="col-12 text-center">
                            <Buttons btnStyle="btn btn-success" btnName="Edit" onClick={handleEdit} value={userData.id}/>
                        </div>
                        {/* <div className="col-6">
                            <Buttons btnStyle="btn btn-danger" btnName="Cancel" onClick={handleReset}/>
                        </div> */}
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
        </>
    )
}
export default EditUser