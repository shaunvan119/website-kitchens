import React from 'react'
import './facebookChat.css'
import MessengerCustomerChat from 'react-messenger-customer-chat';

const facebookChat = () => {
  return (
    <div>

    <MessengerCustomerChat
    pageId="100087662866889"
    appId="524942295889420"/>
    
    </div>
  )
}

export default facebookChat