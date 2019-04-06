import React, {Consumer} from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg';
import { ResponsiveContext } from 'grommet';

import BurgerNav from '../utils/BurgerNav';
import NavContent from '../utils/NavContent';
import NavWrapper from '../style-utils/NavWrapper';





const Navbar = class extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: false,
    };
    this.toggleHamburger.bind(this);
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState({ active: !this.state.active });
  }

  render() {
 

    return (
      <ResponsiveContext.Consumer>
        {(size) => (
          <>
            <NavWrapper size={size}>
              <Link to="/" className="navbar-item" title="Logo">
                <img
                  src={logo}
                  alt="Mick Smith real estate logo"
                  style={{ width: '10em'}}
                />
              </Link>
              {
                size === 'small' ?
                  <BurgerNav handler={this.toggleHamburger}/>
                  : 
                  <NavContent direction="row" items={this.props.items} />
              }
            </NavWrapper>
            {
              size === 'small' && 
                this.state.active &&
                  <NavContent direction="column" items={this.props.items} />
            }
          </>
        )}
      </ResponsiveContext.Consumer>
    );
  }
};

export default Navbar;
