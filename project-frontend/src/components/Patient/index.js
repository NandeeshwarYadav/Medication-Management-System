import {useState,useEffect,useCallback} from "react"
import Cookies from "js-cookie"
import { format } from 'date-fns';

import { LuUser,LuImage   } from "react-icons/lu";
import { FaRegCircle ,FaRegClock } from "react-icons/fa";
import { IoCamera } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import { FaLongArrowAltLeft } from "react-icons/fa";
import {useNavigate } from "react-router-dom";

import Navbar from "../Navbar";
import MedicationCalendar from "../MedicationCalendar"
import Loader from "../Loader";

import {Bg,IntroHeadPara,DashboardBg,DashboardIntro,UserIconContainer,Greeting,GreetingPara,MarkedCard,ErorMsg,
    StreakContainer,Streak,Span,DashboardFilter,MedicationListBg,MedicationHead,MedicationIntro,MedicationCard,MedicationNumber,MedicationNum,
DailyMedicationHead,DailyMedicationPara,MedicationTakenTime,MedicationTimeIntro,MedicationTime,UploadImageCard,AddProofHead,AddProofPara,TakePhotoContainer,
TakePhotoPara,MarkAsTakenButton,MedicationIntroAddMedication,AddMedicationButton,FormCard,CreateHeadingBackIconContainer,CreateAccountHeading,InputLabelContainer
,Label,Input,ShowAddMedication,MainBg,Table,TableHead,TablePara,MedicationListImageClendar,UploadAndTakenButtonContainerSm,UploadAndTakenButtonContainerMd,
MarkedContainer} from "./styledComponents"

const Patient=()=>{

     const navigate = useNavigate();

    const [AddMedication,setAddMedication]=useState(false)
    const [userData,setUserData]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [medicationName,setAddMedicationName]=useState("")
    const [medicationDosage,setMedicationDosage]=useState("")
    const [medicationFrequency,setMedicationFrequency]=useState("")
    const [errMsg,setErrMsg]=useState("")
       const jwtToken=Cookies.get("jwt_token")
       const role=Cookies.get("role")
       console.log(role)
const getPatientData = useCallback(async () => {
    const url = "https://medication-backend-aqhw.onrender.com/dashboard/patient";
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwtToken}`
        }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data)

    if (response.ok) {
        const fetchedData = {
            patientName:data.patientName,
            caretakerName: data.caretakerName,
            todayStatus: data.todayStatus,
            medications: data.medications.map(each => ({
                name: each.name,
                dosage: each.dosage,
                frequency: each.frequency
            })),
            logs: data.logs.map(each => ({
                date: each.date,
                status: each.status,
            })),
            adherenceRate: data.adherenceRate,
            streak: data.streak
        };
        setUserData(fetchedData);
        setIsLoading(false);
    }
}, [jwtToken]);

useEffect(() => {
    getPatientData();
    console.log("working");
}, [getPatientData]);

      
    const AddMedicationData=async()=>{
        const url="https://medication-backend-aqhw.onrender.com/medications"
        const userDetails={
            name:medicationName,
            dosage:medicationDosage,
            frequency:medicationFrequency            
        }
            
         const options = {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwtToken}`
    }
        ,body: JSON.stringify(userDetails)
    }
            const response = await fetch(url, options)
            const data = await response.json()
            console.log(data)
            if (response.ok){
                console.log(`data:${data}`)
                getPatientData()
                setAddMedication(false)
                setAddMedicationName("")
                setMedicationDosage("")
                setMedicationFrequency("")
            }
            else{
                setErrMsg(data.error)
            }
            

    }

    const onChangeMedicationName=(event)=>{
        setAddMedicationName(event.target.value)
    }

    const onChangeMedicationDosage=(event)=>{
        setMedicationDosage(event.target.value)
    }

    const onChangeMedicationFrequency=(event)=>{
        setMedicationFrequency(event.target.value)
    }

    const onClickArrow=()=>{
        navigate("/patient");
        setAddMedication(false)
    }

   const onClickAddMedication=()=>{
        setAddMedication(true)
    }
