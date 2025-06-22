import styled from "styled-components"


export const NavBar=styled.div`
    background-color: #ffffff;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Micon=styled.div`
    padding: 10px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient( to bottom, #4285F4, #34A853 );
    border-radius: 10px;
`

export const MedicareHeading=styled.h1`
    font-size: 30px;
`

export const MediCarePara=styled.p`
    font-size: 15px;
    color: grey;
`

export const IntroHeadPara=styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`


export const LogoutButton=styled.div`
    background-color: #F44336;
    padding: 8px;
    border: 0;
    border-radius: 10px;
    color: #ffffff;
    text-align: center;
    @media (min-width:768px){
        width: 100px;
    }
`

export const IntroContainer=styled.div`
    display: flex;
    align-items: center;
`