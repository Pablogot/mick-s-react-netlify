import React from 'react';
import {Box, Anchor} from 'grommet';
import styled from '@emotion/styled';



const NavContent = ({direction, items}) => {

  const StyledNavItems = styled(Anchor)`
    color: #000;
    display: flex;
    text-decoration: none;
    font-family: Helvetica, sans-serif;
    font-size: 0.8rem;
    margin-left: 2rem;
    font-weight: 600;
  `;
  return (
    <Box direction={direction}>
      {
        items.map( ({ label, to }) => (
          <StyledNavItems key={to} href={to} size="medium" height="100%" margin={{'left': 'small'}}>
            {label}
          </StyledNavItems>
        ))
      }
    </Box>
  );
};

export default NavContent;
