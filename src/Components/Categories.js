/* Arts | Sports | Specialists */

import {Breadcrumb} from "react-bootstrap";
import React from "react";
import "bootstrap";

import PropTypes from 'prop-types';

Categories.propTypes = {

};

function Categories(props) {
    const a_style = {
        "textDecoration":"none",
        color:'#6c757d'
    }

    return (
        <div className={"relative flex text-xl w-full mt-8 justify-center md:text-4xl font-sans font-light"}>
            <nav className={"w-full p-1"}>
                <ol className={"breadcrumb justify-content-center"} >
                    <li className="breadcrumb-item"><a href="#" style={a_style}>Arts</a></li>
                    <li className="breadcrumb-item"><a href="#" style={a_style}>Sports</a></li>
                    <li className="breadcrumb-item"><a href="#" style={a_style}>Specialists</a></li>
                </ol>
            </nav>

        </div>
    );
}

export default Categories;