import styled from 'styled-components';
import {blue_feature, gray_markup} from '~/styles/Colors';

export const HeaderContainer = styled.section`
  overflow: hidden;
  margin: 30px 0px;
  display: flex;
  cursor: pointer;
`;

export const HeaderContent = styled.section`
  display: flex;
  align-items: center;
  overflow: hidden;
  img {
    border-radius: 50%;
    border: 2px solid ${gray_markup};
    width: 40px;
    height: 40px;
    float: left;
  }
  p {
    color: ${blue_feature};
    margin-left: 10px;
  }
`;

export const HeaderNav = styled.section`
  position: absolute;
  right: 10px;
`;