import Navbar from '../components/other component/Navbar'
import Galery from '../components/gallery/gallery'
import './GALARY.CSS'
const Gallery =()=>{
    return(
        <div className='mai'>
            <Navbar/>
            <div/>
        <div className='content'>
            {<Galery/>}
        </div>
        </div>
    )
}
export default Gallery