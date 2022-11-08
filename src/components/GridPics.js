import './GridPic.css'
import kitchensMin from "../assets/kitchensMin.png"
import modernKitchen from "../assets/modernKitchen.png"
import customKitchen from "../assets/customKitchen.png"
import bathroom from "../assets/bathroom.png"
import laundry from "../assets/laundry.png"
import smallBathroom from "../assets/smallBathroom.png"


export default function GridPics() {
  return (

  <div className="grid-wrapper">
        <div className="container">
            <img className="grid-image colorbond_image" src={kitchensMin} alt="modern minimalist kitchen" />
            <div className="overlay">
            <div className="text"><h2 className='grid_h2s'>Minimalist kitchens</h2></div>
        </div>
  </div>
        <div className="container">
            <img className="grid-image grid-image-right" src={modernKitchen} alt="modern kitchen" />
            <div className="overlay overlay-right">
            <div className="text"><h2 className='grid_h2s'>Modern kitchens</h2></div>
            </div>
    </div>
        <div className="container">
        <img className="grid-image grid-image-left" src={customKitchen} alt="custom kitchen designed and renovated" />
        <div className="overlay overlay-left">
        <div className="text"><h2 className='grid_h2s'>Custom kitchen design and build</h2></div>
        </div>
    </div>
        <div className="container">
        <img className="grid-image " src={laundry} alt="laundry that has been renovated" />
        <div className="overlay overlay-right-two">
        <div className="text"><h2 className='grid_h2s'>Laundry and butler pantry</h2></div>
        </div>
    </div>
        <div className="container">
        <img className="grid-image grid-image-left" src={bathroom} alt="bathroom renovation" />
        <div className="overlay overlay-left-two">
        <div className="text"><h2 className='grid_h2s'>Complete modern bathroom renovation</h2></div>
        </div>
    </div>
        <div className="container">
        <img className="grid-image" src={smallBathroom} alt="small bathroom that has been renovated" />
        <div className="overlay overlay-right-three">
        <div className="text"><h2 className='grid_h2s'>Bathrooms built to last</h2></div>
        </div>
    </div>
    </div>
  );
}
