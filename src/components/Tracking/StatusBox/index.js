import React, {useState} from 'react';
import {Link} from "react-router-dom";

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
  createTime
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
        <Link to="/tracking/detail/23234234">   
          <StatusBoxSpot>{numeroGuia}</StatusBoxSpot>
          <StatusBoxSpot>{refCliente}</StatusBoxSpot>
          <StatusBoxSpot>{refExterna}</StatusBoxSpot>
          <StatusBoxSpot>{destinatario}</StatusBoxSpot>
          <StatusBoxSpot>
            {createAt}<br />
            {createTime}
          </StatusBoxSpot>
          {/* <StatusBoxSpot>
            {atualizado}<br />
            16:15:08
          </StatusBoxSpot> */}
          <StatusBoxSpot>{status}</StatusBoxSpot>
        </Link>
      </ul>
    </StatusBoxContainer>
  );
}

export default StatusBox;