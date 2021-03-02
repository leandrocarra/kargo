import React from 'react';
import PrintIcon from '@material-ui/icons/Print';

import { FloatableTagContainer, FloatableTagTitle, FloatableTagPrint } from './styles';
import { ButtonActionWithIconSmall } from '~/components/Buttons/styles';

import { useTagToPrint } from '~/hooks/useTags';

function FloatableTag() {
  const { tags } = useTagToPrint();

  return (
    <FloatableTagContainer style={
      tags.length > 0 
      ? {right:'0'} 
      : {right:'-100%'}
    }>
      <FloatableTagTitle>Imprimir etiquetas</FloatableTagTitle>
      <ul>
        {tags.map((tag) => (
          <li key={tag+1}>{tag}</li>
        ))}
      </ul>
      <FloatableTagPrint>
        <ButtonActionWithIconSmall>
          <PrintIcon /> Imprimir
        </ButtonActionWithIconSmall>
      </FloatableTagPrint>
    </FloatableTagContainer>
  );
}

export default FloatableTag;