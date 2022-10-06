import "../member/membercard.css"
const MemeberCard = (props) => {
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
                            <br className="Fb">{props.Fb}</br>
                            <br className="Insta">{props.Insta}</br>
                            <br className="Linkdien">{props.Linkdien}</br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MemeberCard