import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { ResponsiveContext, Box, Text, Anchor, Paragraph } from 'grommet'
import styled from 'styled-components'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const StyledArticle = styled.article`
      display: flex;
      flex-direction: column;
    `

    return (
      <ResponsiveContext.Consumer>
      {(size) => (
        <Box direction="row-responsive" wrap={true} justify="center">
        {
          posts &&
            posts.map(({ node: post }) => (
                <Box key={post.fields.slug} background="light-1" pad="medium" margin="2.5%" round="small" animation="fadeIn" width={ size === 'small' ? 'large' : '45%'}>
                  <article>
                    <StyledArticle>
                      <Anchor primary href={post.fields.slug} label={post.frontmatter.title} margin="small" size="large"/>
                      <Text margin="small">
                          {post.frontmatter.date}
                      </Text>
                      <Paragraph margin="small">
                        {post.excerpt}
                      </Paragraph>
                    </StyledArticle>
                    <Anchor href={post.fields.slug}  alignSelf="end" primary label="Read more →" margin="small"/>
                  </article>
                </Box>
            ))}
        </Box>
      )}
    </ResponsiveContext.Consumer>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
