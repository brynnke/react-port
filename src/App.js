import React, {Component, useState} from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";

  function App() {
    const [categories] = useState([
      {name:'About'},
      {name:'Portfolio'},
      {name:'Resume'},
      {name:'Contact'}
    ])
const [currentCategory, setCurrentCategory] = useState(categories[0])

const renderComponent = () => {
  switch (currentCategory.name) {
    case "About":
    return <About/>
    case "Portfolio":
    return <h1>Portfolio</h1>
    case "Resume":
    return <h1>Resume</h1>
    case "Contact":
    return <h1>Contact</h1>
    default: console.log("warning")
  }
}
    return (
      <div className='master-container'>
        <header>
          <Header
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            ></Header>
        </header>
      
        <main>
          {renderComponent()} 
          <Footer></Footer>
        </main>
      </div>
    );
  }

  export default App;
