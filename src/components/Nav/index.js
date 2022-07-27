import React from "react";


function Nav(props) {
    const tabs = ["About","Portfolio","Contact","Resume"];
    console.log(props)
    return (
        <div className="tabs are-centered">
              <ul className='nav nav-tabs'>
        
                  {props && props.categories.map((category) => (
                        <li
                        className={`mx-1 ${
                            props.currentCategory.name === category.name
                        }`}
                        key={category.name}>
                            <span 
                                onClick={() => {
                                    props.setCurrentCategory(category);
                                }}
                                >
                                    {category.name}
                                </span>
                        </li>
                    ))}
                </ul>
        </div>
      
        
    );

}

export default Nav;