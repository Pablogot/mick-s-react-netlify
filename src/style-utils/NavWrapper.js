import React from 'react'
import { Box } from 'grommet'
import styled from '@emotion/styled'

const NavWrapper = ({ size, children }) => {
    const StyledNav = styled.nav`
    list-style: none;
    padding: 0;
    margin: 0 5%;
    width: auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    height: 50px;
  `
  const StyledContainerBox = styled(Box)`
    width: calc( 100% - ${size === 'small' ? '10%' : '20%'});
  `
  return (
    <StyledNav role="navigation" aria-label="main-navigation">
        <StyledContainerBox justify="between" direction="row" align="baseline">
            {children}
        </StyledContainerBox>
    </StyledNav>
  )
}


export default NavWrapper
