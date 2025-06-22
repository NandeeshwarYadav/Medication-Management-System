
import {useState} from "react"

import Cookies from "js-cookie"

import {useNavigate } from "react-router-dom";


import { LuUser,LuUsers  } from "react-icons/lu";

import {Bg,IntroHeading,IntroPara,FormCard,SigninIntroContainer,SigninHead,SigninPara,RolesContainer,PatientRoleButton,CaretakerRoleButton,InputLabelContainer,Label,Input,LoginButton,ForgotPassword,NeedAccount,Signup,ErorMsg} from "./styledComponents"

const Login = () => {

 const navigate = useNavigate();

const OnClickSignup=()=>{
   navigate("/register");
}

        const [role,setRole]= useState ("patient")
        const [email,setEmail]= useState ("")
        const [password,setPassword]=useState("")
        const [errMsg,setErrMsg]=useState("")

        const  onClickPatientButton=()=>{
            setRole("patient")
        }
    const  onClickCaretakerButton=()=>{ 
            setRole("caretaker")
        }
     //   console.log (role)

       const onChangeEmail=event=>{
            setEmail(event.target.value)
        }

        const onChangePassword=event=>{
            setPassword(event.target.value)
        }

    const onSubmitForm=event=>{
        event.preventDefault()

        const checkBlanks=email!=="" && password!==""

        if (checkBlanks){
            getData()
        }
    }  

    const onSubmitSuccess = (data) => {
  const { token,role } = data;
  Cookies.set("jwt_token", token, { expires: 30 });
   Cookies.set("role", role, { expires: 30 });
   console.log(role)

  navigate(`/${role}`);
};
    const  onSubmitFailure=(error)=>{
        setErrMsg(error)
    }

   const getData=async ()=>{
        const url="https://medication-backend-aqhw.onrender.com/login"
        const userDetails={
            email,password,role
        }
        // console.log(userDetails)
         const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(userDetails)
    }
      
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok){
        onSubmitSuccess(data)
        setErrMsg("")
    }
    else{
        onSubmitFailure(data.error)
    }
    }



      return  (
            <Bg>
                <IntroHeading>HealthCare Portal</IntroHeading>
                <IntroPara>Secure access for patients and caretakers</IntroPara>
                <FormCard onSubmit={onSubmitForm}  >
                    <SigninIntroContainer>
                        <SigninHead>Login</SigninHead>
                        <SigninPara>Choose your role and enter your credentials</SigninPara>
                    </SigninIntroContainer>
                    <RolesContainer>
                        <PatientRoleButton type="button" onClick={onClickPatientButton} role={role} > <LuUser style={{marginRight: "5px"}}  />  Patient</PatientRoleButton>
                        <CaretakerRoleButton type="button" onClick={onClickCaretakerButton} role={role}> <LuUsers style={{marginRight: "5px"}}  />  Caretaker</CaretakerRoleButton>
                    </RolesContainer>
                    <InputLabelContainer>
                    <Label htmlFor="email"   >Email Address</Label>
                    <Input id="email" placeholder={`${role}@example.com`} onChange={onChangeEmail} value={email}  />
                    </InputLabelContainer>
                    <InputLabelContainer>
                    <Label htmlFor="password"   >Password</Label>
                    <Input id="password" placeholder="Enter your password" onChange={onChangePassword} value={password}  />
                    </InputLabelContainer>
                    <LoginButton type="submit">{`Sign In as ${role}`}</LoginButton>
                      {errMsg? <ErorMsg>*{errMsg}</ErorMsg>:null}    
                    <SigninIntroContainer>
                        <ForgotPassword>Forgot your password?</ForgotPassword>
                    <NeedAccount>Need an account? <Signup onClick={OnClickSignup} >SignUp</Signup></NeedAccount>
                    </SigninIntroContainer>
                </FormCard>
              </Bg>
              )
        
    }


export default Login