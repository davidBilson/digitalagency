import {BiDownArrow} from 'react-icons/bi'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {CgMail} from 'react-icons/cg'
import './Hero.css'

const Hero = () => {
    
  return (
    <section className="hero-section">
        <article className="hero-container-one">
            <h1 className="hero-header">
                SHARING YOUR VISION
            </h1>
        </article>
        <article className="hero-container-two">
            <p className="hero-text" data-aos="fade-zoom-in" data-aos-duration="2000">
            We create innovative solutions to help businesses thrive in today's fast-paced digital landscape. Our team of experts brings together creativity, strategy, and technology to deliver measurable results that exceed our clients' expectations. Let us help you unlock your brand's full potential and achieve your digital goals.
            </p>
            <div className="hero-buttons">
                <a href="#contact">
                    START PROJECT <BiDownArrow/>
                </a>
                <a href="">
                <AiOutlineTwitter />
                </a>
                <a href="">
                <IoLogoWhatsapp />
                </a>
                <a href="">
                <AiFillInstagram />
                </a>
                <a href="">
                <CgMail />
                </a>
            </div>
        </article>
    </section>
  )
}

export default Hero