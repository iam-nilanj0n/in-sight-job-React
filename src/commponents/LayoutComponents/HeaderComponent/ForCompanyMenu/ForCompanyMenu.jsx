import React, { useContext } from 'react';
import './ForCompanyMenu.css';

const ForCompanyMenuContext = React.createContext(false);

export default function ForCompanyMenu() {

    const showForCompanyMenu = useContext(ForCompanyMenuContext)
    return (
        <div className='ForCompanyMenu-Container'>
            {showForCompanyMenu && (
                <div className='ForCompanyMenu'>

                    <div className="ForCompanyMenu-column">
                        <p>Why Job Sight</p>
                        <p>Pricing</p>
                        <p>Post a Free Job</p>
                        <p>Knowledge Base</p>
                    </div>

                </div>
            )}
        </div>
    )
}

export {ForCompanyMenuContext};
