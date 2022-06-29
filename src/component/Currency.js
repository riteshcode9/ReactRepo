import axios from 'axios'
import React, {useState, useEffect} from 'react'


const Currency = () => {
    
    const[value, setValue] = useState({})

    useEffect( () => {
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((res)=>
            setValue(res.data))
    
    },[])
    if((Object.keys(value)).length>0){
    console.log(value?.bpi.USD)
    console.log(Object.keys(value))
    console.log(Object.values(value))
    }
    return (
        <div>
            {
                Object.keys(value).length>0 && <> 
                    <h1>{value.bpi.USD.code}</h1>
                    <p>{value.bpi.USD.symbol}</p>
                    <p>{value.bpi.USD.rate}</p>
                    <p>{value.bpi.USD.description}</p>
                    <p>{value.bpi.USD.rate_float}</p>
                </>

                
            }

{
                Object.keys(value).length>0 && <> 
                    <h1>{value.bpi.GBP.code}</h1>
                    <p>{value.bpi.GBP.symbol}</p>
                    <p>{value.bpi.GBP.rate}</p>
                    <p>{value.bpi.GBP.description}</p>
                    <p>{value.bpi.GBP.rate_float}</p>
                </>

                
            }

{Object.keys(value).length>0 &&  <table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Symbol</th>
                        <th>Rate</th>
                    </tr>
                </thead>

                <tbody>
                    <tr><td>
                        {value.bpi.USD.code}
                        </td>
                        <td>{value.bpi.USD.symbol}</td>

                        <td>{value.bpi.USD.rate}</td>
                        </tr>

                        <tr><td>
                        {value.bpi.GBP.code}
                        </td>
                        <td>{value.bpi.GBP.symbol}</td>

                        <td>{value.bpi.GBP.rate}</td>
                        </tr>
                </tbody>
            </table>
}
        </div>
    )
}

export default Currency
