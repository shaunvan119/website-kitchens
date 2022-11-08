
import "./Service.css"
import { MdBuild } from 'react-icons/md';
import { MdDesignServices, MdLocalLaundryService, MdBathroom, MdCoffeeMaker} from 'react-icons/md';
import { GiKitchenTap } from 'react-icons/gi';




const style = { color: "#d89e1a", fontSize: "3rem" }



const Service = () => {
  

  return (
    
    <div className="grid-wrapper_service">
    
        <div className="container_service" >
        <div className='click_container'>
            <h2>Kitchen design</h2>
            <MdDesignServices style={style}/>
         </div> 
         

        </div>
        <div className="container_service">
            <h2>Custom kitchen <br/> build</h2>
            <MdBuild style={style}/>
        </div>
        <div className="container_service">
            <h2>Modern, minimalist and contemporary <br/> kitchens</h2>
            <GiKitchenTap style={style}/>
        </div>
        <div className="container_service">
            <h2>Laundry design and<br/> build</h2>
            <MdLocalLaundryService style={style}/>
        </div>
        <div className="container_service">
            <h2>Bathroom design and<br/> build</h2>
            <MdBathroom style={style}/>
        </div>
        <div className="container_service">
            <h2>Butlers pantry</h2>
         <MdCoffeeMaker style={style}/>
        </div>
       
    </div>

    
  )
}

export default Service