import React from 'react';
import './tutorialgmail.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TutorialGmail extends React.Component {

    render() {
        return (
            <div>                    
                Tutorial para o Gmail:
                <div className="iconeG">
                    <FontAwesomeIcon icon={['fab', 'google' ]} size="6x" />
                </div>
            </div>
        );
    }
}