// console.log(medicationName,medicationDosage,medicationFrequency)
const onSubmitForm=event=>{
        event.preventDefault()
        const checkAllBlanks=medicationName!=="" && medicationFrequency!=="" && medicationDosage!==""

        if (checkAllBlanks){
            AddMedicationData()
        }
        else{
            setErrMsg("Enter All Credentials")
        }
    }

    const  onClickMarkMedication=async()=>{
        const url="https://medication-backend-aqhw.onrender.com/medications/mark"

         const options = {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwtToken}`
    }

    }
            const response = await fetch(url, options)
        //    const data = await response.json()
        if (response.ok){
            getPatientData()
        }
        
    }

    const {patientName,  streak,adherenceRate,todayStatus,medications}=userData

        const now = new Date();
        const time12Hour = format(now, 'hh:mm a');

    return <Bg>
                        <Navbar/>
                        <MainBg>
                            <DashboardBg>
                            <DashboardIntro>
                                <UserIconContainer>
                                <LuUser style={{fontSize:"30px",color:"#ffffff"}}  />
                            </UserIconContainer>
                            <IntroHeadPara>
                                <Greeting>Good Evening {patientName}!</Greeting>
                                <GreetingPara>Ready to stay on track with your medication?</GreetingPara>
                            </IntroHeadPara>
                            </DashboardIntro>
                            <DashboardFilter>
                                <StreakContainer>
                                <Streak>{streak}</Streak>
                                <Span>Day Streak</Span>
                            </StreakContainer>
                            <StreakContainer>
                                {todayStatus==="taken"? <TiTick style={{fontSize:"20px",color:"#ffffff"}}   />:
                                <FaRegCircle style={{fontSize:"20px",color:"#ffffff"}}   />}    
                                <Span>Today's Status</Span>
                            </StreakContainer>
                            <StreakContainer>
                                <Streak>{adherenceRate}</Streak>
                                <Span>Monthly Rate</Span>
                            </StreakContainer>
                            </DashboardFilter>
                        </DashboardBg>
                                        {AddMedication?
                                        <ShowAddMedication>
                                            <FormCard onSubmit={onSubmitForm} >
                                            <CreateHeadingBackIconContainer>
                                                <FaLongArrowAltLeft onClick={onClickArrow} style={{fontSize:"20px",marginRight:"20px",color:"grey"}}   />
                                                <CreateAccountHeading>Enter Your Medication Details</CreateAccountHeading>
                                            </CreateHeadingBackIconContainer>
                                           
                                            <InputLabelContainer>
                                              <Label htmlFor="medicationName"   >Medication Name</Label>
                                              <Input id="medicationName" placeholder="Enter the Medication Name" onChange={onChangeMedicationName} value={medicationName}  />
                                               </InputLabelContainer>
                                            <InputLabelContainer>
                                              <Label htmlFor="dosage"   >Dosage</Label>
                                              <Input id="dosage" placeholder='Enter the Medication Dosage' onChange={onChangeMedicationDosage} value={medicationDosage} />
                                               </InputLabelContainer>
                                                <InputLabelContainer>
                                              <Label htmlFor="frequency"   >Frequency</Label>
                                              <Input id="frequency" placeholder="Enter the Medication Frequency" onChange={onChangeMedicationFrequency} value={medicationFrequency}/>
                                               </InputLabelContainer>
                                              <AddMedicationButton type="submit" style={{marginTop:"20px"}}  >Add Medication</AddMedicationButton>
                                              {errMsg && <ErorMsg>*{errMsg}</ErorMsg>}          
                                        </FormCard>
                                        </ShowAddMedication>
                                        :
                                        <MedicationListBg>
                            <MedicationIntroAddMedication>
                                <MedicationIntro>
                                <CiCalendar style={{fontSize:"25px",color:"blue"}}   />
                                <MedicationHead>Today's Medication</MedicationHead>
                                </MedicationIntro>
                                {
                                    todayStatus!=="taken" && <AddMedicationButton onClick={onClickAddMedication}>Add Medication</AddMedicationButton>
                                }
                            </MedicationIntroAddMedication>
                            
                           <MedicationListImageClendar>
                             {todayStatus==="taken"?
                             <MarkedCard>
                                <MarkedContainer> <TiTick style={{fontSize:"20px",color:"#ffffff"}}   /></MarkedContainer>
                                <AddProofHead>Medication Completed!</AddProofHead>
                                <AddProofPara>Great job! You've taken your medication for June 22, 2025.</AddProofPara>
                                <MarkAsTakenButton $todayStatus={todayStatus}><TiTick/> as Marked </MarkAsTakenButton>
                             </MarkedCard> :
                              <div>
                                    <MedicationCard>
                                <MedicationTimeIntro>
                                <MedicationIntro>
                                 <MedicationNumber>
                                    <MedicationNum>1</MedicationNum>
                                </MedicationNumber>
                                <div>
                                    <DailyMedicationHead>
                                    Daily Medication Set
                                </DailyMedicationHead>
                                <DailyMedicationPara>Complete set of daily tablets</DailyMedicationPara>
                                </div>
                               </MedicationIntro>
                               <MedicationTakenTime>
                                <MedicationIntro>
                                    <FaRegClock style={{fontSize:'10px',marginRight:"5px"}}  />
                                    <MedicationTime>{time12Hour}</MedicationTime>
                                </MedicationIntro>
                                
                                </MedicationTakenTime>
                                </MedicationTimeIntro>
                         {isLoading? <Loader/> :
                              <Table>
                            <thead>
                                <tr>
                                <TableHead>Name</TableHead>
                                <TableHead>Dosage</TableHead>
                                <TableHead>Frequency</TableHead>
                                </tr>
                            </thead>
                            <tbody>
                              
                                {/* <TablePara>Paracetamol</TablePara>
                                <TablePara>200 mg</TablePara>
                                <TablePara>Twice a Day</TablePara> */}
                                {medications.map(each=>(
                                      <tr key={each.name}>
                                   <TablePara>{each.name}</TablePara>
                                   <TablePara>{each.dosage}</TablePara>
                                   <TablePara>{each.frequency}</TablePara>
                                    </tr>

                                ))}
                               
                            </tbody>
                            </Table>
                         }

                                <UploadAndTakenButtonContainerMd>
                                     <UploadImageCard>
                                <LuImage style={{fontSize:"50px",color:"#6E7A8A"}}  />
                                <AddProofHead>Add Proof Photo</AddProofHead>
                                <AddProofPara>Take a photo of your medication or pill organizer as confirmation</AddProofPara>
                                <TakePhotoContainer>
                                    <IoCamera  style={{fontSize:"20px",color:"#6E7A8A",marginRight:"10px"}} />
                                    <TakePhotoPara>Take Photo</TakePhotoPara>
                                </TakePhotoContainer>
                            </UploadImageCard>
                            <MarkAsTakenButton $todayStatus={todayStatus} onClick= {onClickMarkMedication}><TiTick/> as Marked </MarkAsTakenButton>
                                    </UploadAndTakenButtonContainerMd>                                                                 
                            </MedicationCard>
                            <UploadAndTakenButtonContainerSm>
                                
                                <UploadImageCard>
                                <LuImage style={{fontSize:"50px",color:"#6E7A8A"}}  />
                                <AddProofHead>Add Proof Photo</AddProofHead>
                                <AddProofPara>Take a photo of your medication or pill organizer as confirmation</AddProofPara>
                                <TakePhotoContainer>
                                    <IoCamera  style={{fontSize:"20px",color:"#6E7A8A",marginRight:"10px"}} />
                                    <TakePhotoPara>Take Photo</TakePhotoPara>
                                </TakePhotoContainer>
                            </UploadImageCard>
                            <MarkAsTakenButton $todayStatus={todayStatus} onClick= {onClickMarkMedication}><TiTick/> as Marked </MarkAsTakenButton>
                            </UploadAndTakenButtonContainerSm>
                                </div>
                                
                             }
                            <MedicationCalendar logs={userData.logs} />
                           </MedicationListImageClendar>
                        </MedicationListBg>}
                        </MainBg>
                    </Bg>
}

export default Patient 