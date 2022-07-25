import React, {useEffect} from "react";
import { capitalizeFirstLetter } from "../../utilis/helpers.js";

function Nav(props) {
    const {
        catagories = ["About", "Contact", "Resume", "Portfolio"],
        setCurrentCategory,
        currentCategory,
    } = props;

    const handleClick = (item) => {
        console.log(item);
        return item;
    };
    
    return (
        <header className="flex-row px-1">
            <h2> 
                <a data-testid="link" href="/">
                    <span role='img' aria-label="flower">🌼 </span> Brynn Kiloran!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-test-id="about" href="#about">
                            ABOUT ME
                        </a>
                    </li>
                    <li className={"mx-2"}>
                        <span onClick={( )=> handleClick('Contact')}>
                            CONTACT ME
                        </span>
                    </li>
                    {catagories.map((category) => (
                        <li
                        className={`mx-1 ${
                            currentCategory.name === category.name
                        }`}
                        key={category.name}>
                            <span 
                                onClick={() => {
                                    setCurrentCategory(category);
                                }}
                                >
                                    {capitalizeFirstLetter(category.name)}
                                </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );

}

export default Nav;