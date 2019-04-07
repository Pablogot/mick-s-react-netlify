import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

import { Box, Paragraph } from 'grommet';

const FeatureGrid = ({ gridItems }) => (
  <Box direction="row-responsive">
    {gridItems.map(item => (
      <Box  key={item.text} pad="medium" margin="medium" round="small" animation="fadeIn" width="large">
        <Box>
          <PreviewCompatibleImage imageInfo={item} />
        </Box>
        <Paragraph>{item.text}</Paragraph>
      </Box>
    ))}
  </Box>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
