import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import { requestData } from "./state/action-creators/action";
import {useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
       const ans = async ()=>{
            const data = await fetch(`https://run.mocky.io/v3/${process.env.REACT_APP_API_KEY}`);
              const res   = await data.json();
              console.log(res);
            dispatch(requestData(res))
          }
          ans();
  },[])
  return (
    <div className="App">
      <Header />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
