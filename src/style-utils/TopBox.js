import React from 'react'
import { Box } from 'grommet'
import styled from 'styled-components'

const TopBox = ({ image, children }) => {
  const StyledBox = styled(Box)`
    background-image: url(${image});
    background-position: top left;
    background-attachment: fixed;
    height: 80vh;
    display: flex;
    justify-content: center;
  `
  return (
    <Box>
      <StyledBox>{children}</StyledBox>
    </Box>
  )
}

export default TopBox

