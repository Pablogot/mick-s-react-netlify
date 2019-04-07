import React from 'react';
import { Box } from 'grommet';
import styled from '@emotion/styled';

const TopBox = ({ image, children }) => {
  const StyledBox = styled(Box)`
    background-image: url(${image});
    background-position: top left;
    background-attachment: fixed;
    background-size: cover;
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
  `;
  return <StyledBox animation="fadeIn">{children}</StyledBox>;
};

export default TopBox;

