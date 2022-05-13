import { useState} from 'react'

const Character = ({name}) => {

  const [details, setDetails] = useState(false)
  const [btnText, setBtntext] = useState("Show details")

   const handleClick = () => {
     if(btnText === "Show details"){
       setDetails(true)
       setBtntext("Less details")
     }else{
       setDetails(false)
       setBtntext("Show details")
     }
   }    

    return(
        <div> 
        {name.map((data, index)=>(
            <div key={index}>
              <h3 >{data.name}</h3>
              {details && <h4>{data.details}</h4>}
              <button onClick={handleClick}>{btnText}</button>
            </div>

          ))}
        </div>
    )
}

export default Character