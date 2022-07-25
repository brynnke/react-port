import React, { useState } from "react";
import Nav from "../../components/Nav/index";

function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props

    return (
        <div className='header'>
            <h1>Brynn Kiloran</h1>
            <Nav
                categories={categories}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
            ></Nav>
        </div>

    );
}

export default Header;