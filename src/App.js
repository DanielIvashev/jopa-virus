import React from 'react';
import './App.css';
import FirstSection from "./containers/firstSection/firstSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SecondSection from "./containers/secondSection/secondSection";
import ThirdSection from "./containers/thirdSection/thirdSection";

function App() {
  return (
    <div className="App">
      <FirstSection/>
      <SecondSection/>
        <ThirdSection/>
    </div>
  );
}

export default App;
