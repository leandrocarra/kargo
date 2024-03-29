import styled from 'styled-components';
import { gray_area, black_text, blue_default } from '../../../styles/Colors';

export const FormContainer = styled.div`
  width: 100%;
`;

export const FormFullLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  input, input[type=text],select, textarea {
    border-radius: 4px;
    border: 1px solid ${gray_area};
    padding: 10px 15px;
    outline: 0 none;
    font-size: 14px;
    box-sizing: border-box;
    width: 100%;
    background-color: transparent;
  }
  textarea{
    min-height: 150px;
    max-height: 150px;
    max-width: 100%;
    min-width: 100%;
  }
  label {
    margin-right: 30px;
    font-size: 14px;
    font-weight: 400;
    i {
      color: $color_red_default;
      margin-right: 5px;
    }
  }
  span {
    & + input[type=text],
    & + input[type=email],
    & + input[type=password] {
      border-color: red;
    }
  }
`;

export const FormInputCheckboxContainer = styled.div`
  overflow: hidden;
  padding: 6px 0;
  input[type=checkbox] {
    border-radius: 4px;
    border: 1px solid $color_gray_area;
    height: 20px;
    float: left;
    width: 20px;
    margin-left: 0px;
    overflow: hidden;
    & ~ label {
      font-size: 14px;
      margin-top: 7px;
      float: left;
      margin-right: 30px;
      margin-left: 5px;
      overflow: hidden;
    }
  }
`;

export const FormLabelContainer = styled.div`
  float: left;
  width: 20%;
  text-align: right;
  overflow: hidden;
`;


export const FormInputContainer = styled.div`
 float: left;
  width: 80%;
  overflow: hidden;
  position: relative;
  span {
    position: absolute;
    font-size: 12px; 
    color: red;
    bottom: -120px;
  }
`;

export const FormInputContainerFull = styled(FormInputContainer)`
  width: 100%;
  input[type=text],
  input[type=email]
  input[type=password] {
    width: 100%;
    padding-right: 10%;
  }
  i {
    position: absolute;
    right: 15px;
    top: 10px;
    svg {
      color: rgba(0,0,0, .3)
    }
  }
`;

export const FormContainerSuplier = styled(FormContainer)`
  padding-bottom: 30px;
  ${FormFullLine} {
    margin-bottom: 0px;
  }
  ${FormInputContainer} {
    background-color: #FFF;
    position: relative;
    svg {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
`;

export const FormHalfLine = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  ${FormLabelContainer}{
    width: 40%;
    padding-top: 11px;
  }
  ${FormInputContainer}{
    float: left;
    width: 60%;
    overflow: hidden;
  }
`;

export const FormSmallLine = styled.div`
  width: 50%;
  float: left;
  overflow: hidden;
  ${FormLabelContainer}{
    width: 80%;
    padding-top: 11px;
  }
  ${FormInputContainer}{
    float: left;
    width: 20%;
    overflow: hidden;
  }
`;

export const FormTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  margin: 30px 0;
  text-transform: uppercase;
`;

export const FormBottomContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

export const FormFeaturedArea = styled.div`
  /* background-color: rgba(196, 196, 196, .15); */
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 7px;
  ${FormInputContainer} {
    overflow: inherit;
    margin-top: 5px;
  }
  input {
    border: 0 !important;
  }
  span {
    position: inherit !important;
    bottom: 0 !important;
    color: ${black_text} !important;
    svg {
      position: inherit !important;
      top: -2px !important;
      right: 0 !important;
    }
  }
`;

export const DisclaimerPeriod = styled.div`
  float: left;
  margin-left: 9.5%;
  color: ${black_text}; 
  h2 {
    font-size: 16px;
    margin-bottom: 5px;
  }
  span {
    color: ${blue_default}
  }
`;