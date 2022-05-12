import { useState} from 'react'


const Character = ({name}) => {

    const name3 = name.map(k)

    function k (v){
        return v.details
    }

  const [name2, setName] = useState("")

   const handleClick = () => {
       setName(name3)
   }    

    return(
        <div> 
        {name.map((data)=>(
            <div>
              <h3>{data.name}</h3>
              <h4>{name2}</h4>
              <button onClick={handleClick}>Show details</button>
            </div>

          ))}
        </div>
    )
}

export default Character