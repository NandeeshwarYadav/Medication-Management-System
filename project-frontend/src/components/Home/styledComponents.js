
import styled from "styled-components";

export const Bg=styled.div`
    background-size: cover;
    background-color: #e6fffa;
    font-family: "Roboto";
    display: flex;
    justify-content: center;
    padding: 20px;
`

export const Heading=styled.h1`
    font-size: 40px;
    @media (max-width:767px){
        font-size: 20px;
    }
`

export const Para=styled.p`
    font-size: 20px;
    color: grey;
    @media (max-width:767px){
        font-size: 14px;
    }
`

export const CardsContainer=styled.div`
    display: flex;
    @media (max-width:767px){
        flex-direction: column;
    }
`


export const Card=styled.div`
    background-color: #ffffff;
    border: 1px solid #dee2e6;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    margin-right: 20px;
`


export const PatientIntro=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width:767px){
        align-items flex-start;
    }
`
export const PatientContainer=styled.div`
    background-color: #dceeff;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 60px;
`

export const PatientHeading=styled.h1`
    font-size: 30px;
    color: blue;
`

export const PatientPara=styled.p`
    font-size: 18px;
    color: grey;
`
export const UnorderList=styled.ul`
    position: relative;
    margin-bottom: 10px;
    color: #87CEEB; /* Text color */
`


export const CaretakerContainer=styled.div`
    background-color: #dceeff;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 60px;
`

export const CaretakerHeading=styled.h1`
    font-size: 30px;
    color: green;
`


export const CaretakerUnorderList=styled.ul`
    position: relative;
    margin-bottom: 10px;
    color: green; /* Text color */
`

export const ListElement=styled.li`
    font-size: 25px;
`
export const SpanElement=styled.span`
    color: grey;
    font-size: 18px;
`

export const PatientButton=styled.button`
    width: 100%;
    background-color: blue;
    font-size: 20px;
    border-radius: 5px;
    border: 0;
    color: #ffffff;
    padding: 5px;
`

export const CaretakerButton=styled.button`
    width: 100%;
    background-color: green;
    font-size: 20px;
    border-radius: 5px;
    border: 0;
    color: #ffffff;
    padding: 5px;
`

export const RolesContainer=styled.div`
    background-color: #e6fffa;
    padding: 20px;
    display: flex;
`