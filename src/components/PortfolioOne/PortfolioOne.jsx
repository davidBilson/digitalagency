import React from 'react'
import './PortfolioOne.css'

const PortfolioOne = () => {
  return (
    <section className="portfolio-one">
        <div class="parent">
            <div 
            class="div1" 
            onClick={() => window.open("https://wow-salons.com/", "_blank")}
            data-aos="fade-up" data-aos-duration="2000"
            >
                <a href="#">
                </a>
            </div>

            <div 
            class="div2" 
            onClick={() => window.open("https://fantazia.ae/", "_blank")}
            data-aos="fade-down" data-aos-duration="2000"
            >
                <p>FANTAZIA</p>
                <p> 2022</p>
            </div>
            <div class="div3">
                <a href="">
                    <h2 data-aos="fade-in" data-aos-duration="2000">SELECTED WORKS</h2>
                    <p>As a leading digital agency, we pride ourselves on crafting visually captivating and highly functional sites for our clients. Our array of selected works showcases our mastery in web development and design, revealing the vast range of audiences and purposes we cater to.
                    </p>
                </a>
            </div>
            <div 
            class="div4" 
            onClick={() => window.open("https://matrixevents.me/", "_blank")}
            data-aos="fade-up" data-aos-duration="2000"
            >
            <p>MATRIX</p>
                <p>2022</p>
            </div>
            <div 
            class="div5" 
            onClick={() => window.open("https://ezytrac.ae/")}
            data-aos="fade-down" data-aos-duration="2000"
            >
            <p>EZYTRAC</p>
                <p>2023</p>
            </div>
        </div>
    </section>
  )
}

export default PortfolioOne