import React from 'react';
// components
import { View, Text, Image, Linking } from 'react-native';
//icon
import { Feather } from "@expo/vector-icons";
//styles
import styles from './styles';
// logo
import logoImg from "../../assets/logo.png";
// 
import { useNavigation, useRoute } from "@react-navigation/native";
// butao
import { TouchableOpacity } from 'react-native-gesture-handler';
// handler do launcher de email*
import * as MailComposer from 'expo-mail-composer';

export default function Details() {
    const route = useRoute();
    const incident = route.params.incident;
    const navigation = useNavigation();
    const message = `Olá ${incident.name}, gostaria de ajudar no caso "${incident.description}" com o valor de ${Intl.NumberFormat("pt-pt", {
              style: "currency",
              currency: "MZN",
            }).format(incident.value)} `;


    function navigateBack(){
        navigation.navigate("Incidents");
    }

    function sendEmail(){
        MailComposer.composeAsync({
          subject: `Heroi do caso: ${incident.name}`,
          recipients: [`${incident.email}`],
          body: message,
        });
    }
    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg} />
          <TouchableOpacity style={styles.detailsButton} onPress={navigateBack}>
            <Feather name="arrow-left" size={28} color="#E02041" />
          </TouchableOpacity>
        </View>
        <View style={styles.incident}>
          <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
          <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
          <Text style={styles.incidentProperty}>Caso:</Text>
          <Text style={styles.incidentValue}>{incident.description}</Text>
          <Text style={styles.incidentProperty}>Valor:</Text>
          <Text style={styles.incidentValue}>
            {Intl.NumberFormat("pt-pt", {
              style: "currency",
              currency: "MZN",
            }).format(incident.value)}
          </Text>
        </View>
        <View style={styles.contactBox}>
          <Text style={styles.contactBoxTitle}>Salve o dia!</Text>
          <Text style={styles.contactBoxTitle}>Seja o herói desse caso.</Text>
          <Text style={styles.contactBoxInfo}>Entre em contato:</Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
              <Text style={styles.actionText}>Whatsapp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} onPress={sendEmail}>
              <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}