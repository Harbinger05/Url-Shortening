import { useState } from "react"
import "./Link.css"

const Link = ({ original, short }) => {

    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(short)
        setCopied(true)
    }

    return (
        <div className="link">
            <div className="link__content">
                <p className="link__original">{original}</p>
                <div className="link__right">
                    <p className="link__short">{short}</p>
                    <button onClick={handleCopy} className={`${copied ? "link__copy copied" : "link__copy"}`}>
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Link