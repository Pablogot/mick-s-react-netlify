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
  `;
  return <StyledBox
    justify="center"
    animation={{
      'type': 'fadeIn',
      'delay': 1500,
      'duration': 1000,
    }}>{children}</StyledBox>;
};

export default TopBox;

