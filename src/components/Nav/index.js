import React, {useEffect} from "react";
import { capitalizeFirstLetter } from "../../utilis/helpers.js";

function Nav(props) {
    const {
        catagories = ["About", "Contact", "Resume", "Portfolio"],
    } = props;

    const handleClick = (item) => {
        console.log(item);
        return item;
    };
    
}