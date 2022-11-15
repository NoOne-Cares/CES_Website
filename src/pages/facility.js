
import FacilityCard from "../components/Cards/FacilityCard" 
import FacilityData from "../components/data/facity_data"
import './Facility.css'
import Navbar from '../components/other component/Navbar';

function card(value){
    return(
    <FacilityCard
    imageSrc={value.imageSrc}
    Name={value.Name}
    Designation={value.Designation}
    Phone={value.Phone}
    Email={value.Email}
    />
    )
};
const Facility = () => {
    return(
        <div className='main'>
        <Navbar />
            <div className="Facility_cards">
            <div className="facility_card">
                <img src='./facility pics/image1.jpeg' alt=" " className="CardName"/>
                <div className="CardInfo">
                    <span className="Name">Dr. Arjun Sil</span>
                    <span className="Degination">Associate professor & HOD</span>
                    <span className="Phone">8471820847</span>
                    <span className="Email">hod@civil.nits.ac.in</span>
                </div>
            </div>
        </div >
        <div className='grid'>
            {FacilityData.map(card)}
        </div>
        </div>
    );
}
export default Facility
    // import React,{useState,Fragment} from "react";
    // import FacilityData from "../components/facility/facity_data";
    // import TaskBar from '../components/task-bar';  

    // const Facility =  () => {
    //     return(
            
    //         <Fragment>
    //             <TaskBar/>
    //             const [detail , SetDetails]= useState(FacilityData)
    //             detail.map((detail)) => {
    //                 return(
    //                     <div>
                            
    //                     </div>
    //                 )
    //             }
    //         </Fragment>
    //     )
    // }
    // export default Facility