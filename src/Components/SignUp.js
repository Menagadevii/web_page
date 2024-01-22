import React ,{useState}from "react";
import { useFormik } from "formik";
import '../Components/SignUp.css'
// import '../Components/Popup'
import Popup from "../Components/Popup";

const validate = values => {
    const errors = {};
    if (!values.firstname){
        errors.firstname ="*Required";
    }else if(values.firstname.length > 8){
        errors.firstname ="*Must be 8 charcters or less";
    }
    if (!values.lastname){
        errors.lastname ="*Required";
    }else if(values.lastname.length > 8){
        errors.lastname ="*Must be 8 charcters or less";
    }

    if (!values.phoneNumber){
        errors.phoneNumber ="*Required";
    }else if(values.phoneNumber.length > 10){
        errors.phoneNumber ="*Must be 10 digit";
    }

    if(!values.email){
        errors.email= "*Required";
    }else if(
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    )
    // }else if(!/"^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"/.test(values.email))
    {
        errors.email ="*Invaild Email Address";
    }
    if(!values.password){
        errors.password = "*Required";
    }else if(values.password.length > 8){
        errors.password ="*Maximum 8 characters";
    }else if(values.password.length < 4){
        errors.password ="*Minimum 4 characters";
    }
    if(!values.confirmpassword){
        errors.confirmpassword ="*Required";
    }else if(values.password !== values.confirmpassword){
        errors.confirmpassword = "*password must match";
    }
    return errors;
    }

const SingUp = () =>{
    const[bool,setBool] = useState(0);

    const formik = useFormik({
        initialValues :{
            firstname :'',
            lastname : '',
            phoneNumber : '',
            email : '',
            password : '',
            confirmpassword : '',

        },
        validate,
        onSubmit :(values ,{resetForm}) =>{
            if(bool){
                setBool(0);
                resetForm({values : ''});
            }else {
                setBool(1);
                console.log(values);
            }
            // alert(`Hello!,${values.firstname} You successfully signed up!`);
        }

    });
    // console.log(formik.values);
    return(
        <div className = "main">
            <div className="SignUp- form">
                <h2>SignUp Here</h2>
                <form onSubmit = {formik.handleSubmit}>
                    <input type="text"
                    placeholder="FirstName..."
                    name="firstname"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    value = {formik.values.firstname} onBlur=
                    {formik.handleBlur}/>
                    {
                        formik.touched.firstname && formik.errors.firstname ? <span>{formik.errors
                            .firstname}</span> : null
                    }
                     <input type="text"
                    placeholder="LastName..."
                    name="lastname"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    value = {formik.values.lastname}onBlur = 
                    {formik.handleBlur}/>
                    {
                       formik.touched.lastname && formik.errors.lastname ? <span>{formik.errors
                            .lastname}</span> : null
                    }
                    <input type="text"
                    placeholder="phone Number..."
                    name="phoneNumber"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    value = {formik.values.phoneNumber}onBlur=
                    {formik.handleBlur}/>
                    {
                        formik.touched.phoneNumber && formik.errors.phoneNumber ? <span>{formik.errors.phoneNumber}</span> : null
                    }
                    
                    <input type = "text"
                    placeholder = "Email..."
                    name="email"
                    autoComplete="off"
                    onChange = {formik.handleChange}
                    value = {formik.values.email}onBlur=
                    {formik.handleBlur}/>
                    {
                        formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null
                    }
                     <input 
                    type="password"
                    placeholder="password..."
                    name="password" 
                    autoComplete="off"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    />


                    {
                        formik.touched.password && formik.errors.password ? <span>{formik.errors
                            .password}</span> : null
                    }
                 <input type="password"
                    placeholder="cofirm password..."
                    name="confirmpassword"   
                    autoComplete="off"
                    onChange={formik.handleChange}
                    value = {formik.values.confirmpassword}
                    onBlur=
                    {formik.handleBlur}/>
                    {
                        formik.touched.confirmpassword && formik.errors.confirmpassword ? <span>{formik.errors
                            .confirmpassword}</span> : null
                    }
                    <input type="submit" 
                    value="submit" />
            </form>
            </div>
            <div className = "message-box">
                {
                bool ? (<Popup onClick = {formik.handleSubmit}/>) : null
                }
            </div>
        </div>
    )
}

export default SingUp;