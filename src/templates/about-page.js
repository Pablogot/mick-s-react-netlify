import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { Heading, Image } from 'grommet';

// Style Utils
import ContainerBox from '../style-utils/ContainerBox';
import WrapperBox from '../style-utils/WrapperBox';

export const AboutPageTemplate = ({
  title, image, content, contentComponent, 
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <ContainerBox>
        <WrapperBox>
          <Image
            fit="cover"
            src={image.childImageSharp ? image.childImageSharp.fluid.src : image}
          />
          <Heading size="medium" style={{maxWidth: 'unset'}}>{title}</Heading>
          <PageContent className="content" content={content} />
        </WrapperBox>
      </ContainerBox>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
