import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Box, Anchor } from 'grommet'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const StyledFooter = styled.footer`
      list-style: none;
      padding: 0 5% 20px 5%;
      width: auto;
      display: flex;
      flex-flow: column;
      margin-top: 100px;
    `
const StyledNavItems = styled(Anchor)`
  color: #000;
  display: flex;
  flex-flow: row nowrap;
  text-decoration: none;
  font-family: Helvetica, sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
`

const social = [
  {
    name: 'facebook',
    image: facebook,
    url: 'https://facebook.com'
  },
  {
    name: 'twitter',
    image: twitter,
    url: 'https://twitter.com'
  },
  {
    name: 'instagram',
    image: instagram,
    url: 'https://instagram.com'
  },
  {
    name: 'vimeo',
    image: vimeo,
    url: 'https://vimeo.com'
  },
]

const Footer = class extends React.Component {
  render() {
    return (
      <StyledFooter>
        <img
            src={logo}
            alt="Mick Smith real estate logo"
            style={{ width: '14em', height: '10em', alignSelf: 'center' }}
          />
        <Box direction="row" justify="between">
          <div>
          {
          this.props.items.map( ({ label , to }) =>(
            <StyledNavItems key={to} href={to} size="medium" height="100%" margin={{"left": "small"}}>
            {label}
            </StyledNavItems>
          ))
          }
          </div>
          <div>
            {
              social.map(({ name, image, url }) => (
                <a key={name} title={name} href={url}>
                  <img
                    src={image}
                    alt={name}
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              ))
            }
            </div>
        </Box>
      </StyledFooter>
    )
  }
}

export default Footer
