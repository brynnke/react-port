import React, { useState} from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactForm from "./components/Contact";
import Project from "./components/Project";


  function App() {
    const [categories] = useState([
      {name:'About'},
      {name:'Project'},
      {name:'Resume'},
      {name:'ContactForm'},
    ])
const [currentCategory, setCurrentCategory] = useState(categories[0])

const renderComponent = () => {
  switch (currentCategory.name) {
    case "About":
    return <About/>
    case "Project":
    return <Project />
    case "Resume":
    return <h1>Resume</h1>
    case "ContactForm":
    return <ContactForm/>
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
