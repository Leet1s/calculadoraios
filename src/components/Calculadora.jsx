import React, { useState } from 'react'
import './Calculadora.css'
import Container from '@mui/material/Container'

export default function Calculadora() {

    const[num,setNum]=useState(0);
    const[Numantigo,setNumantigo]=useState(0);
    const[Operador,setOperador]=useState();

    function inputNum(e){
        var input=e.target.value
        if(num===0){
            setNum(input)
        }else{
            setNum(num + input)
        }
        
        
    
    }

    function limpar(){
        setNum(0)
    }

    function porcentagem(){
        setNum(num / 100)
    }

    function mudarvalor(){
        setNum(num * -1)
    }

    function calcular(){
        if(Operador === "/"){
            setNum(Numantigo / num)
        } else if(Operador === "+"){
            setNum(Number(Numantigo) + Number(num))
        }else if(Operador === "x"){
            setNum(Numantigo * num)
        } else if(Operador === "-"){
            setNum(Numantigo - num)
        }
       
    }

    function operar(e){
        var operadorinput=e.target.value
        
        setOperador(operadorinput)
        setNumantigo(num)
        setNum(0)
    }


  return (
    <Container maxWidth="xs">
    <div className='envelopar'>
        <h1 className='resultado'>{num}</h1>
        <button onClick={limpar} className='cinza'>AC</button>
        <button onClick={mudarvalor} className='cinza'>+/-</button>
        <button onClick={porcentagem} className='cinza'>%</button>
        <button onClick={operar} value="/" className='laranja'>÷</button> 
        <button onClick={inputNum} value={7}>7</button>
        <button onClick={inputNum} value={8}>8</button>
        <button onClick={inputNum} value={9}>9</button>
        <button onClick={operar} value="x" className='laranja'>x</button>
        <button onClick={inputNum} value={4}>4</button>
        <button onClick={inputNum} value={5}>5</button>
        <button onClick={inputNum} value={6}>6</button>
        <button onClick={operar} value="-" className='laranja'>-</button>
        <button onClick={inputNum} value={1}>1</button>
        <button onClick={inputNum} value={2}>2</button>
        <button onClick={inputNum} value={3}>3</button>
        <button onClick={operar} value="+" className='laranja'>+</button>
        <button onClick={inputNum} value={0} className='duplo'>0</button>
        <button onClick={inputNum} value={"."}>,</button>
        <button onClick={calcular} className='laranja'>=</button>
        
    </div>
    </Container>
  )
}

