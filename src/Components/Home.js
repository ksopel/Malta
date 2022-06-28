import "../scss/main.scss"
import DrawerAppBar from "./Header";
import Blurb from "./Blurb";
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledCarousel from "./Carousel";
import Footer from "./Footer";

function Main() {
    return (
        <div>
            <DrawerAppBar/>
            <ControlledCarousel/>
            <Blurb/>
            <Footer/>
        </div>
    );
}

export default Main;
