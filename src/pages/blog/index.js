import React from 'react';
import {Grid} from 'grommet';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Grid margin="medium" justifyContent="center">
          <BlogRoll />
        </Grid>
      </Layout>
      
    );
  }
}
