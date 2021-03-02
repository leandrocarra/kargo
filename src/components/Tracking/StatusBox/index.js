import React, {useState} from 'react';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import {StatusBoxContainer, StatusBoxSpot, StatusBoxSpotCheck} from './styles';
import { useTagToPrint } from '~/hooks/useTags';

function StatusBox({
  status,
  numeroGuia,
  refCliente,
  refExterna,
  destinatario,
  createAt,
  atualizado,
}) {
  const [ isChecked, setIsChecked ] = useState(false);
  const { addTag, deleteTag } = useTagToPrint();

  const handleCheckBox = () => {
    setIsChecked(!isChecked)
    if (!isChecked) {
      addTag(numeroGuia)
    } else {
      deleteTag(numeroGuia)
    }
  };
  return (
    <StatusBoxContainer>
      <ul className={status}>
        <StatusBoxSpotCheck onClick={handleCheckBox}>
          {isChecked 
            ? <CheckBoxIcon />
            : <CheckBoxOutlineBlankIcon />
          }
        </StatusBoxSpotCheck>
        <StatusBoxSpot>{numeroGuia}</StatusBoxSpot>
        <StatusBoxSpot>{refCliente}</StatusBoxSpot>
        <StatusBoxSpot>{refExterna}</StatusBoxSpot>
        <StatusBoxSpot>{destinatario}</StatusBoxSpot>
        <StatusBoxSpot>
          {createAt}<br />
          16:15:08
        </StatusBoxSpot>
        <StatusBoxSpot>
          {atualizado}<br />
          16:15:08
        </StatusBoxSpot>
        <StatusBoxSpot>{status}</StatusBoxSpot>
      </ul>
    </StatusBoxContainer>
  );
}

export default StatusBox;