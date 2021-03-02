import styled from 'styled-components';
import {white, blue_feature, black_text, gray_line, red_default} from '~/styles/Colors'; 

export const Container = styled.section`
  overflow: hidden;
  background-color: ${white};
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.10);
  position: absolute;
  width: 210px;
  top: 43px;
  z-index: 2;
  transition: opacity .233s linear;
`;

export const ContentInfo = styled.section`
  background-color: ${blue_feature}; 
  color: ${white};
  padding: 10px;
  h3 {
    font-size: 14px;
    letter-spacing: 1px;
    margin-bottom: 5px;
  }
  p {
    font-size: 12px;
  }
`;

export const ContentItems = styled.section`
  padding: 0 10px;
  color: ${black_text};
  font-size: 12px;
`;

export const Items = styled.section`
  cursor: pointer;
  padding: 15px 0;
  border-bottom: 1px solid ${gray_line};
  display: flex;
  align-items: center;
  transition: all .333s linear;
  .person {
    color: ${blue_feature};
  }
  .logout {
    color: ${red_default};
  }
  svg {
    font-size: 20px;
    margin-right: 5px;
  }
  &:hover {
    color: ${blue_feature}
  }
  &:last-child {
    border-bottom: 0 none;
  }
`;

