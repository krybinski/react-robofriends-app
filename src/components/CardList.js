import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          );
        })
      }
    </div>
  );
};

CardList.propTypes = {
  robots: PropTypes.arrayOf.isRequired
};

export default CardList;
