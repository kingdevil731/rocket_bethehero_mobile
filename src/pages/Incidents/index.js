import React, {useEffect, useState} from 'react';
// icon, styles, logo
import {Feather} from "@expo/vector-icons";
import styles from './styles';
//import intl from 'intl';
import logoImg from '../../assets/logo.png';
// components/elements
import { FlatList } from 'react-native-gesture-handler';
import { Image, View, Text, TouchableOpacity } from "react-native";
//navigation to move between screens*
import {useNavigation} from '@react-navigation/native';
// api
import api from '../../services/api';

export default function Incidents() {
    const navigation = useNavigation();
    const [dados, setDados] = useState([]);
    const [total, setTotal] = useState("0");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      loadIncidents();
    }, []);

    async function loadIncidents(){
      if(loading){
        return;
      }
      if(total > 0 && dados.length === total){
        return;
      }
      setLoading(true);
      const response = await api.get(`incidents?page=${page}`);
      setDados([...dados, ...response.data]);
      setTotal(response.headers["x-total-count"]);
      setPage(page + 1);
      setLoading(false);
    };
    

    function navigateToDetails(incident){
      navigation.navigate('Detail', {incident});
    }

        return (
          <View style={styles.container}>
            <View style={styles.header}>
              <Image source={logoImg} />
              <Text style={styles.headerText}>
                Total de{" "}
                <Text style={styles.headerTextBold}>{total} casos</Text>.
              </Text>
            </View>
            <Text style={styles.title}>Bem Vindo!</Text>
            <Text style={styles.description}>
              Escolha um dos casos abaixo e salve o dia.
            </Text>

            <FlatList
              style={styles.incidentsList}
              data={dados}
              onEndReached={loadIncidents}
              onEndReachedThreshold={0.2}
              keyExtractor={(incident) => String(incident.id)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: incident }) => (
                <View style={styles.incident}>
                  <Text style={styles.incidentProperty}>ONG:</Text>
                  <Text style={styles.incidentValue}>{incident.name}</Text>
                  <Text style={styles.incidentProperty}>Caso:</Text>
                  <Text style={styles.incidentValue}>
                    {incident.description}
                  </Text>
                  <Text style={styles.incidentProperty}>Valor:</Text>
                  <Text style={styles.incidentValue}>
                    {Intl.NumberFormat("pt-pt", {
                      style: "currency",
                      currency: "MZN",
                    }).format(incident.value)}
                  </Text>

                  <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={() => navigateToDetails(incident)}
                  >
                    <Text style={styles.detailsButtonText}>
                      Ver mais detalhes
                    </Text>
                    <Feather name="arrow-right" size={16} color="#E02041" />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        );
}