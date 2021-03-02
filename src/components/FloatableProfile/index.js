import React from 'react';

import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import {Container, ContentInfo, ContentItems, Items} from './styles';

function FloatableProfile({isShow}) {
  return (
    <Container style={isShow ? {opacity: 0, height: 0} : {opacity: 1}}>
      <ContentInfo>
        <h3>OnDisc</h3>
        <p>anderson@kargo.pr</p>
      </ContentInfo>
      <ContentItems>
        <Items>
          <i className='person'>
            <PersonIcon />
          </i>
           Profile
        </Items>
        <Items>
        <i className='logout'>
          <PowerSettingsNewIcon /> 
        </i>
          Log out
        </Items>
      </ContentItems>
    </Container>
  );
} 

export default FloatableProfile;
