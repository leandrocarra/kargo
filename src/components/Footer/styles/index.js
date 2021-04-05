import styled from 'styled-components';

export const FooterContent = styled.div`
  background-color: #FFF;
  position: fixed;
  width: 80vw;
  bottom: 0;
  padding: 0 30px;
  z-index: 2;
`;

export const FooterContainer = styled.ul`
  width: 100%;
`;

export const FooterItem = styled.li`
  float: left;
  margin-right: 30px;
  font-size: 12px;
  border-radius: 4px;
  color: $color_black_text;
  transition: background .255s;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: $color_gray_markup;
    opacity: .8;
  }
  &:last-child{
    float: right;
    margin-right: 0;
  }
`;
