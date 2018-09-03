import React from 'react';
import PropTypes from 'prop-types';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', border: '1px border #000000', height: '800px' }}>
      {props.children}
    </div>
  );
};

Scroll.propTypes = {
  children: PropTypes.node.isRequired
};

export default Scroll;
