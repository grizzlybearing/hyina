import React from 'react';
import SphereSVG from "../SphereSVG/SphereSVG";
import i18next from "i18next";

const LangDropdown = (props) => {
    return (
        <div>
            <button className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false" background="white" color='#ffffff'  >
                <SphereSVG />
            </button>
            <ul className="dropdown-menu">
                {props.languages.map(({code, name, country_code}) => (
                    <li key={country_code}>
                        <button className="dropdown-item" onClick={() => i18next.changeLanguage(code)}>
                            <span className={`flag-icon flag-icon-${country_code} mx-2`}> </span>
                            {name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LangDropdown;