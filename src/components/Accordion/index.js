import React, {useState} from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import BoxContent from '~/components/BoxContent';

import { AccordionContainer, AccordionArrow } from './styles'

function Accordion({children, title}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = (isOpen) => {
    setIsOpen(!isOpen)
  }

  return (
    <AccordionContainer>
      <BoxContent title={title}>
        <AccordionArrow onClick={() => handleIsOpen(isOpen)}>
          <span className={isOpen ? 'up' : 'down'}>
            <KeyboardArrowDownIcon />
          </span>
        </AccordionArrow>
        <div className={isOpen ? 'open' : 'closed'}>
          {children}
        </div>
      </BoxContent>
    </AccordionContainer>
  );
}

export default Accordion;