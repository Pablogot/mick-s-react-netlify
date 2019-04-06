import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Grid, Box, Button, Heading, Paragraph } from 'grommet'
import { Inspect, Home } from 'grommet-icons';
import styled from 'styled-components'


import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
// Style Utils
import ContainerBox from '../style-utils/ContainerBox'
import TopBox from '../style-utils/TopBox'
import WrapperBox from '../style-utils/WrapperBox'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const StyledTopBox = styled(Box)`
    margin: 0 3rem;
    border: .5rem solid #ffffff;
    background: rgba(0, 0, 0, 0.15);
  `
  const StyledHeading = styled(Heading)`
    color: white;
    line-height: 1;
    padding: 0.25em;
    font-weight: 200;
    text-transform: uppercase;
  `
  const StyledSubHeading = styled(Heading)`
    color: white;
    line-height: 1;
    padding: 0.25em;
    font-weight: 400;
  `
  const StyliedButton = styled(Button)`
    max-width: 250px;
  `
  const WideParagraph = styled(Paragraph)`
    width: 1200px !important;
  `
  return(
    <>
      <TopBox image={ !!image.childImageSharp ? image.childImageSharp.fluid.src : image }>
        <StyledTopBox>
          <StyledHeading alignSelf="center" size="medium">{title}</StyledHeading>
          <StyledSubHeading alignSelf="center" size="small">{subheading}</StyledSubHeading>
        </StyledTopBox>
      </TopBox>
      <ContainerBox>
        <WrapperBox>
          <Heading size="medium" style={{maxWidth: 'unset'}}>{mainpitch.title}</Heading>
          <WideParagraph size="xlarge" margin="none"  alignSelf="center">{mainpitch.description}</WideParagraph>
          <Heading size="large">{heading}</Heading>
        </WrapperBox>
        <WrapperBox>
          <WideParagraph size="medium" alignSelf="center">{description}</WideParagraph>
          <Box margin="medium" justifyContent="center">
            <Features gridItems={intro.blurbs} />
          </Box>
        </WrapperBox>
        <StyliedButton
            icon={<Home />}
            label="My Listings"
            alignSelf="center"
            fill={false}
            href="/products"
          />
        <WrapperBox>
          <Heading size="medium">Latest stories</Heading>
          <Box margin="medium" justifyContent="center">
            <BlogRoll />
          </Box>
        </WrapperBox>
        <StyliedButton
            icon={<Inspect />}
            label="More posts"
            alignSelf="center"
            fill={false}
            href="/blog"
          />
      </ContainerBox>
    </>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}


export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
