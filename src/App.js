import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Views/Home';
import About from './Views/About';
import IndexNavbar from './Components/IndexNavbar';
import Contactus from './Components/Contactus'
import Footer from './Components/Footer';
import Hwd from './Components/Hwd';
import OurServices from './Views/OurServices'
import Impact from './Views/Impact';
import Career from './Views/Career';
import Portfolio from './Views/Portfolio';
import ITsupport from './Views/ITsupport';
import Healthcare from './Views/Healthcare';
import Brainstorming from './Views/Brainstorming';
import PortfolioDetails from './Views/PortfolioDetails';
import Viewmore from './Views/Viewmore';
import Home2 from './Views/Home2';
import Blogs from './Views/Blogs';
import Partners from './Views/Partners';
import Events from './Views/Events';
import Team from './Views/Team';
import CaseStudies from './Views/CaseStudies';
import Solutions from './Views/Solutions';
import Overview from './Views/Overview';
import Features from './Views/Features';
import WebDesign from './Views/WebDesign';
import Ecommerce from './Views/Ecommerce';
import Development from './Views/Development';
import CRM from './Views/CRM';
import AppDevelopment from './Views/AppDevelopment';
import SEO from "./Views/SeoServices"
import FrontEnd from './Views/FrontEnd';
import Testimonials from './Views/Testimonials';

function App() {
  return (
    <>
      <BrowserRouter>
        <IndexNavbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path='/how-we-do' element = {<Hwd/>}/>
          <Route path='/ourservices' element = {<OurServices/>}/>
          <Route path='/ourservices/healthcare' element = {<Healthcare/>}/>
          <Route path='/brainstorming' element = {<Brainstorming/>}/>
          <Route path='/services/seo' element = {<SEO/>}/>
          <Route path='/ourservices/itsupport' element = {<ITsupport/>}/>
          <Route path='/ourservices/development' element = {<Development/>}/>
          <Route path='/ourservices/crm' element = {<CRM/>}/>
          <Route path='/impact' element = {<Impact/>}/>
          <Route path='/career' element = {<Career/>}/>
          <Route path='/portfolio' element = {<Portfolio/>}/>
          <Route path='/portfolio/appdevelopment' element = {<AppDevelopment/>}/>
          <Route path='/viewmore' element = {<Viewmore/>}/>
          <Route path='/home' element = {<Home2/>}/>
          <Route path='/blogs' element = {<Blogs/>}/>
          <Route path='/partners' element = {<Partners/>}/>
          <Route path='/events' element = {<Events/>}/>
          <Route path='/team' element = {<Team/>}/>
          <Route path='/caseStudies' element = {<CaseStudies/>}/>
          <Route path='/solutions' element = {<Solutions/>}/>
          <Route path='/overview' element = {<Overview/>}/>
          <Route path='/features' element = {<Features/>}/>
          <Route path='/ourservices/webdesign' element = {<WebDesign/>}/>
          <Route path='/e-commerce' element = {<Ecommerce/>}/>
          <Route path='/services/frontend' element = {<FrontEnd/>}/>
          <Route path='/portfolio/testimonials' element = {<Testimonials/>}/>
        </Routes> 
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;




