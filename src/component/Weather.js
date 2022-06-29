import axios from 'axios'
import React, {useState, useEffect} from 'react'

const Weather = () => {
    const[value, setValue] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos/").then((res) =>setValue(res.data) )
    
    },[])
    console.log(value)
    return (
        <div>
            {
            value.map((item,index)=>
            <div key={index}>
                <p >{item.userId} </p>
                <p>{item.id}</p>
                <p>{item.title}</p> 
                <p>{item.completed}</p> 
            </div>)
            }
        </div>
    )
}

export default Weather
