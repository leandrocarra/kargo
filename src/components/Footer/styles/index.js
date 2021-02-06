import styled from 'styled-components';

export const FooterContent = styled.div`
  overflow: hidden;
  margin-top: 110px;
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
