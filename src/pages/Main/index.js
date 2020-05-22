import React, { useState, useEffect, useCallback } from 'react';
import {Image, StatusBar, Text, View, Linking, Picker} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import moment from 'moment';
import 'moment/locale/pt-br';
import Icon from 'react-native-vector-icons/Feather';
import states from '../../utils/brasil.js';
//import formatValue from '../../utils/formatValue.js';
import api from '../../services/api';

import Loading from '../../components/Loading';
import Cards from '../../components/Card';
import Symptoms from '../../components/Symptoms';

import {
  Title
} from '../global';
import {
  Header,
  HeaderPicker,
  HeaderContainer,
  Container,
  InfoTitle,
  InfoDescription,
  HeaderTitle,
  CardContainer,
  UpdateTime,
  StateContainer,
  StateTitle,
  InfoSymptoms,
  ContainerSymptoms,
  Footer,
  SmallText,
} from './styles';

export default function Main() {
  const [loading, setLoading] = useState(true);
  const [cases, setCases] = useState([]);

  useEffect(() => {
    api.get(`/`).then(response => {
      setCases(response.data.data)
      setLoading(false);
    }).catch(() => {
      setLoading(true);
    })
}, []);

return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#473f96"
      />
      <Header style={{ elevation: 5}}>
        <HeaderContainer>
          <HeaderTitle>Covid-19</HeaderTitle>
        </HeaderContainer>
        <InfoTitle>
          Você está se sentindo doente?
        </InfoTitle>
        <InfoDescription>
          As pessoas que contraíram o vírus podem levar até 14 dias antes de apresentarem algum sintoma. Se você apresentar algum sintoma, procure atendimento médico.
        </InfoDescription>
        <Text style={{ fontSize: 11, color: '#fff', marginTop: 20}}>Fonte: Organização Mundial da Saúde (OMS)</Text>
      </Header>

      <StateContainer>
      <StateTitle>Brasil</StateTitle>
      {loading ? (
        <Loading/>
      ): (
      <CardContainer>
        <Cards title="Casos Confirmados" cardColor="#f4a641">
          { cases.confirmed }
        </Cards>
        <Cards title="Óbitos" cardColor="#f45959">
          { cases.deaths }
        </Cards>
        <Cards title="Suspeitos" cardColor="#473f96">
          { cases.deaths }
        </Cards>
        <Cards cardColor="#3ed26f" icon="trending-up">
          { cases.recovered }
        </Cards>
        <SmallText>Dados atualizado {moment(cases.updated_at).startOf('hour').fromNow()}</SmallText>
      </CardContainer>
      )}
      </StateContainer>         

      
      <ContainerSymptoms>
        <Symptoms/>
      </ContainerSymptoms>
      <Footer>
        <SmallText onPress={() => Linking.openURL('https://github.com/V1n1c1us')}><Icon name="github" size={9} color="#000" /> V1n1c1us</SmallText>
      </Footer>
    </Container>
  );
}