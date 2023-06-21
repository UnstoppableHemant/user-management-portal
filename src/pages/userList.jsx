import React, { useEffect, useState } from 'react'
import Buttons from '../common/components/button';

const UserList = () => {
    const userList = JSON.parse(localStorage.getItem('allUserData')||"[]");
    const [allUserData, setAllUserData] = useState(userList);
    //const [userList,setUserList] = useState([]);
    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem('allUserData'));
    //     setAllUserData(data);
    // }, []);
    const handleDeleteClick=(e)=>{
        const d = allUserData.filter((data)=>{return data?.id != e.target.value})
        setAllUserData(d);
    }
    useEffect(() => {
        localStorage.setItem('allUserData', JSON.stringify(allUserData));
    }, [allUserData]);
    return (
        <>
            <div className='container mt-5 p-4 table-design rounded'>
                <div className='ps-4 pb-4' ><h3><u>User Data</u></h3></div>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover'>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUserData.map((data) => {
                                return (
                                    <tr>
                                        <td>{data.userName}</td>
                                        <td>{data.email}</td>
                                        <td>{data.contact}</td>
                                        <td><Buttons btnName="Edit" btnStyle="badge bg-warning border-0 p-2 text-black"/></td>
                                        <td><Buttons btnName="Delete" btnStyle="badge bg-danger border-0 p-2" value={data.id} onClick={handleDeleteClick}/></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserList