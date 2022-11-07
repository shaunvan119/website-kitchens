import './GridPic.css'
import colorbondAusRoof from "../assets/colorbondAusRoof.png"
import TiledAusRoof from "../assets/TiledAusRoof.png"
import AusRoof from "../assets/AusRoof.png"
import newBuild from "../assets/newBuild.png"
import metalRoof from "../assets/metalRoof.png"
import roofClean from "../assets/roofClean.png"


export default function GridPics() {
  return (

  <div className="grid-wrapper">
        <div className="container">
            <img className="grid-image colorbond_image" src={colorbondAusRoof} alt="colorbond roof" />
            <div className="overlay">
            <div className="text">Colorbond, metal roofing and re-roofing.</div>
        </div>
  </div>
        <div className="container">
            <img className="grid-image grid-image-right" src={TiledAusRoof} alt="tiled roof" />
            <div className="overlay overlay-right">
            <div className="text">Tile roofing and restoration</div>
            </div>
    </div>
        <div className="container">
        <img className="grid-image grid-image-left" src={AusRoof} alt="house" />
        <div className="overlay overlay-left">
        <div className="text">General roof repairs and tile to metal roof conversions</div>
        </div>
    </div>
        <div className="container">
        <img className="grid-image " src={newBuild} alt="new house" />
        <div className="overlay overlay-right-two">
        <div className="text">Roofing solutions for new and old homes</div>
        </div>
    </div>
        <div className="container">
        <img className="grid-image grid-image-left" src={metalRoof} alt="metal roof" />
        <div className="overlay overlay-left-two">
        <div className="text">Quality of build and service is 100%</div>
        </div>
    </div>
        <div className="container">
        <img className="grid-image" src={roofClean} alt="before after clean roof" />
        <div className="overlay overlay-right-three">
        <div className="text">Roof cleaning and painting</div>
        </div>
    </div>
    </div>
  );
}
