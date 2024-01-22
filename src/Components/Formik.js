import React from "react";
import { useFormik } from "formik";
import { Formikvalidate } from "./Formikvalidate";
// import './Fomik.css'

const initialValues ={
name: '',
phonenumber: '',
email: '',
password: '',
confirmpassword: ''
}
function Formik(){
    const{values,handleBlur,handleChange,handleSubmit,errors} = useFormik({
        initialValues: initialValues,
        validationSchema:Formikvalidate,
        onSubmit: (values) =>{
            console.log(values)
        },
    });
    // console.log(Formik);


    return(
        <div className="days" style={{width:400,textAlign:'center'}}>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="name">Name</label>
                <br/>
                <input type="text" name="name" 
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                style={{color:'black'}}
                />
                <br/>
                {errors.name && <small className="date">{errors.name}</small>}
                <br/>

                <label htmlFor="Phonenumber">Phonenumber
                </label>
                <br/>
                <input type="text" name="phonenumber" 
                value={values.phonenumber}
                onBlur={handleBlur}
                onChange={handleChange}
                style={{color:'black'}}/>
                <br/>
                {errors.phonenumber && <small className="date">{errors.phonenumber}</small>}
                <br/>

                <label htmlFor="email">Email</label>
                <br/>
                <input type="text" name="email" 
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                style={{color:'black'}}/>
                <br/>
                {errors.email && <small className="date">{errors.email}</small>}
                <br/>

                <label htmlFor="password">password</label>
                <br/>
                <input type="password" name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                style={{color:'black'}}/>
                <br/>
                {errors.password && <small className="date">{errors.password}</small>}
                <br/>

                <label htmlFor="confirmpassword">confirmpassword</label>
                <br/>
                <input type="password" name="confirmpassword"
                value={values.confirmpassword}
                onBlur={handleBlur}
                onChange={handleChange}
                style={{color:'black'}}/>
                <br/>
                {errors.confirmpassword && <small className="date">{errors.confirmpassword}</small>}
                <br/>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default Formik;