import '../css files/facilitycard.css'
const FacilityCard = (props) =>{
    return (
        <div className="Facility_cards">
            <div className="facility_card">
                    <img src={props.imageSrc} alt=" " className="image"/>
                <div className="CardInfo">
                    <span className="Name">{props.Name}</span>
                    <span className="Degination">{props.Designation}</span>
                    <span className="Phone">{props.Phone}</span>
                    <span className="Email">{props.Email}</span>
                </div>
            </div>
        </div>
    )
}



export default FacilityCard