import { useRef, useState } from "react";
import Product from "./Product"

function Home(){
  // state variable

  var [counter,setcounter]=useState(100);
  function f2(){
    //  alert();
    // console.log(typeof setcounter)
    setcounter(counter+10);
    
  }
  // reference variable
  var x1 = useRef();
  var x2 = useRef();
  var x3=  useRef();
  
  function f1(){
    // alert();
    // console.log(x1);
    // console.log(x2);
    var data1=x1.current.value;
    var data2=x2.current.value;
    
    // console.log(data1);
    // console.log(data2);
    x3.current.innerHTML=data1*data2;
  }
    return (<div class="container text-center">
    <div class="row">
      <div class="col">
        <Product name="watch" price="2000"></Product>
      </div>
      <div class="col">
        <Product name="cap" price="200"></Product>
      </div>
      <div class="col">
      <Product name="Bag" price="5000"></Product>
      </div>
      <div class="col">
      <h2>Reference variable</h2>
      <input type ="text" ref={x1}/>
      <input type="text" ref={x2}/>
      <button onClick={f1}>Enter</button>
      <p ref={x3}></p>
      </div>
      <div class="col">
        <h3>State variable</h3>
        {counter}
        <button onClick={f2}>Enter</button>
      </div>
    </div>
  </div>)
}
export default Home