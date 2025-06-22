
import {styled } from "styled-components"

export const Bg=styled.div`
    background-color: #f9f9f9; 
    height: 100vh;
    background-size: cover;
    font-family: "Roboto";
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const IntroHeading=styled.h1`
    font-size: 30px;
    color: black;
`
export const IntroPara=styled.p`
    font-size: 18px;
`

export const FormCard=styled.form`
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    @media (min-width:768px){
        width: 400px;
    }
`

export const SigninIntroContainer=styled.div`
    text-align: center;
`


export const SigninHead=styled.h1`
    font-size: 25px;
`
export const SigninPara=styled.p`
    font-size: 14px;
    font-weight: 100;
`

export const RolesContainer=styled.div`
    background-color: #f5f5f5;
    padding: 5px;
    display: flex;
    justify-content: space-around;
`

export const PatientRoleButton=styled.button`
    background-color: ${(props) =>
    props.role === 'patient' ? '#ffffff' : 'transparent'};
    border-radius: ${(props) =>
    props.role === 'patient' ? "5px" : 'null'};
    border: 0 none;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    padding: 5px;
    @media (min-width:768px){
        width: 150px;
    }
`
export const CaretakerRoleButton=styled.button`
    background-color: ${(props) =>
    props.role === 'caretaker' ? '#ffffff' : 'transparent'};
    border-radius: ${(props) =>
    props.role === 'caretaker' ? "5px" : 'null'};
    border: 0 none;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    padding: 5px;
    @media (min-width:768px){
        width: 150px;
    }
`

export const InputLabelContainer=styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 20px;
`
export const Label=styled.label`
    margin-bottom: 5px;
`
export const Input=styled.input`
    height: 40px;
    border-radius: 10px;
    padding-left: 20px;
    color: grey;
`

export const LoginButton=styled.button`
    background-color: black;
    border: 0 none;
    border-radius: 10px;
    color: #ffffff;
    width: 100%;
    height: 30px;
    margin-top: 20px;
`

export const ForgotPassword=styled.p`
    font-size: 15px;
`

export const NeedAccount=styled.p`
    font-size: 16px;
`

export const Signup=styled.span`
    font-size: 16px;
    color: #6c63ff;
`

export const ErorMsg=styled.p`
    color: red;
`