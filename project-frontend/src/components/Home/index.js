
import {useNavigate } from "react-router-dom";
import { LuUser,LuUsers  } from "react-icons/lu";

import {Bg,Heading,Para,CardsContainer,Card,PatientContainer,PatientIntro,PatientHeading,PatientPara,UnorderList,ListElement,SpanElement,CaretakerContainer,CaretakerHeading,CaretakerUnorderList,PatientButton,CaretakerButton} from "./styledComponents"

const Home=()=>{

    const navigate = useNavigate();

const OnClickButton=()=>{
   navigate("/login");
}

return <Bg>
    <div>
        <Heading>Welcome to MediCare Companion</Heading>
        <Para>Your trusted partner in medication management. Choose your role to get started with personalized features.</Para>
       <CardsContainer>
         <Card>
            <PatientIntro><PatientContainer>
                <LuUser style={{ fontSize: "30px",color:"blue" }} />
            </PatientContainer>
            <PatientHeading>I'm a Patient</PatientHeading>
            <PatientPara>Track your medication schedule and maintain your  health records</PatientPara>
            </PatientIntro>
            <UnorderList>
                <ListElement>
                    <SpanElement>Mark medications as taken</SpanElement>
                </ListElement>
                <ListElement>
                    <SpanElement>Upload proof photos (optional)</SpanElement>
                </ListElement>
                <ListElement>
                    <SpanElement>View your medication calendar</SpanElement>
                </ListElement>
                <ListElement>
                    <SpanElement>Large, easy-to-use interface</SpanElement>
                </ListElement>
            </UnorderList>
            <PatientButton onClick={OnClickButton}>Continue as Patient</PatientButton>
        </Card>
         <Card>
           <PatientIntro>
             <CaretakerContainer>
                <LuUsers style={{ fontSize: "30px",color:"green" }} />
            </CaretakerContainer>
            <CaretakerHeading>I'm a Caretaker</CaretakerHeading>
            <PatientPara>Monitor and support your loved one's medication adherence</PatientPara>
           </PatientIntro>
            <CaretakerUnorderList>
                <ListElement>
                    <SpanElement>Monitor medication compliance</SpanElement>
                </ListElement>
                <ListElement>
                    <SpanElement>Set up notification preferences</SpanElement>
                </ListElement>
                <ListElement>
                    <SpanElement>View detailed reports</SpanElement>
                </ListElement>
                <ListElement>
                    <SpanElement>Receive email alerts</SpanElement>
                </ListElement>
            </CaretakerUnorderList>
            <CaretakerButton onClick={OnClickButton} >Continue as Caretaker</CaretakerButton>
        </Card>
       </CardsContainer>
    </div>
</Bg>
}
export default Home