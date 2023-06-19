import Buttons from "../common/components/button"
import Header from "../common/components/header"
import InputBox from "../common/components/input"

const Form = () => {
    return (
        <>
        <Header/>
        <div className='container'>
            <h4>Add User</h4>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <InputBox label="User Name: " type="text" placeholder="Enter your Name here" name="userName" />
                        </div>
                        <div className="col-12 mb-3">
                            <InputBox label="Email: " type="email" placeholder="Enter your Email here" name="email" />
                        </div>
                        <div className="col-12 mb-5">
                            <InputBox label="Contact: " type="number" placeholder="Enter your Mobile Number here" name="contact" />
                        </div>
                        <div className="col-6 text-end">
                            <Buttons btnStyle="btn btn-success" btnName="Submit" />
                        </div>
                        <div className="col-6">
                            <Buttons btnStyle="btn btn-danger" btnName="Cancel" />
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
        </>
    )
}

export default Form