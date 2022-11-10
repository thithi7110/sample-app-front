import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react'
import SampleComposition from "./SampleComposition";

const CustomComponentB = (props: any) => {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');

  useEffect(() => {
    console.log('LOG:I am CustomComponentB.');
  }, [])

  const onChangeA = (e:ChangeEvent<HTMLInputElement>) =>{
    setValueA(e.target.value)
  }
  const onChangeB = (e:ChangeEvent<HTMLInputElement>) =>{
    setValueB(e.target.value)
  }

  return (
    <>
      <SampleComposition childprop={props} value={valueA + valueB}>
        <input value={valueA} onChange={onChangeA}/>
        <input value={valueB} onChange={onChangeB}/>
      </SampleComposition>
    </>
  )
}

export default CustomComponentB;