import React from 'react';
import { Box } from 'grommet';
import { css, cx } from 'emotion';
import styled from '@emotion/styled';


const WrapperBoxSkewed = ({ background, children }) => {
    
  const StyledBox = styled(Box)`
    width: 100vw;
    margin: 10vw 0;
    background: ${background};
    flex-flow: column;
    align-items: center;
  `;
  const StyledBoxContent = styled(Box)`
    margin: 5vw 0;
    width: calc( 100% - 20%);
    max-width: 1100px;
  `;
  const StyledSvg = styled.svg`
    width: 100%;
    height: 7vw;
  `;
  return (
    <StyledBox justify="center">
      <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="white" points="0,100 100,0 0,0"/>
      </StyledSvg>
      <StyledBoxContent>
        {children}
      </StyledBoxContent>
      <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="white" points="0,100 100,0 100,100"/>
      </StyledSvg>
    </StyledBox>
  );
};


export default WrapperBoxSkewed;