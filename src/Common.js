import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/game1.svg";

const Common = (props) => {
    return(
    <>
    <section id='header' className="d-flex align-items-center">
    <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>{props.name}
                            <strong className="brand-name"> Heman Game Centre </strong>
                            </h1>
                        <h2 className="my-3">
                            We here sell games at a much reliable price that other big websites. 
                        </h2>
                        <div className="mt-3">
                            <NavLink to={props.visit} className="btn-buy-now">
                                {props.btname}
                                </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={props.imgsrc} alt="home image" className="image-fluid animated"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
};

    export default Common;