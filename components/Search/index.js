import Styles from '../../styles/Componentes/Search/Search.module.scss';

import SearchIcon from '@material-ui/icons/Search'

function Search() {
  return (
    <div className={Styles.search__container}>
      <i className={Styles.search__icon}>
        <SearchIcon style={{ fontSize: 20 }}/>
      </i>
      <input type='text' placeholder='Encontrar minha encomenda'/>
    </div>
  );
}

export default Search;