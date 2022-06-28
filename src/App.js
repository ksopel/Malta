import "../src/scss/main.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import AboutUsMain from "./Components/AboutUsMain";
import FormMain from "./Components/FormMain";

function App() {
  return (

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUsMain />} />
                <Route path="/contact" element={<FormMain />} />
            </Routes>

  );
}

export default App;
