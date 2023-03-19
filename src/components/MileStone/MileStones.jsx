import CountOne from "./CountOne"
import CountThree from "./CountThree"
import CountTwo from "./CountTwo"
import './MileStones.css'

const MileStones = () => {
  return (
    <section className='mile-stone'>
        <div className="mile-stone-container">
            <CountOne />
            <p>Successful Projects</p>
        </div>
        <div className="mile-stone-container">
            <CountTwo />
            <p>Happy Clients</p>
        </div>
        <div className="mile-stone-container">
            <CountThree />
            <p>Mile Stones</p>
        </div>
        <div className="mile-stone-container">
            <p>Our milestones are proof of our dedication to excellence. We've made countless clients happy with our outstanding work and delivered successful projects time and time again. Trust us to bring your ideas to life.</p>
        </div>
    </section>
  )
}

export default MileStones