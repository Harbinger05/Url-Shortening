import "./Hero.css"

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <h2 className="hero__title">More than just <br /> shorter links</h2>
                <p className="hero__description">Build your brand’s recognition and get detailed insights
                    on how your links are performing.</p>
                <button className="hero__btn">Get Started</button>
            </div>


            <img className="hero__illustration" src="/images/illustration-working.svg" alt="hero image" />
        </section>
    )
}

export default Hero