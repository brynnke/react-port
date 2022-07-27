import React from "react";


function Footer() {
    return (
        <div className="footer-div">
            <footer>
                <ul>
                    <a href="mailto:kiloranb@gmail.com" target="blank">
                        <li>
                        <i class="far fa-envelope"></i>
                        </li> 
                        </a>
                    <a href="https://github.com/brynnke" target="blank">
                        <li>
                        <i class="fa-solid fa-code-branch"></i>
                        </li>  
                    </a>  
                </ul>
            </footer>
        </div>
    );
}

export default Footer;