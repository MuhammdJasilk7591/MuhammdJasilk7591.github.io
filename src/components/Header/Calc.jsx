import React, { useState } from 'react'
import "./Calc.css"

const Calc = () => {
  const[display, setdisplay]=useState("");
  const handleclick=(value)=>{
    setdisplay(display+value)

  }
  const calculatorresult= ()=> {
       try{
      const result= eval(display)

      setdisplay(result)

    }catch(error){

      setdisplay('invalied entry')
    }

  }
  const cleardisplay=()=>{
    setdisplay("")
  }
  return (
    
      <div className="calc">
        <div className="section">
          <div className="display" id='display'>{display}
          </div>
          <div className="buttons">
          <div className="row">
          <button className="col" onClick={()=>{handleclick('1')}}>1</button>
          <button className="col" onClick={()=>{handleclick('2')}}>2</button>
          <button className="col" onClick={()=>{handleclick('3')}}>3</button>
          <button className="col symbol" onClick={()=>{handleclick('+')}}>+</button>
          </div>

          <div className="row">
          <button className="col" onClick={()=>{handleclick('4')}}>4</button>
          <button className="col" onClick={()=>{handleclick('5')}}>5</button>
          <button className="col" onClick={()=>{handleclick('6')}}>6</button>
          <button className="col symbol" onClick={()=>{handleclick('-')}}>-</button>
          </div>

            <div className="row">
          <button className="col" onClick={()=>{handleclick('7')}}>7</button>
          <button className="col" onClick={()=>{handleclick('8')}}>8</button>
          <button className="col" onClick={()=>{handleclick('9')}}>9</button>
          <button className="col symbol" onClick={()=>{handleclick('*')}}>*</button>
            </div>

            <div className="row">
          <button className="col" onClick={()=>{handleclick('.')}}>.</button>
          <button className="col" onClick={()=>{handleclick('0')}}>0</button>
          <button className="col" onClick={calculatorresult}>=</button>
          <button className="col symbol" onClick={()=>{handleclick('/')}}>/</button>
            </div>
            <div className="row">
              <button onClick={cleardisplay} className=" clear">Clear</button>
            </div>
          
        </div>
      </div>
      </div>
      
   
  )
}

export default Calc
