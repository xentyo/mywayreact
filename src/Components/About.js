import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Components
import Content from './global/Content';

class About extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
      };
    render() {
        const { children } = this.props;
        return (
            <div className="About">
            <Content body={children}/>
            </div>
        );
    }
}

export default About;