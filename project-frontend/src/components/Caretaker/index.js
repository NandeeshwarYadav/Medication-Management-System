import {useState,useEffect} from "react"

import { format } from 'date-fns';

import Cookies from "js-cookie"
import MedicationCalendar from "../MedicationCalendar";

import { LuUser   } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaBell } from "react-icons/fa6";
import { BsToggleOn } from "react-icons/bs";



import Navbar from "../Navbar"
import {Bg,DashboardBg,MainBg,DashboardIntro,UserIconContainer,IntroHeadPara,Greeting,GreetingPara,DashboardFilter,StreakContainer,Streak,Span,
    FilterButtonsContainer,FilterButton,Overview,Intro,MedicationCard,PatientCardIntro,PatientCardHead,Time,QuickActions,ActionsContainer
,RecentActivityContainer,RecentActivityTitle,LogItem,DailySet,NotiificationContainer,BellWithHead,NotificationHead,NotificationPara,NotificationWithToggle
,Label,Input,InputLabelContainer,Notify,Select,RenderNotification,EmailDescription,SaveBtn,TodayStatus} from "./styledComponents"
 import Loader from "../Loader";






const Caretaker=()=>{


    const [selectedTab,setTab]=useState("overview")

    const [userData,setUserData]=useState({})
    const [isLoading,setIsLoading]=useState(true)

    useEffect( () =>{
            getPatientData()
        },[])

        const now = new Date();
        const time12Hour = format(now, 'hh:mm a');
    
          const getPatientData= async ()=>{
              //  const userId=Cookies.get("userId")
                const jwtToken=Cookies.get("jwt_token")
              //  console.log(jwtToken)
               // console.log(userId)
              
                const url="https://medication-backend-aqhw.onrender.com/dashboard/caretaker"
                  const options = {
                        method: 'GET',
                        headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${jwtToken}`
        }
        }
                const response = await fetch(url, options)
                const data = await response.json()
                console.log(data)
                if (response.ok){
                   const fetchedData={
                        caretakerName:data.caretakerName,
                        patient:data.patient,
                        todayStatus:data.todayStatus,
                        missedInMonth:data.missedInMonth,
                        takenInWeek:data.takenInWeek,
                        logs:data.logs.map(each=>({
                            date:each.date,
                            status:each.status,
                        })),
                        adherenceRate:data.adherenceRate,
                        streak:data.streak
                    } 
                  //  console.log(fetchedData)
                  setUserData(fetchedData)
                 setIsLoading(false)
                }
                
       
            }

            const onClickOverview=(event)=>{
                setTab("overview")
            }

            const onClickRecent=(event)=>{
                setTab("recent")
            }

            const onClickCalendar=(event)=>{
                setTab("calendar")
            }

            const onClickNotification=(event)=>{
                setTab("notification")
            }
            

            const onClickSendRemainder=(event)=>{
                alert(`Reminder email sent to ${patient}`)
            }
            


const { caretakerName, patient,adherenceRate,streak,takenInWeek,missedInMonth,todayStatus}=userData

let statusText
if (todayStatus==="taken"){
    statusText='Taken'
}
else if (todayStatus==="missing"){
    statusText="Missing"
}
else{
    statusText="Pending"
}


  const overviewContainer=() =>  <Overview>
                <MedicationCard>
                    <Intro>
                    <CiCalendar style={{fontSize:"25px",color:"blue",marginRight:"5px"}}  />
                    <h1>Today's Status</h1>
                </Intro>
                <DailySet>
                    <PatientCardIntro>
                        <PatientCardHead>
                            Daily Medication Set
                        </PatientCardHead>
                        <Time>{time12Hour}</Time>
                    </PatientCardIntro>
                    {<TodayStatus $statusText={statusText} >{statusText}</TodayStatus> }

                </DailySet>
                </MedicationCard>
                <QuickActions>
                    <PatientCardHead>Quick Actions</PatientCardHead> 
                    <ActionsContainer onClick={onClickSendRemainder}>
                        <BiSolidMessageDetail style={{fontSize:"20px",color:"grey",marginRight:"10px"}} />
                        <p >Send Remainder Email</p>
                    </ActionsContainer> 
                    <ActionsContainer onClick={onClickNotification} >
                        <FaBell style={{fontSize:"20px",color:"grey",marginRight:"10px"}} />
                        <p >Configure Notifications</p>
                    </ActionsContainer>
                    <ActionsContainer onClick={onClickCalendar}>
                        <CiCalendar style={{fontSize:"20px",color:"grey",marginRight:"10px"}} />
                        <p>View Full Calendar</p>
                    </ActionsContainer>
                </QuickActions>
            </Overview>

const renderRecentActivity = () => {
  if (!userData.logs || userData.logs.length === 0) {
    return null;
  }

  const recentLogs = [...userData.logs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return isLoading ? (
    <Loader />
  ) : (
    <RecentActivityContainer>
      <RecentActivityTitle>Recent Medication Activity</RecentActivityTitle>
      <ul style={{ padding: 0 }}>
        {recentLogs.map((log, index) => {
          const formattedDate = new Date(log.date).toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          });

          return (
            <LogItem key={index} status={log.status}>
              <span>{formattedDate}</span>
              <span>{log.status === "taken" ? "Taken" : "Missed"}</span>
            </LogItem>
          );
        })}
      </ul>
    </RecentActivityContainer>
  );
};


const renderCalendar=()=>
    <MedicationCalendar logs={userData.logs}/>


const renderNotification=()=>
<RenderNotification>
    <NotiificationContainer>
    <BellWithHead>
        <FaBell styled={{fontSize:"25px",color:"blue"}}  />
        <h1 style={{fontSize:"25px",marginLeft:"20px"}}>Notification Preferences</h1>
    </BellWithHead>
    <Notify>
        <NotificationWithToggle>
        <div>
            <NotificationHead>
        Email Notifications
    </NotificationHead>
    <NotificationPara>
        Receive medication alerts via email
    </NotificationPara>
        </div>
        <BsToggleOn style={{fontSize:"35px"}}  />
    </NotificationWithToggle>
    <InputLabelContainer>
    <Label htmlFor="email" >Email Address</Label>
    <Input id="email" placeholder="caretaker@example.com"   />
    </InputLabelContainer>
    </Notify>
    <hr/>
     <Notify>
        <NotificationWithToggle>
        <div>
            <NotificationHead>
       Missed Medication Alerts
    </NotificationHead>
    <NotificationPara>
        Get notified when medication is not taken on time
    </NotificationPara>
        </div>
        <BsToggleOn style={{fontSize:"35px"}}  />
    </NotificationWithToggle>
    <InputLabelContainer>
    <Label htmlFor="alert" >Alert me if medication isn't taken within</Label>
    <Select>
        <option>
            1 hours
        </option>
        <option>
            2 hours
        </option>
        <option>
            3 hours
        </option>
        <option>
            4 hours
        </option>
    </Select>
    </InputLabelContainer>
     <InputLabelContainer>
    <Label htmlFor="email" >Daily reminder time</Label>
    <Input id="email" placeholder="08:00 PM"   />
    <p>Time to check if today's medication was taken</p>
    </InputLabelContainer>
    </Notify>
</NotiificationContainer>
<NotiificationContainer>
    <BellWithHead>
        <BiSolidMessageDetail styled={{fontSize:"25px",color:"blue"}}  />
        <h1 style={{fontSize:"25px",marginLeft:"20px"}}>Email Preview</h1>
    </BellWithHead>
    <EmailDescription>
        <div style={{width:"50%"}} >
            <NotificationHead>
        Subject: Medication Alert -{patient}
    </NotificationHead>
    <NotificationPara>
        Hello,

This is a reminder that {patient} has not taken her medication today.

Please check with her to ensure she takes her prescribed medication.

Current adherence rate: 85% (5-day streak)
    </NotificationPara>
        </div>
    </EmailDescription>
</NotiificationContainer>
<SaveBtn>
    Save Notification Settings
</SaveBtn>
</RenderNotification>

const renderFilterdView = () => {
  switch (selectedTab) {
    case "overview":
      return overviewContainer(); // note: call the function
    case "recent":
      return renderRecentActivity();
    case "calendar":
      return renderCalendar();
    case "notification":
      return renderNotification();
    default:
      return null;
  }
}


  return (
  isLoading ? (
    <Loader />
  ) : (
    <Bg>
      <Navbar />
      <MainBg>
        <DashboardBg>
          <DashboardIntro>
            <UserIconContainer>
              <LuUser style={{ fontSize: "30px", color: "#ffffff" }} />
            </UserIconContainer>
            <IntroHeadPara>
              <Greeting>{caretakerName} Dashboard</Greeting>
              <GreetingPara>Monitoring {patient} medication adherence</GreetingPara>
            </IntroHeadPara>
          </DashboardIntro>
          <DashboardFilter>
            <StreakContainer>
              <Streak>{adherenceRate}</Streak>
              <Span>Adherence Rate</Span>
            </StreakContainer>
            <StreakContainer>
              <Streak>{streak}</Streak>
              <Span>Current Streak</Span>
            </StreakContainer>
            <StreakContainer>
              <Streak>{missedInMonth}</Streak>
              <Span>Missed This Month</Span>
            </StreakContainer>
            <StreakContainer>
              <Streak>{takenInWeek}</Streak>
              <Span>Taken This Week</Span>
            </StreakContainer>
          </DashboardFilter>
        </DashboardBg>
        <FilterButtonsContainer>
          <FilterButton onClick={onClickOverview}>Overview</FilterButton>
          <FilterButton onClick={onClickRecent}>Recent Activity</FilterButton>
          <FilterButton onClick={onClickCalendar}>Calendar</FilterButton>
          <FilterButton onClick={onClickNotification}>Notifications</FilterButton>
        </FilterButtonsContainer>
        {renderFilterdView()}
      </MainBg>
    </Bg>
  )
)
}

   


 
                        
export default Caretaker