import React from 'react';
import {Grid} from 'grommet';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

// Style Utils
import ContainerBox from '../../style-utils/ContainerBox';


export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <ContainerBox>
          <BlogRoll />
        </ContainerBox>
      </Layout>
      
    );
  }
}
