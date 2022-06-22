import {Button, Form} from "react-bootstrap";
import "../scss/form.scss"


function FormContact() {

    const formStyle = {
        width: "400px",
        height: "100%",
        fontWeight: "bold",

    }


    return (

        <Form id="form" style={formStyle} className="container d-flex flex-column bg-light p-3 mb-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Your message</Form.Label>
                <Form.Control as="textarea" rows={3}/>
            </Form.Group>
            <Button className="button" type="submit">
                Send
            </Button>
        </Form>
    )
}
    export default FormContact;