
import styled from "styled-components"

export const Bg=styled.div`
    background-color: #f9f9f9; 
    height: 100vh;
    background-size: cover;
    font-family: "Roboto";
`

export const IntroHeadPara=styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`

export const DashboardBg=styled.div`
    background-image: linear-gradient( to right, #4285F4, #34A853 );
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`

export const UserIconContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4A90E2;
    border-radius: 10px;
    padding: 10px;
`

export const Greeting=styled.h1`
    font-size: 30px;
    color: #ffffff;
`

export const GreetingPara=styled.p`
    font-size: 20px;
    color: #ffffff;
`

export const DashboardIntro=styled.div`
    display: flex;
    align-items: center;
`

export const StreakContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4A90E2;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    margin-right: 20px;
    @media(min-width: 767px){
        min-width: 200px;
        width: 300px;
        max-width: 3500px;
    }
`

export const Streak=styled.h1`
    font-size: 25px;
    color: #ffffff;
`

export const Span=styled.p`
    font-weight: 100;
    color: #ffffff;
    margin-left: 10px;
`

export const DashboardFilter=styled.div`
    @media(min-width: 767px){
        display: flex;
    }
`

export const MedicationListBg=styled.div`
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    
`

export const MedicationHead=styled.h1`
    font-size: 25px;
    color: #000000;
    margin-left: 10px;
`

export const MedicationIntro=styled.div`
    display: flex;
    align-items: center;
`
export const MedicationIntroAddMedication=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MedicationCard=styled.div`
    background-color: #ffffff;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
`

export const MedicationNumber=styled.div`
    padding: 5px;
    height: 30px;
    background-color: #E3EDFC;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`

export const MedicationNum=styled.h1`
    font-size: 20px;
    color: blue;
`

export const DailyMedicationHead=styled.h1`
    font-size: 15px;
`

export const DailyMedicationPara=styled.p`
    font-size: 14px;
    color: grey;
`

export const MedicationTakenTime=styled.div`
    background-color: #E3EDFC;
    border-radius: 10px;
    padding: 5px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const MedicationTimeIntro=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MedicationTime=styled.p`
    font-size: 12px;
    color: #000000;
`

export const UploadImageCard=styled.div`
    background-color: #ffffff;
    border-radius: 10px;
    padding: 10px;
    border: 3px dotted #E0E0E0;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const AddProofHead=styled.h1`
    font-size: 20px;
    color: black;
`

export const AddProofPara=styled.p`
    font-size: 15px;
    color: #6C7A89;
`

export const TakePhotoContainer=styled.div`
    border: 1px solid #E0E0E0;
    border-radius: 10px;
    background-color: transparent;
    display: flex;
    align-items: center;
    padding: 10px;
`

export const TakePhotoPara=styled.p`
    black: #000000;
`

export const MarkAsTakenButton=styled.button`
    width: 100%;
    background-color: ${props => props.$todayStatus==="taken" ? ' #d4edda' : 'green'};
    border: 0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    height: 30px;
`


export const AddMedicationButton=styled.button`
    padding: 10px;
    background-color: #3B82F6;
    border:0;
    color: #ffffff;
    border-radius: 10px;
`

export const FormCard=styled.form`
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    @media (min-width:768px){
        width: 400px;
    }
`
export const CreateHeadingBackIconContainer=styled.div`
    display: flex;
    align-items: center;
`

export const CreateAccountHeading=styled.h1`
    font-size: 30px;
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

export const ShowAddMedication=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f0f4f8;
    padding: 20px;
`

export const MainBg=styled.div`
    padding: 10px;
`



export const Table=styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid black;
`

export const TableHead=styled.th`
    border: 1px solid black;
    padding: 6px;
`

export const TablePara=styled.td`
    border: 1px solid black;
    padding: 12px;
    text-align: center;
`

export const UploadAndTakenButtonContainerSm=styled.div`
    @media (min-width:992px){
        display: none;
    }
    @media (max-width:991px){
        display: block;
    }
`

export const UploadAndTakenButtonContainerMd=styled.div`
    margin-top: 20px;
    @media (min-width:992px){
        display: block;
    }
    @media (max-width:991px){
        display: none;
    }
`

export const MedicationListImageClendar=styled.div`
    @media (min-width:992px){
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
`

export const MarkedContainer=styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: green;
    border-radius: 40px;
`

export const MarkedCard=styled.div`
    background-color: #ffffff;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid green;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(min-width:992px){
        width: 40%;
        height: 300px;
    }
`

export const ErorMsg=styled.p`
    color: red;
`