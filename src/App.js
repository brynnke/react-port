import React, {useState} from "react";
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
const [currentCategory, setCurrentCategory] = useState(categories[1])

function renderComponent() {
  
}
    return (
      <div>
      
        <main>
          <Header></Header>
          <About></About>
          <Footer></Footer>
        </main>
      </div>
    );
  }

  export default App;
