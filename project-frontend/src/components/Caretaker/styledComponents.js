import styled from "styled-components"


export const Bg=styled.div`
    background-color: #f9f9f9; 
    height: 100vh;
    background-size: cover;
    font-family: "Roboto";
`

export const MainBg=styled.div`
    padding: 20px;
`

export const DashboardBg=styled.div`
    background-image: linear-gradient(to right, #1BCB81, #2D8CFF);
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin-bottom: 20px;
`


export const IntroHeadPara=styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
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
    @media(min-width: 768px){
        min-width: 130px;
        width: 300px;
        max-width: 3500px;
    }
`

export const Streak=styled.h1`
    font-size: 20px;
    color: #ffffff;
`

export const Span=styled.p`
    font-weight: 100;
    color: #ffffff;
    margin-left: 10px;
`

export const DashboardFilter=styled.div`
    @media(min-width: 768px){
        display: flex;
    }
`

export const FilterButtonsContainer=styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
     margin-bottom: 20px;
`

export const FilterButton=styled.div`
    background-color: #E0E7FF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 0;
    border-radius: 5px;
    margin-right: 10px;
    text-align: center;
    height: 30px;
    color: #000000;
    @media(max-width:576px){
        font-size: 10px;
        padding: 5px;
        min-width: 50px;
        max-width: 100px;
    }
    @media (min-width:576px){
        min-width: 180px;
        max-width: 400px;
        font-size: 10px;
        padding: 5px;
        font-size: 20px;
    }
    
`

export const Overview=styled.div`
    background-color: #E0F2F1;
    padding: 20px;
    border-radius: 10px;
    @media (min-width:992px){
       display: flex;
       justify-content: space-around; 
    }
`
export const Intro=styled.div`
    display: flex;
    align-items: center;
`

export const MedicationCard=styled.div`
    background-color: #F7F9FB;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
    @media (min-width:992px){
       min-width: 40%; 
       max-width: 50%;
    }
`

export const DailySet=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const PatientCardIntro=styled.div`
    display: flex;
    flex-direction: column;
`


export const PatientCardHead=styled.h1`
    font-size: 20px;
`

export const Time=styled.p`
    font-size: 15px;
`

export const Status=styled.div`
    padding: 10px;
    background-color: red;
    border: 0;
    border-radius: 10px;
    color: #ffffff;
`

export const QuickActions=styled.div`
    background-color: #F7F9FB;
    padding: 10px;
    border-radius: 10px;
    @media (min-width:992px){
       min-width: 40%; 
       max-width: 50%;
    }
`

export const ActionsContainer=styled.div`
    padding: 10px;
    background-color: #ffffff;
    border: 1px solid #E0F2F1;
    border-radius: 10px;
    color: #000000;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`  



export const RecentActivityContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #f9fbff;
  border-radius: 12px;
`;

export const RecentActivityTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: bold;
  color: #1c1c1c;
`;

export const LogItem = styled.li`
  list-style: none;
  padding: 12px 16px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.status === "taken" ? "#e6ffed" : "#ffe6e6")};
  color: ${(props) => (props.status === "taken" ? "green" : "red")};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
`;


export const NotiificationContainer=styled.div`
    background-color: #F7F9FB;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
`

export const BellWithHead=styled.div`
    display: flex;
    align-items: center;
`

export const NotificationHead=styled.h1`
    font-size: 20px;
`

export const NotificationPara=styled.p`
    font-size: 15px;
    color: grey;
`

export const NotificationWithToggle=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

export const InputLabelContainer=styled.div`
   display: flex;
   flex-direction: column;
   margin: 40px;
`

export const Notify=styled.div`
    margin-bottom: 20px;
`

export const Select=styled.select`
    height: 40px;
    border-radius: 10px;
    padding-left: 20px;
    color: grey;
`

export const RenderNotification=styled.div`
    display: flex;
    flex-direction: column;
`

export const EmailDescription=styled.div`
    background-color: #ffffff;
    border: 1px solid:
    border-radius: 10px;
    padding: 20px;
`

export const SaveBtn=styled.div`
    background-color: green;
    border:0;
    text-align: center;
    color: #ffffff;
    border-radius: 10px;
    align-self: flex-end;
    padding: 10px;
`

export const TodayStatus = styled.div`
  background-color: ${props => {
    if (props.$statusText === "Taken") return "green";
    if (props.$statusText === "Missed") return "red";
    if (props.$statusText === "Pending") return "yellow";
    return "gray"; // fallback color
  }};
  color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
`;


