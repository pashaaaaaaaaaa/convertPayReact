import react from "react";
import './main.css'

export default function Main(){
    let oneValue = document.querySelector('.inp')
    let twoValue = document.querySelector('.inp2')
    let str1 = document.querySelector('.money-change')
    let str2 = document.querySelector('.money-change')
    
    let a  = "USD"
    let b  = "RUB"
    
    const componentDidMount=()=>{
        fetch(`https://api.exchangerate.host/convert?from=${a}&to=${b}&amount=${oneValue.value}`)
        .then((response) => {
        
          return response.json(); 
        })
        .then((data) => {
            console.log(data)
            twoValue.value = data.result
            
            let currensNov = data.info.rate//тут присваеваю актуальные курс
            
            str1.innerHTML = `1 ${a} = ${currensNov } ${b}`
            str2.innerHTML = `1 ${b} = ${oneValue.value / currensNov } ${a}`
            
        })
    }
    
    const clickBtn=()=>{
        // let oneBlock = document.querySelectorAll('#one .click')
        // for(let i = 0; i < oneBlock.length; i++){
        //     for(let j = 0; j < oneBlock.length; j++ )  {
        //         oneBlock[j].style.background = "white"
        //         oneBlock[j].style.color = ""
        //         oneBlock[i].style.background = "#833AE0"
        //         oneBlock[i].style.color = "white"
        //         a = oneBlock[i].innerHTML 
                
        //         if(oneBlock[i].classList.contains('selection')){//проверка что элемент которые мы нажали что это селект . чтобы попросить значение
        //             a = oneBlock[i].value 
        //         } 
        //         fetch(`https://api.exchangerate.host/convert?from=${a}&to=${b}&amount=${oneValue.value}`)
        //             .then((response) => {
                    
        //             return response.json(); 
                    
        //             })
        //             .then((data) => {
                    
        //             twoValue.value = data.result
                    

        //             let currensNov = data.info.rate
                    
        //             str1.innerHTML = `1 ${a} = ${currensNov } ${b}`
        //             str2.innerHTML = `1 ${b} = ${oneValue.value / currensNov } ${a}`
                    
//     }) 
// }
    
//     }
    }
    const clickBtn1=()=>{
        let twoBlock = document.querySelectorAll('#two .click')
        for(let i = 0; i < twoBlock.length; i++ ){
              for(let j = 0; j < twoBlock.length; j++ )  {
                  twoBlock[j].style.background = "white"
                  twoBlock[j].style.color = ""
                }      
                
                twoBlock[i].style.background = "#833AE0"
                twoBlock[i].style.color = "white"
                b = twoBlock[i].innerHTML 
                
                
                if(twoBlock[i].classList.contains('selection')){//проверка что элемент которые мы нажали что это селект . чтобы попросить значение
                    b = twoBlock[i].value 
                }
            }
    }
    const clickBtnTwo=()=>{
        // let c  = oneValue.value
      
        // oneValue.value = twoValue.value
  
        // twoValue.value = c
  
  
        // let d = oneBlock.value
        
  
        // oneBlock.value = twoBlock.value
  
        // twoBlock.value = d
        // console.log(d)
    }
    
    return(
        <div className="container-main">
            <h1>Конвертер валют онлайн</h1>
            <div className="block">
                <div className="block-one" id="one">
                <p>У меня есть </p>
                <div className="btn">
                    <button onClick={clickBtn} className="click">RUB</button>
                    <button onClick={clickBtn} className="click">EUR</button>
                    <button onClick={clickBtn} className="click">USD</button>
                    <button onClick={clickBtn} className="click">GBR</button>
                    <select onClick={clickBtn} className="click">BYR
                            <option  selected>BYR</option>
                            <option >EUR</option>
                            <option> CHF</option>   
                            <option>NOK</option>
                            <option>CAD</option>
                            <option>RUB</option>
                            <option>GBR</option>
                            <option>MXN</option>
                            <option>CNY</option>
                            <option>ISK</option>
                            <option>KRW</option>
                            <option>HKD</option>
                            <option>CZK</option>
                            <option>BGN</option>
                            <option>BRL</option>
                            <option>USD</option>
                            <option>IDR</option>
                            <option>SGD</option>
                            <option>PHP</option>
                            <option>RON</option>
                            <option>HUF</option>
                            <option>ILS</option>
                            <option>THB</option>
                            <option>SEK</option>
                            <option>NZD</option>
                            <option>AUD</option>
                            <option>DKK</option>
                            <option>HRK</option>
                            <option>PLN</option>
                            <option>TRY</option>
                            <option>INR</option>
                            <option>MYR</option>
                            <option>ZAR</option>
                            <option>JPY</option>
                            
                        </select>
                </div>
                <div className="answer">
                    <input  type="number"  className="inp" onChange={componentDidMount}/>
                    <p className="money-change "/>
                </div>

                </div>
                {/* ===row=== */}
                <div className="arrow" onClick={clickBtnTwo}>
                    <img src="img/row.svg"/>
                </div>
                {/* ===block 2 */}
                <div className="block-one" id="two">
                <p>Хочу приобрести</p>
                <div className="btn">
                    <button onClick={clickBtn1}>RUB</button>
                    <button onClick={clickBtn1}>USD</button>
                    <button onClick={clickBtn1}>EUR</button>
                    <button onClick={clickBtn1}>GBR</button>
                    <select onClick={clickBtn1}>BYR
                            <option  selected>BYR</option>
                            <option >EUR</option>
                            <option> CHF</option>   
                            <option>NOK</option>
                            <option>CAD</option>
                            <option>RUB</option>
                            <option>GBR</option>
                            <option>MXN</option>
                            <option>CNY</option>
                            <option>ISK</option>
                            <option>KRW</option>
                            <option>HKD</option>
                            <option>CZK</option>
                            <option>BGN</option>
                            <option>BRL</option>
                            <option>USD</option>
                            <option>IDR</option>
                            <option>SGD</option>
                            <option>PHP</option>
                            <option>RON</option>
                            <option>HUF</option>
                            <option>ILS</option>
                            <option>THB</option>
                            <option>SEK</option>
                            <option>NZD</option>
                            <option>AUD</option>
                            <option>DKK</option>
                            <option>HRK</option>
                            <option>PLN</option>
                            <option>TRY</option>
                            <option>INR</option>
                            <option>MYR</option>
                            <option>ZAR</option>
                            <option>JPY</option>
                            
                        </select>
                </div>
                <div className="answer">
                    <input  className="inp2" type="number" />
                    <p className="money-change " />

                </div>

                </div>
            </div>
        </div>
    )

}