import React from 'react';
import { Box } from 'grommet';
import styled from '@emotion/styled';

const WrapperBox = ({ children }) => {
  const StyledBox = styled(Box)`
    width: calc( 100% - 20%);
    max-width: 1100px;
  `;
  return (
    <StyledBox>{children}</StyledBox>
  );
};


export default WrapperBox;
