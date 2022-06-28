import {Button, Form} from "react-bootstrap";
import "../scss/form.scss"


function FormContact() {

    const formStyle = {
        width: "500px",
        height: "100%",
        fontWeight: "bold",
    }


    return (

        <div className="container-fluid m-auto custom-form bg__image">
            <Form id="form" style={formStyle} className="container__form container d-flex flex-column p-3 mb-3 mt-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="text-white">Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                    <Form.Label className="text-white">Your message</Form.Label>
                    <Form.Control as="textarea" rows={3}/>
                </Form.Group>
                <Button className="button" type="submit">
                    Send
                </Button>
            </Form>
        </div>

    )
}
    export default FormContact;