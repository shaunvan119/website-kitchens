
import "./Service.css"
import { GiLeak } from 'react-icons/gi';
import { MdRoofing, MdCleaningServices, MdOutlineHomeRepairService  } from 'react-icons/md';
import { GiPaintRoller } from 'react-icons/gi';
import { ImHome } from 'react-icons/im';



const style = { color: "#d89e1a", fontSize: "3rem" }



const Service = () => {
  

  return (
    
    <div className="grid-wrapper_service">
    
        <div className="container_service" >
        <div className='click_container'>
            <h2>Roof Leak Repairs</h2>
            <GiLeak style={style}/>
         </div> 
         

        </div>
        <div className="container_service">
            <h2>Roof Restoration & Replacement</h2>
            <MdRoofing style={style}/>
        </div>
        <div className="container_service">
            <h2>Roof Cleaning & Painting</h2>
            <GiPaintRoller style={style}/>
        </div>
        <div className="container_service">
            <h2>Gutter Repair & Gutter Installation</h2>
            <MdOutlineHomeRepairService style={style}/>
        </div>
        <div className="container_service">
            <h2>Gutter Cleaning</h2>
            <MdCleaningServices style={style}/>
        </div>
        <div className="container_service">
            <h2>Gutter Replacement</h2>
         <ImHome style={style}/>
        </div>
       
    </div>

    
  )
}

export default Service