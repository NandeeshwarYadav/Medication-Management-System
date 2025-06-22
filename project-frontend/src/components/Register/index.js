import {useState} from "react"

import {useNavigate } from "react-router-dom";


import { LuUser,LuUsers  } from "react-icons/lu";
import { FaLongArrowAltLeft } from "react-icons/fa";

import {Bg,IntroHeading,IntroPara,FormCard,CreateHeadingBackIconContainer,CreateAccountHeading,SigninPara,RolesContainer,PatientRoleButton,CaretakerRoleButton,InputLabelContainer,Label,Input,LoginButton,SigninIntroContainer,Signup,NeedAccount,ErorMsg} from "./styledComponents"


const Register=()=>{

        const [role,setRole]= useState ("Patient")
        const [name,setName]= useState ("")
        const [email,setEmail]= useState ("")
        const [phone,setPhone]= useState ("")
        const [password,setPassword]=useState("")
        const [errMsg,setErrMsg]=useState("")

        const onChangeName=event=>{
            setName(event.target.value)
        }

        const onChangeEmail=event=>{
            setEmail(event.target.value)
        }

        const onChangePhone=event=>{
            setPhone(event.target.value)
        }

        const onChangePassword=event=>{
            setPassword(event.target.value)
        }


     const navigate = useNavigate();

    const onClickSignIn=()=>{
    navigate("/login");
    }
 
    const onSubmitSuccess=()=>{
        navigate("/login")
    }

    const onSubmitFailure=(errMsg)=>{
        setErrMsg(errMsg)
    }
   
        const  onClickPatientButton=()=>{
                setRole("Patient")
            }

        const  onClickCaretakerButton=()=>{ 
                setRole("Caretaker")
            }
        const onSubmitForm=event=>{
        event.preventDefault()  
        const checkAllBlanks=name!=="" && email!=="" && phone!=="" && password!==""
        const checkPassword=password.length>8
        if (!checkPassword){
            setErrMsg("password should be more than 8 letters")
        }
       else if (checkAllBlanks){
            getData()
            setName("")
            setEmail("")
            setPassword("")
            setPhone("")
             setErrMsg(false)
        }
        else{
            setErrMsg("Enter all credentials")
        }

        
      //  console.log(checkAllBlanks)
    }

    const getData=async ()=>{
        const url = "https://medication-backend-aqhw.onrender.com/signup"
        const userDetails={
                name,email,password, role:role.toLowerCase(), phone
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
    if (response.ok) {
      onSubmitSuccess()
    }
    else{
        onSubmitFailure(data.error)
    }
   
    }

   // console.log(username,email,phnnNo,password)

          return  <Bg>
                <IntroHeading>HealthCare Portal</IntroHeading>
                <IntroPara>Secure access for patients and caretakers</IntroPara>
                <FormCard onSubmit={onSubmitForm} >
                    <CreateHeadingBackIconContainer>
                        <FaLongArrowAltLeft onClick={onClickSignIn} style={{fontSize:"20px",marginRight:"20px",color:"grey"}}   />
                        <CreateAccountHeading>Create Account</CreateAccountHeading>
                    </CreateHeadingBackIconContainer>
                    <SigninPara>Choose your role and fill your information</SigninPara>
                    <RolesContainer>
                        <PatientRoleButton type="button" onClick={onClickPatientButton} role={role} > <LuUser style={{marginRight: "5px"}}  />  Patient</PatientRoleButton>
                         <CaretakerRoleButton type="button" onClick={onClickCaretakerButton} role={role}> <LuUsers style={{marginRight: "5px"}}  />  Caretaker</CaretakerRoleButton>
                    </RolesContainer>
                    <InputLabelContainer>
                      <Label htmlFor="username"   >Username</Label>
                      <Input id="username" placeholder="Enter your name" onChange={onChangeName} value={name}  />
                       </InputLabelContainer>
                    <InputLabelContainer>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" placeholder={`${role}@example.com`} onChange={onChangeEmail} value={email} />
                       </InputLabelContainer>
                        <InputLabelContainer>
                      <Label htmlFor="mobile"   >Phone Number</Label>
                      <Input id="mobile" placeholder="Enter your mobile number" onChange={onChangePhone} value={phone} />
                       </InputLabelContainer>
                    <InputLabelContainer>
                     <Label htmlFor="password"   >Password</Label>
                     <Input id="password" placeholder="Enter your password" onChange={onChangePassword} value={password} />
                      </InputLabelContainer>
                      <LoginButton type="submit">{`Create ${role} Account`}</LoginButton>
                      {errMsg && <ErorMsg>*{errMsg}</ErorMsg>}
                      <SigninIntroContainer>
                       <NeedAccount>Already have an account? <Signup onClick={onClickSignIn} >Login Here</Signup></NeedAccount>
                        </SigninIntroContainer>
                </FormCard>
            </Bg>

}
export default Register