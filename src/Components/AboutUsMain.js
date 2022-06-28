import "../scss/main.scss"
import DrawerAppBar from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import About from "./About";

function AboutUsMain() {
    return (
        <div>
            <DrawerAppBar/>
            <About/>
            <Footer/>
        </div>
    );
}

export default AboutUsMain;