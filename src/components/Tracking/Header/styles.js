import styled from 'styled-components';

export const ContainerHeader = styled.section`
  margin-bottom: 30px;
`;

export const ContentHeader = styled.ul`
  overflow: hidden;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  svg {
    margin-right: 3px;
  }
`;

export const ItemHeader = styled.li`
  width: 13.5%;
  height: 40px;
  display: flex;
  justify-content: center; 
  align-items:  center;
  text-align: center; 
  float: left;
  overflow: hidden;
  letter-spacing: .5px;
`;

export const ItemHeaderSpecial = styled.li`
  width: 4%;
  height: 40px;
  display: flex;
  justify-content: left; 
  align-items:  center;
  text-align: center; 
  float: left;
`;