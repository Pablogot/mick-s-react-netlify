import React from 'react'
import { Box } from 'grommet'
import styled from 'styled-components'

const ContainerBox = ({ children }) => {
  const StyledBox = styled(Box)`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  `
  return (
    <StyledBox>{children}</StyledBox>
  )
}


export default ContainerBox
