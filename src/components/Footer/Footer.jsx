import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {IoLogoWhatsapp} from 'react-icons/io';
import {CgMail} from 'react-icons/cg'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <section>
            <h2>KEEP IN TOUCH<span className='count-plus-three'>.</span></h2>
            <p>Tay Solutions</p>
            <p className="copyright">&copy;Copyright Tay Solutions 2023</p>
        </section>
        <section className='footer-social-links'>
                <a href="">
                Twitter <AiOutlineTwitter />
                </a>
                <a href="">
                Whatsapp <IoLogoWhatsapp />
                </a>
                <a href="">
                Instagram <AiFillInstagram />
                </a>
                <a href="">
                Email <CgMail />
                </a>
        </section>
    </footer>
  )
}

export default Footer