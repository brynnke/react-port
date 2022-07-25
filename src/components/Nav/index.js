import React, {useEffect} from "react";


function Nav(props) {
    const {
        catagories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title= currentCategory.name
    }, [currentCategory])
    
    return (
        <ul className='nav-list'>
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
                                    {console.log(category.name)}
                                </span>
                        </li>
                    ))}
                </ul>
        
    );

}

export default Nav;