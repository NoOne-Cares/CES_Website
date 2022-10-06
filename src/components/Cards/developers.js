import "../member/MC.css"
const DeveloperCard = (props) => {
    return(
        <div>
             <div className="box">
                <div className="card">
                    <div className="imgBx">
                        <img src = {props.ImgSrc} alt="images"/>
                    </div>
                    <div class="details">
                        <div className="Nmame">{props.Name}</div>
                        <div className="Position">{props.Position}</div>
                        <div className="Social">
                            <br className="Git">{props.GH}</br>
                            <br className="Insta">{props.Insta}</br>
                            <br className="Linkdien">{props.Linkdien}</br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeveloperCard