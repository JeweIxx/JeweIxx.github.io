import React from 'react'
import { useState, useEffect } from 'react'

function Calculator() {
    
    const [calc, setCalc] = useState("")
    const [oldAnswer, setOldAnswer] = useState<string[]>([])
    const [calculated, setCalculated] = useState(true)
    
    const ops : string[] = ['/','*','+','-','.']

    const updateCalc = (value: string) => {
        if (
            ops.includes(value) && calc === '' ||
            ops.includes(value) && ops.includes(calc.slice(-1)
            ) 
        ) {
            return
        }
        setCalculated(false)
        setCalc(calc + value)
        console.log(calc)

    }

    function resetResult() {
        setCalc("") 
        setOldAnswer([])
        console.log(oldAnswer)
      }

    const calculate = () => {
        
        const evaluatedCalc : string = eval(calc)
        setCalc(evaluatedCalc.toString())
        console.log(eval(calc))
        
        
        console.log(oldAnswer)
        
    }

    useEffect(function() {
        setOldAnswer((prevoldanswer  => [
            ...prevoldanswer, calc

        ]))
    },[calc])

    //changed function name to actually mean somethnig
    function hideCalculated(){
        setCalculated(true)
    }
   

  return (
    <div className="calculator">
      <svg width="24" className="historyButton"height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.7143 0C8.03429 0 3.42857 4.47778 3.42857 10H0L4.44571 14.3222L4.52571 14.4778L9.14286 10H5.71429C5.71429 5.7 9.29143 2.22222 13.7143 2.22222C18.1371 2.22222 21.7143 5.7 21.7143 10C21.7143 14.3 18.1371 17.7778 13.7143 17.7778C11.5086 17.7778 9.50857 16.9 8.06857 15.4889L6.44571 17.0667C8.30857 18.8778 10.8686 20 13.7143 20C19.3943 20 24 15.5222 24 10C24 4.47778 19.3943 0 13.7143 0ZM12.5714 5.55556V11.1111L17.4629 13.9333L18.2857 12.5889L14.2857 10.2778V5.55556H12.5714Z" fill="#D4D4D2"/>
      </svg>
        <div className="topPart">
          <div className='result'>
            <h2 className='gray'>{calculated && oldAnswer[oldAnswer.length-2]}</h2>  
            <h1 >{calc || "0"}</h1>
          </div>
        </div>
        <div className="buttons">
            <button 
                className='button first3' 
                onClick={resetResult} 
                > 
                AC
            </button>

            <button   
                className='button first3' >
                    C
            </button>

            <button    
                className='button first3' >
                %
            </button>

            <button   
                className='button operators'
                onClick={() => updateCalc("/")} >
                    /
            </button>

            <button   
                className='button'
                onClick={() => updateCalc("1")}>
                    1
            </button>

            <button   
                className='button'
                onClick={() => updateCalc("2")}>
                2
            </button>
            <button   
                className='button'
                onClick={() => updateCalc("3")}>
                3
            </button>

            <button   
                className='button operators'
                onClick={() => updateCalc('*')}>
                    X
            </button>

            <button   
                className='button'
                onClick={() => updateCalc("4")}>
                    4
            </button>
            <button   
                className='button'
                onClick={() => updateCalc("5")}>
                    5
            </button>
            <button   
                className='button'
                onClick={() => updateCalc("6")}>
                    6
            </button>
            <button   
                className='button operators'
                onClick={() => updateCalc("-")} >
                    -
            </button>
            <button   
                className='button'
                onClick={() => updateCalc("7")}>
                    7
            </button>
            <button   
                className='button'
                onClick={() => updateCalc("8")}>
                8
            </button>
            <button   
                className='button'
                onClick={() => updateCalc("9")}>
                    9
            </button>
            <button   
                className='button operators' 
                onClick={() => updateCalc("+")}>
                +
            </button>

            <button   
                className='button' 
                id="zero"
                onClick={() => updateCalc("0")}
                >
                    0
            </button>
            <button 
                className="button"
                onClick={() => updateCalc(".")}>
                .
            </button>

            
            <button   
                className='button operators' 
                onClick={function(event){ calculate(); hideCalculated()}}
                >
                =
                </button>
        </div>
      
      </div>
  )
}

export default Calculator