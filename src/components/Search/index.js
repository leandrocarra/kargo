import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import IconSeach from '@material-ui/icons/Search';
import MenuCollaps from '@material-ui/icons/MenuOpen';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PersonIcon from '@material-ui/icons/Person';

import {
  SearchContainer,
  SearchContent,
  SearchIcon,
  Input
} from './styles';

import { ButtonActionOnlyIcon } from '~/components/Buttons/styles'
import { useCollapseDesktop } from '~/hooks/useCollapseMenus'

const useStyles = makeStyles({
  withBorder: {
    border: '1px solid #FA8C15',
    transition: 'all .200s ease-in-out',
    width: '50%'
  },
  withoutBorder: {
    border: '1px solid #EBEDF2',
    transition: 'all .200s ease-in-out',
    width: '40%'
  },
  MenuIconCollapseToClose: {
    transition: 'all .5s ease-in-out',
    //transform: 'rotateY(0deg)',
    color: '#FA8C15',
    transformStyle: 'preserve-3d',
    marginRight: '20px',
    cursor: 'pointer'
  },
  MenuIconCollapseToOpen: {
    transition: 'all .5s ease-in-out',
    color: '#FA8C15',
    marginRight: '20px',
    cursor: 'pointer',
    //transform: 'rotateY(180deg)',
    transformStyle: 'preserve-3d',
  },
  iconLogoff: {
    color: '#FA8C15',
    position: 'absolute',
    right: '30px',
    cursor: 'pointer'
  },
  profile: {
    color: '#FA8C15',
    position: 'absolute',
    right: '70px',
    cursor: 'pointer'
  }
});

function Search() {
  const classes = useStyles();
  const { handleCollapse, collapseInDesktop } = useCollapseDesktop();
  const [hasValue, setHasValue] = useState('');
  const [inFocu, setInFocu] = useState(false);
  
  const handleChange = (event) => {
    setHasValue(event.target.value)
  }

  const handleBtnCollapse = () => {
    collapseInDesktop
      ? handleCollapse('openDesktop')
      : handleCollapse('closeDesktop')
  }

  return (
    <SearchContainer>
      {/* <MenuCollaps
        className={
          collapseInDesktop
            ? `${classes.MenuIconCollapseToOpen}`
            : `${classes.MenuIconCollapseToClose}`
        }
        onClick={() => handleBtnCollapse()}
      /> */}
      <SearchContent className={
        (inFocu || hasValue !== '')
          ? `${classes.withBorder}`
          : `${classes.withoutBorder}`
      }>
        {(hasValue === '' && !inFocu) && 
          <SearchIcon>
            <IconSeach style={{ fontSize: 20 }}/>
          </SearchIcon>
        }
        <Input
          type='text'
          value={hasValue}
          placeholder='procurar'
          onChange={handleChange}
          onFocus={() => setInFocu(true)}
          onBlur={() => setInFocu(false)}
        />
        {(inFocu || hasValue !== '') && 
          <ButtonActionOnlyIcon>
             <IconSeach style={{ fontSize: 20 }}/>
          </ButtonActionOnlyIcon>
        }
      </SearchContent>
      <i className={classes.profile}>
        <PersonIcon />
      </i>
      <i className={classes.iconLogoff}>
        <PowerSettingsNewIcon />
      </i>
    </SearchContainer>
  );
}

export default Search;