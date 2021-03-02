import styled from 'styled-components';

export const AccordionContainer = styled.section`
  width: 100%;
  overflow: hidden;
  .closed {
    height: 0;
    overflow: hidden;
    transition: height .233s ease-in-out;
  }
  .open {
    height: 400px;
    overflow: hidden;
    transition: height .233s ease-in-out;
    padding-bottom: 30px;
  }
`;

export const AccordionArrow = styled.i`
  float: right;
  margin-top: -50px;
  width: 80px;
  height: 30px;
  text-align: right;
  .up {
    svg {
      transform: rotate(180deg);
      transition: all .233s ease-in-out;
    }
  }
  .down {
    svg {
      transform: rotate(0deg);
      transition: all .233s ease-in-out;
    }
  }
`;

