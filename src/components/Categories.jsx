import React from 'react';

import '../assets/styles/components/Categories.scss';

const Categories = (props) => {
  const { children, title } = props;

  return (
    <div>
      <h3 className="categories__title">{title}</h3>
      {children}
    </div>
  );
};

export default Categories;
