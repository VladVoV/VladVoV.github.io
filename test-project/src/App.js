import './App.css';
import Header from "./Components/Header";
import WhyUs from "./Components/Why-us";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import BriefBlock from "./Components/BriefBlock";
import FAQ from "./Components/FAQ";
import SocialMediaBlock from "./Components/SocialMediaBlock";
import PopupComponent from "./Components/PopupComponent";

function App() {
  return (
    <div className="App">
        <Header/>
        <WhyUs/>
        <Services/>
        <Projects/>
        <div className='first-combination'>
            <Contact/>
            <BriefBlock/>
        </div>
        <div className='second-combination'>
        <FAQ/>
        <SocialMediaBlock/>
        </div>
        <PopupComponent/>
    </div>
  );
}

export default App;
