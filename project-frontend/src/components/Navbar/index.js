import Cookies from "js-cookie"
import {useNavigate } from "react-router-dom";


import {NavBar,Micon,MedicareHeading,MediCarePara,IntroHeadPara,IntroContainer,LogoutButton} from "./styledComponents"

const Navbar=()=> {

      const navigate = useNavigate();
      const role=Cookies.get("role")

    const onClickLogout=()=>{
        Cookies.remove("jwt_token");
Cookies.remove("role");
Cookies.remove("userId"); // If you're storing this too
navigate("/login");
    }
return <NavBar>
                           <IntroContainer>
                             <Micon>    
                                M
                            </Micon>
                            <IntroHeadPara>
                                <MedicareHeading>
                             MediCare Companion
                            </MedicareHeading>
                            <MediCarePara>{` ${role} view`}
                            </MediCarePara>
                            </IntroHeadPara>
                           </IntroContainer>

                            <LogoutButton type="button" onClick={onClickLogout}  >Logout</LogoutButton>
                        </NavBar>}

export default Navbar