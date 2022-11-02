import { ChangeEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios, { AxiosResponse } from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [value,setValue] = useState<string>('')
  const [address,setAddress] = useState<string>();

  const getZipCode = (zp:(number | string)) =>{
    axios.create({
      baseURL:"http://localhost:8000",
      headers:{
        "Content-type":"application/json",
      }
    }).get(
      `zipcode?zipcode=${zp}`
    ).then((res:AxiosResponse<any,any>) =>{
      console.log(res);
      let adr = res.data["results"][0]["address1"]+
      res.data["results"][0]["address2"]+
      res.data["results"][0]["address3"];
      console.log(adr);
      setAddress(adr);
    })
  }

  const onChange = (e:ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.value)
  }

  return (
    <div className="App">
      <label htmlFor='zipcode'>郵便番号：</label>
      <input data-cy='zipcode' name="zipcode" value={value} onChange={onChange}/>
      <button data-cy='getaddressbutton' onClick={()=>getZipCode(value)}>住所取得</button>
      <p data-cy='address' >{address}</p>
    </div>
  )
}

export default App
