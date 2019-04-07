import React from 'react';
import Layout from '../components/Layout';

// Style Utils
import ContainerBox from '../style-utils/ContainerBox';

const NotFoundPage = () => (
  <Layout>
    <ContainerBox>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </ContainerBox>
  </Layout>
);

export default NotFoundPage;
