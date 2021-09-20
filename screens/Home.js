import React, { useState } from 'react';
import { Text} from 'react-native';

function Button(props){
  const handclick = () => props.clickfn(props.incrementValue);
  return(
    <button style={{fontSize: '15px', margin: '5px'}} onClick={handclick}>+{props.incrementValue}</button>
  )
}

function Display(props){
  return(
    <div style={{alignItems: 'center', justifyContent:'center'}}><h1>{props.message}</h1></div>
  )
}

function Home(){
  const [counter, setcounter] = useState(10);
  const increment = (valueIncrement) => setcounter(counter+valueIncrement);
  return(
    <div>
      <Button clickfn={increment} incrementValue={1}/>
      <Button clickfn={increment} incrementValue={5}/>
      <Button clickfn={increment} incrementValue={10}/>
      <Button clickfn={increment} incrementValue={100}/>
      <Button clickfn={increment} incrementValue={1000}/>
      <Button clickfn={increment} incrementValue={10000}/>
      <Button clickfn={increment} incrementValue={100000}/>
      <Display message={counter} />
    </div>
  )
}

export default Home;