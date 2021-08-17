import React from 'react';

import '../assets/styles/components/Search.scss';

const Search = () => {
  const mainTitleText = '¿Qué quieres ver hoy?';
  const mainPlaceholderText = 'Buscar...';

  return (
    <section className="main">
      <h2 className="main__title">{ mainTitleText }</h2>
      <input type="text" className="input" placeholder={mainPlaceholderText} />
    </section>
  );
};

export default Search;
