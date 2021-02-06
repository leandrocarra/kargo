import React from 'react';

import IconSeach from '@material-ui/icons/Search';

import {
  SearchContainer,
  SearchContent,
  SearchIcon,
  Input
} from './styles';

function Search() {
  return (
    <SearchContainer>
      <SearchContent>
        <SearchIcon>
          <IconSeach style={{ fontSize: 20 }}/>
        </SearchIcon>
        <Input type='text' placeholder='Encontrar minha encomenda' />
      </SearchContent>
    </SearchContainer>
  );
}

export default Search;