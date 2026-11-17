import { useState } from "react"
import axios from "axios"
import "./Shorten.css"

const Shorten = ({ onShorten }) => {

    const [url, setUrl] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (url.trim() === "") {
            setError("Please add a link")
            return
        }

        setError("")

        try {
            const response = await axios.get("https://is.gd/create.php", {
                params: {
                    format: "json",
                    url: url.trim()
                }
            })

            if (!response.data.shorturl) {
                setError("Could not shorten this link")
                return
            }

            onShorten({
                id: Date.now(),
                original: url.trim(),
                short: response.data.shorturl
            })

            setUrl("")
        } catch (err) {
            setError("Could not shorten this link")
        }
    }

    return (
        <div className="shorten">
            <form onSubmit={handleSubmit} className="shorten__content">
                <div className="shorten__field">
                    <input
                        className={`${error ? "shorten__input shorten__input--error" : "shorten__input"}`}
                        id="shorten"
                        type="text"
                        placeholder="Shorten a link here..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    {error && <p className="shorten__error">{error}</p>}
                </div>
                <button className="shorten__btn">Shorten It!</button>
            </form>
        </div>
    )
}

export default Shorten