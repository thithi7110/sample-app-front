import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react'
import SampleComposition from "./SampleComposition";

const CustomComponentA = (props: any) => {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    console.log('LOG:I am CustomComponentA.');
  }, [])

  const onChange = (e:ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.value)
  }

  return (
    <>
      <SampleComposition childprop={props} value={value}>
        <div className='CustomComponentA'>
        <input value={value} onChange={onChange}/>
        </div>
      </SampleComposition>
    </>
  )
}

export default CustomComponentA;