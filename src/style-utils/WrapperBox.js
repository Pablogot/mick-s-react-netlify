import React from 'react'
import { Box } from 'grommet'
import styled from 'styled-components'

const WrapperBox = ({ children }) => {
  const StyledBox = styled(Box)`
    width: calc( 100% - 20%);
  `
  return (
    <StyledBox>{children}</StyledBox>
  )
}


export default WrapperBox
