import './Service.css'
import ServiceOne from './ServiceOne'
import ServiceTwo from './ServiceTwo'

const Service = () => {
  return (
    <section className="service-container" id='services'>
        <ServiceOne />
        <ServiceTwo />
    </section>
  )
}

export default Service