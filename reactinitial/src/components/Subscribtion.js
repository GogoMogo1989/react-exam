import { useState } from "react"

const Form = () => {

    const[email, setEmail] = useState("")
    const[isPending, setIsPending] = useState(false)
    const[form, setForm] = useState(true)
    const[load, setLoad] = useState(false)
    const[disapier, setDisapier] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault() //emiatt ha a submutra kattintounk, nem töldőik be az oldal egyből
        
        const data={email}

        fetch('https://demoapi.com/api/series/newsletter', {  //ez a post method pattern
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(() => {
            console.log("new blog added")
            setForm(false)
            setTimeout(() => {
                setLoad(true)
              })
            setTimeout(() => {
                setLoad(false)
              }, 3000)
            setTimeout(() => {
                setIsPending(true)
              }, 3000)
            setTimeout(() => {
                setDisapier(false)
              }, 5000)
        }) 
    }


    return(
        <div>
            {disapier && <div>
                <h1>Subscribe to our newslater</h1>
                {form && <form onSubmit={handleSubmit}>
                <input 
                        type="text"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                <button>Subscribe</button>
                </form>}
                {load && <div>Loading...</div>}
                {isPending && <div>Subscribed</div>}
            </div>}
        </div>
    )
}

export default Form