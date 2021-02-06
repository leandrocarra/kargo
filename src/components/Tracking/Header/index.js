import React from 'react';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import PersonIcon from '@material-ui/icons/Person';
import PublicIcon from '@material-ui/icons/Public';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import UpdateOutlinedIcon from '@material-ui/icons/UpdateOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';

import {ContainerHeader, ContentHeader, ItemHeader, ItemHeaderSpecial} from './styles';

function Header() {
  return (
    <ContainerHeader>
      <ContentHeader>
        <ItemHeaderSpecial>&nbsp;</ItemHeaderSpecial>
        <ItemHeader><InsertDriveFileOutlinedIcon />N DA GUIA</ItemHeader>
        <ItemHeader><PersonIcon />REF.CLIENTE</ItemHeader>
        <ItemHeader><PublicIcon />REF.EXTERNA</ItemHeader>
        <ItemHeader><PermContactCalendarOutlinedIcon />DESTINATÁRIO</ItemHeader>
        <ItemHeader><CreateOutlinedIcon />CRIADO EM</ItemHeader>
        <ItemHeader><UpdateOutlinedIcon />ATUALIZADO</ItemHeader>
        <ItemHeader><LocalShippingOutlinedIcon/>STATUS</ItemHeader>
      </ContentHeader>
    </ContainerHeader>
  );
}

export default Header;