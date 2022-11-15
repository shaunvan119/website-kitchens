import Header from "./containers/Header";
import Main from "./containers/Main";
import Footer from "./containers/Footer";
import BottomMain from "./containers/BottomMain";
import { useEffect} from 'react';


function App() {
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8080/', {mode:'cors'});
      const data = await response.json();
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])
  return (
    <div className="App">
   
     <Header/>
     <Main/>
     <BottomMain/>
     <Footer/>
     
    </div>
  );
}

export default App;
