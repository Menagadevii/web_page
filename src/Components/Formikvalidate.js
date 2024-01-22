import * as Yup from 'yup'


export const Formikvalidate =Yup.object({
name:Yup.string().min(3).required("Please Enter name"),
phonenumber:Yup.number().min(10).required("Please Enter phonenumber"),
email:Yup.string().email("Please Enter Vaild email").required("Please Enter Email"),
password:Yup.string().min(5).required("Please Enter password"),
confirmpassword:Yup.string().oneOf([Yup.ref("password")],"password not matched").required("Please Enter Cofirmpassword")
})