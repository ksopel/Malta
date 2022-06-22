import React, {useState} from "react";
import pick1 from "../images/1.jpg";
import pick2 from "../images/2.jpg";
import pick3 from "../images/3.jpg";
import Carousel from 'react-bootstrap/Carousel'


function ControlledCarousel() {
            const [index, setIndex] = useState(0);

            const handleSelect = (selectedIndex, e) => {
                setIndex(selectedIndex);
            };

            return (
                <>

                <Carousel fade
                          interval={5000}
                          activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel"
                            src={pick1}
                            alt="Malta"
                        />
                        {/*<Carousel.Caption>*/}
                        {/*    <h3>First slide label</h3>*/}
                        {/*    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                        {/*</Carousel.Caption>*/}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel"
                            src={pick2}
                            alt="Malta"
                        />

                        {/*<Carousel.Caption>*/}
                        {/*    <h3>Second slide label</h3>*/}
                        {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                        {/*</Carousel.Caption>*/}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel"
                            src={pick3}
                            alt="Malta"
                        />

                        {/*<Carousel.Caption>*/}
                        {/*    <h3>Third slide label</h3>*/}
                        {/*    <p>*/}
                        {/*        Praesent commodo cursus magna, vel scelerisque nisl consectetur.*/}
                        {/*    </p>*/}
                        {/*</Carousel.Caption>*/}
                    </Carousel.Item>
                </Carousel>
                </>
            );

}
export default ControlledCarousel;