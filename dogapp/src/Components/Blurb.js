
import blurb1 from "../images/blurb1.jpg"
import blurb2 from "../images/blurb2.jpg"
import blurb3 from "../images/blurb3.jpg"
import blurb4 from "../images/blurb4.jpg"
const blurbStyle = {
    width: "300px",
    height: "100%",
}


function Blurb() {
    return (
        <section className="content__blurb container ">
            <div className="d-flex flex-wrap row ">
                <div className="blurb col mt-3" style={blurbStyle}>
                    <img src={blurb1} className="w-100" border="2" alt="pick" />
                    <h2 className="text-center" >Malta</h2>
                    <p className="text-center">Animi commodi ea, error explicabo obcaecati porro suscipit. Animi eaque facilis fuga illo
                        inventore neque nihil quas quo repellendus?</p>
                </div>
                <div className="blurb col mt-3" style={blurbStyle}>
                    <img src={blurb2} className="w-100" border="2" alt="pick" />
                    <h2 className="text-center">Gozo</h2>
                    <p className="text-center">Animi commodi ea, error explicabo obcaecati porro suscipit. Animi eaque facilis fuga illo
                        inventore neque nihil quas quo repellendus?</p>
                </div>
                <div className="blurb col mt-3" style={blurbStyle}>
                    <img src={blurb3} className="w-100" border="2" alt="pick"/>
                    <h2 className="text-center">Comino</h2>
                    <p className="text-center">Animi commodi ea, error explicabo obcaecati porro suscipit. Animi eaque facilis fuga illo
                        inventore neque nihil quas quo repellendus?</p>
                </div>
                <div className="blurb col mt-3" style={blurbStyle}>
                    <img src={blurb4} className="w-100" border="2" alt="pick"/>
                    <h2 className="text-center">Read more</h2>
                    <p className="text-center">Animi commodi ea, error explicabo obcaecati porro suscipit. Animi eaque facilis fuga illo
                        inventore neque nihil quas quo repellendus?</p>
                </div>
            </div>
        </section>
    )
}
export default Blurb;