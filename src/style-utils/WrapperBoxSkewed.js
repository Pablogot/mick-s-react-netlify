import React from 'react';
import { Box } from 'grommet';
import { css, cx } from 'emotion';
import styled from '@emotion/styled';


const WrapperBoxSkewed = ({ background, children }) => {
    
  const StyledBox = styled(Box)`
    margin: 10vw 0;
    background: ${background};
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  `;
  const StyledBoxContent = styled(Box)`
    margin: 5vw 0;
    width: calc( 100% - 20%);
  `;
  const StyledSvg = styled.svg`
    width: 100%;
    height: 7vw;
  `;
  return (
    <StyledBox>
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