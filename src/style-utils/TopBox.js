import React from 'react'
import { Box } from 'grommet'
import styled from '@emotion/styled'

const TopBox = ({ image, children }) => {
  const StyledBox = styled(Box)`
    background-image: url(${image});
    background-position: top left;
    background-attachment: fixed;
    height: 80vh;
    display: flex;
    justify-content: center;
  `
  return <StyledBox>{children}</StyledBox>
}

export default TopBox

