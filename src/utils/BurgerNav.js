import React from 'react';
import { Menu } from 'grommet-icons';

const BurgerNav = ({handler}) => <Menu size="medium" onClick={handler} />;

export default BurgerNav;