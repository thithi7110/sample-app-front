import React, { ReactNode, useEffect, useState } from 'react'

type propsType = {
  children:ReactNode,
  childprop?:any,
  value?:string
}

const SampleComposition = (props:propsType) => {
  const [errormessage,setErrormessage] = useState('');
  const [value,setValue] = useState(props.value);

  useEffect(()=>{
    //初回時にログを出すとか・・
    console.log('LOG:I am parent.');
  },[])
  useEffect(()=>{
    setValue(props.value);
  },[props.value])

  const onBlur = () =>{
    //blur時に必須チェックするとか・・・
    if(!!props.childprop && !!props.childprop.required){
      console.log('LOG:Child is required!!');

      if(!value){
        setErrormessage('★必須入力エラー(value未設定）')
      }else{
        setErrormessage('')
      }
    }
  }
  
  return (
    <fieldset onBlur={onBlur}>
      <legend>Parent</legend>
      {props.children}
      <p>{errormessage}</p>
    </fieldset>
  )
}

export default SampleComposition;