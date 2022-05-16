import { useState } from "react"


const Form = () => {

    
    const[email, setEmail] = useState("")
    const[isPending, setIsPending] = useState(false)
    const[form, setForm] = useState(true)
    const[load, setLoad] = useState(false)
    const[disapier, setDisapier] = useState(true)
    const [valid, setValid] =useState(false) //email validitása

    const handleSubmit = (e) => {
        e.preventDefault() 
        
        const data={email}

        fetch('https://demoapi.com/api/series/newsletter', {
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
              }, 2500)
            setTimeout(() => {
                setIsPending(true)
              }, 2500)
            setTimeout(() => {
                setDisapier(false)
              }, 5000)
        }) 
    }


    const handleInputChange = (e) => {  //email validitása
        setEmail(e.target.value)
        if(e.target.value.includes("@") && e.target.value.includes('.')){
            setValid(true)
        }
    }

    return(
        <div>
            {disapier && <div>
                <h1>Subscribe to our newslater</h1>
                {form && <form onSubmit={handleSubmit}>
                <input 
                        type="text"
                        required
                        onChange={(e) => {handleInputChange(e)}}
                    />
                {valid ? <button >Subscribe</button> : <button disabled>Subscribe</button>} 
                
                </form>}
                {load && <div>Loading...</div>}
                {isPending && <div>Subscribed</div>}
            </div>}
        </div>
    )
}

export default Form