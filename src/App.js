import { useState } from "react";
import './index.css'


function App() {
const [weight, setWeight] = useState(0)
const [height, setHeight] = useState(0)
const [bmi, setBmi] = useState("")
const [message, setMessage] = useState("")



let calcBmi=(e)=>{
  e.preventDefault()

  if(weight === 0 || height === 0) {
    alert ("Lütfen Boy ve Kilonusu Giriniz")
  }else {
    let bmi = ((weight) / (height*height))
    setBmi(bmi.toFixed(1))

    if (bmi < 18.4) {
      setMessage("İdeal Kilonun Altındasınız")
    } else if (bmi >= 18.4 && bmi < 24.9){
      setMessage("Kilonuz ideal, Formunuzu korumaya devam edin.")
    } else if (bmi > 24.9) {
      setMessage("İdeal Kilonun Üzerindesiniz")
    }

  }
}


 let imgSrc;

if (bmi < 1) {
  imgSrc = null
} else {
  if (bmi <18.4 ){
    imgSrc = "/img/1.jpg"
  } else if  (bmi >= 18.4 && bmi < 24.9){
    imgSrc = "/img/human-thumb.jpg"
  }else{
    imgSrc="/img/2.jpg"
  }
} 





let reload = () => {
  window.location.reload()
}

  return (
    <div className="app">
   <div className="container">
    <h2 className="center">BOY-KİLO ORAN</h2>
    <form onSubmit={calcBmi} >
      <div>
        <label>Kilo( ör:80)</label>
        <input value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Boy (ör: 1.75)</label>
        <input value={height} onChange={(e) => setHeight(e.target.value)}/>
      </div>
      <div>
        <button className="btn" type="submit">Hesapla</button>
        <button onClick={reload} className="btn btn-outline" type="submit">Reset</button>
      </div>
    </form>
    <div className="center">
      <h3>Boy Kilo İndeksiniz: {bmi}</h3>
      <p>{message}</p>
    </div>
    <div className="img-container" >
      <img src={imgSrc} alt="" ></img>
    </div>
   </div>
    </div>
  );
}

export default App;
