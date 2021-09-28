import React from 'react';
import classNames from 'classnames';

import '../assets/styles/components/Search.scss';

const Search = ({ isHome }) => {
  const mainTitleText = '¿Qué quieres ver hoy?';
  const mainPlaceholderText = 'Buscar...';

  const inputStyle = classNames('input', {
    isHome,
  });

  return (
    <section className="main">
      <h2 className="main__title">{ mainTitleText }</h2>
      <input type="text" className={inputStyle} placeholder={mainPlaceholderText} />
    </section>
  );
};

export default Search;
