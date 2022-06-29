import axios from 'axios'
import React,{useState,useEffect} from 'react'


const Table = () => {
    
    const[value, setValue] = useState([])

    useEffect(
        () => {
            axios.get("https://api.publicapis.org/entries").then((res)=> setValue(res.data.entries))
        },[])
console.log(value)
    return (
        <div>

                <table>
                    <thead>
                <tr>
                    <th>API</th>
                    <th>Description</th>
                    <th>Auth</th>
                    <th>HTTPS</th>
                    <th>Cors</th>
                    <th>Link</th>
                    <th>Category</th>

                </tr>
                </thead>
                <tbody>
                        {
                            value.length>0 && value.map((item,index)=>{
                                <tr key={index}>
                                    <td>{item.API}</td>
                                    <td>{item.API}</td>
                                    <td>{item.API}</td>
                                    <td>{item.API}</td>
                                    <td>{item.API}</td>
                                    <td>{item.API}</td>
                                    <td>{item.API}</td>
                                </tr>
                            })
                        }
                 </tbody>

                </table>


            {
                value.length>0 && <>
                {
                value.map((item,index)=>
                                        <div key={index}>
                                                <h1 >{item.API} </h1>
                                                <p>{item.Description}</p>
                                                <p>{item.Auth}</p> 
                                                <p>{item.HTTPS}</p> 
                                                <p>{item.Cors}</p> 
                                                <p>{item.Link}</p> 
                                                <p>{item.Category}</p> 
                                         </div>)
            }
                </>
            }
            
        </div>
    )
}

export default Table
