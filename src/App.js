import "./scss/main.scss"
import DrawerAppBar from "./Components/Header";
import Blurb from "./Components/Blurb";
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledCarousel from "./Components/Carousel";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
       <DrawerAppBar/>
        <ControlledCarousel/>
        <Blurb/>
        <About/>
        <Form/>
        <Footer/>
    </div>
  );
}

export default App;
