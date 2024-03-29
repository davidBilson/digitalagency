import './Contact.css'
import {MdOutlineRocketLaunch} from 'react-icons/md'
import { useState } from 'react';
import {AiFillPhone} from 'react-icons/ai';
import {IoLogoWhatsapp} from 'react-icons/io';
import {CgMail} from 'react-icons/cg'

import Modal from 'react-modal';
Modal.setAppElement('#root');
const Contact = () => {
    const customStyles = {
        content: {
            top: "10vh",
            left:'auto',
            right:'auto',
            width:"90%",
            maxWidth: "370px",
            height:"600px",
            margin: "auto",
            borderRadius:"40px",
            border:"none",
            padding:0,
            overflow:"hidden"
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 99,
          display:'flex',
          justifyContent:'center'
          
        }
    };
    const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="contact-container" id='contact'>
        <h2>READY TO START <br />A PROJECT<span id="blink">?</span></h2>
        <button onClick={() => setModalOpen(true)}>START NOW <MdOutlineRocketLaunch/></button>
        <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}      
        >
        <button id='close-modal' onClick={() => setModalOpen(false)}>X</button>
          <div className="modal-content">
            <div className="modal-heading">
            <h3>TaySolutions</h3>
            </div>
            <div className="modal-preface">
            <small>#StayCreative</small>
            <h3> Let Us Bring Your Vision to Life</h3>
            <p>Build your vision with us! Our experts create websites, content, and graphics. Contact us via social links below.</p>
            </div>
            <div className="modal-socials">
                <a href="tel:(702)984-3036">Call us <AiFillPhone /></a>
                <a href="https://wa.me/+1(702)561-9562">Message us on WhatsApp <IoLogoWhatsapp /></a>
                <a href="mailto:cyberphonkstudios@gmail.com?subject=Request%20for:">Send us an email <CgMail /></a>
            </div>
          </div>
        </Modal>
    </section>
  )
}
export default Contact