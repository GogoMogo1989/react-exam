import React, { useEffect, useState } from "react"
import LoadingMask from "./components/LoadingMask"
import Character from "./components/Character"
import Subscribtion from './components/Subscribtion'


const App = () => {

  const[datas, setData] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [isPending2, setIsPending2] = useState(false)

  useEffect(() => {
        fetch('https://demoapi.com/api/series/howimetyourmother')
          .then(res =>{
              return res.json()
          })
          .then(datas =>{
              console.log(datas)
              setData(datas)
              setIsPending(false)
          })
  }, []) 

  setTimeout(() => {
    setIsPending2(true)
  }, 10000)

  return (
    <div>
      <h1>Series Api</h1>
      {isPending && <LoadingMask />}
      {datas && <Character name={datas}/>}
      {isPending2 && <Subscribtion />}
    </div>
  )
}

export default App
