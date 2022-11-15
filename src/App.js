import Header from "./containers/Header";
import Main from "./containers/Main";
import Footer from "./containers/Footer";
import BottomMain from "./containers/BottomMain";
import MessengerCustomerChat from 'react-messenger-customer-chat';


function App() {
  return (
    <div className="App">
   
     <Header/>
     <Main/>
     <BottomMain/>
     <Footer/>
     <MessengerCustomerChat
    pageId="100087662866889"
    appId="524942295889420"/>
    </div>
  );
}

export default App;
