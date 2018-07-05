import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Content from './global/Content';

class About extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
      };
    render() {
        const { body } = this.props;
        const { children } = this.props;
        return (
            <div className="About">
               {body}
            <Content body={children}/>
            </div>
        );
    }
}

export default About;