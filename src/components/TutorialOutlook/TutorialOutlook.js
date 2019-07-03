import React from 'react';
import './tutorialoutlook.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TutorialOutlook extends React.Component {
    render() {
        return (
            <div>               
                Tutorial para o Outlook:
                <div className = "iconeO">
                    <FontAwesomeIcon icon={['fab', 'microsoft']} size="6x" />
                </div>                
            </div>
        );
    }
}