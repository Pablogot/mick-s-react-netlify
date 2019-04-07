import React from 'react';
import styled from '@emotion/styled';

const ContainerBox = ({ children }) => {
  const StyledBox = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  `;
  return (
    <StyledBox>{children}</StyledBox>
  );
};


export default ContainerBox;
