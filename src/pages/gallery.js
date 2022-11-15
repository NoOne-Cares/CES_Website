import TaskBar from '../components/other component/task-bar'
import Galery from '../components/gallery/gallery'
import './GALARY.CSS'
const Gallery =()=>{
    return(
        <div className='main'>
            {<TaskBar/>}
            <div/>
            {<Galery/>}

        </div>
    )
}
export default Gallery