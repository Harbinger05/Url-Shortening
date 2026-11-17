import "./Statistics.css"
import Shorten from "../Shorten/Shorten"
import features from "../../data/features"
import { useState } from "react"
import Link from "../Link/Link"

const Statistics = () => {

    const [links, setLinks] = useState([])

    const addLink = (newLink) => {
        setLinks((prev) => [newLink, ...prev])
    }


    return (
        <section className="statistics">
            <Shorten onShorten={addLink} />

            <div className="links">
                {links.map((item) => (
                    <Link key={item.id} original={item.original} short={item.short} />
                ))}

            </div>

            <div className="statistics__header">
                <h2 className="statistics__title">Advanced Statistics</h2>
                <p className="statistics__description">Track how your links are performing across the web with our
                    advanced statistics dashboard.</p>
            </div>

            <div className="statistics__items">
                <div className="bar"></div>
                {features.map((item) => {
                    return (
                        <div key={item.id} className="statistics__item">
                            <div className="statistics__item-icon">
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <h3 className="statistics__item-title">{item.title}</h3>
                            <p className="statistics__item-info">{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Statistics