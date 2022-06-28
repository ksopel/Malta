import "../scss/main.scss"
import DrawerAppBar from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Form";
import Footer from "./Footer";

function FormMain() {
    return (
        <div>
            <DrawerAppBar/>
            <Form/>
            <Footer/>
        </div>
    );
}

export default FormMain;