import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
`;

export const Header = styled.View`
  background-color: #473f96;
  height: 290px;
  padding: 20px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderPicker = styled.View`
  flex-direction: row;
  align-items: center;

  width: 130px;
  background-color: #fff;

  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const HeaderTitle = styled.Text`
  font-size: 30px;
  color: #fdfdfe;
  font-weight: bold;
`;

export const HeaderText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  color: #fdfdfe;
`;

export const InfoTitle = styled.Text`
  margin-top: 30px;
  font-size: 18px;
  color: #fdfdfe;
  font-weight: bold;
`;
export const InfoDescription = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: #fdfdfe;
`;

export const StateContainer = styled.View`
  flex: 1;
  margin-top: 10px;
`;

export const StateTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #473f96;
  text-align: center;
`;

export const CardContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SmallText  = styled.Text`
  font-size: 10px;
`;

export const ContainerSymptoms = styled.View`
  flex: 1;
  margin-top: 30px;
`;

export const Footer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;

  align-items: center;
`;