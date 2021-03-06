import styled from 'styled-components';
import {
  white,
  green_area,
  red_area,
  blue_feature,
  yellow_markup
} from '../../../styles/Colors';

export const StatusBoxContainer = styled.div`
  margin-bottom: 5px;
  clear: both;
  ul {
    overflow: hidden;
    height: 80px;
    padding: 20px 30px;
    border-radius: 8px;
    color: ${white};
    font-weight: 700;
    font-size: 14px;
    filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
  }
  .pendente {
    background-color: ${yellow_markup};
  }
  .atrasado {
    background-color: ${red_area};
  }
  .em_rota, .Planeado {
    background-color: ${blue_feature};
  }
  .finalizado {
    background-color: ${green_area};
  }
`;

export const StatusBoxSpot = styled.li`
  width: 16%;
  height: 40px;
  display: flex;
  justify-content: center; 
  align-items:  center;
  text-align: center; 
  float: left;
  overflow: hidden;
  letter-spacing: .5px;
  cursor: pointer;
  line-height: 21px;
`;
export const StatusBoxSpotCheck = styled.li`
  width: 4%;
  height: 40px;
  display: flex;
  justify-content: left; 
  align-items:  center;
  text-align: center; 
  float: left;
  overflow: hidden;
  `;
