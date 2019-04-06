import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './all.sass';
import useSiteMetadata from './SiteMetadata';
import { hpe } from 'grommet-theme-hpe';

import { grommet, Grommet, Box, ResponsiveContext} from 'grommet';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();

  const menuItems = [
    {
      label:'About', 
      to: '/about',
    },
    {
      label:'Blog', 
      to: 'blog',
    },
    {
      label:'Contact', 
      to: 'contact',
    },
  ];
  
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      
      <Grommet theme={hpe}>
        <Navbar items={menuItems}/>
        <Box fill>
          {children}
        </Box>
        <Footer items={menuItems}/>
      </Grommet>
    </>
  );
};

export default TemplateWrapper;
