import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'
import  {Bounce} from 'react-awesome-reveal'


const Contact = () => {
  return (
    <div className='contact container' id='contact'>

      <div>
        <Bounce>
        <h2>Connect with us</h2>
        </Bounce>
        <span className="line"></span>
      </div>
      <div className='row'>
        <div className="contact-address col-xl-6 col-lg-6 col-md-3 col-sm-3">
            <h3>Headquarters</h3>
            <p>No 46, Oyinlola Aveue, ring-road, challenge Ibadan, Oyo state</p>
            <h3>Branches</h3>
            <p>Kosodo Road, oranyan,Ibadan, Oyo state</p>
            <p>Oloyade, Babayalo Babanla,Olorunsogo, Ibadan, Oyo state</p>

        </div>

        <div className="contact-social col-xl-6 col-lg-6 col-md-3 col-sm-3">
            <h3 className='no-wrap'>Join Our Social Community</h3>
            <div className="contact-us no-wrap">
              <p><a target='_blank' href='https://chat.whatsapp.com/KR7H8eUbruyBsQ8KSISBa0'><FaWhatsapp  className='whatsapp'/>Click to join our Whatsapp group</a></p>
              <p><a target='_blank' href='https://www.facebook.com/eagleswings.church.5?mibextid=JRoKGi'><FaFacebookSquare  className='facebook'/> Click to join our Facebook community</a></p>
              <p><FaPhoneAlt/>  08032125130, 08130899786</p>
              <p><MdOutlineEmail/>akinolaolaoluwa@gmail.com</p>

        </div>
          
        </div>
       
       
      </div>

       
    </div>
  )
}

export default Contact
