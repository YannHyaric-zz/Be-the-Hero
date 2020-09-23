import React from "react";
import * as MailComposer from "expo-mail-composer";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import styles from "./styles";
import Logo from "../assets/Logo.png";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Detail() {
  let titulo = "Vazio";
  let whatsapp = "+5532999393370";
  let email = "ylhalmeida@gmail.com";
  let nome = "Yann";
  let valor = "0";
  const navigation = useNavigation();
  const message = `Ola ${nome}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Heroi do caso: ${titulo}`,
      recipients: [email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>
      <View style={styles.incident}>
        <Text style={(styles.incidentProperty, { marginTop: 0 })}>Ong:</Text>
        <Text style={styles.incidentValue}>{nome}</Text>
        <Text style={styles.incidentProperty}>Caso:</Text>
        <Text style={styles.incidentValue}>{titulo}</Text>
        <Text style={styles.incidentProperty}>Valor:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(valor)}
        </Text>
      </View>
      <View syle={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o heroi!</Text>
        <Text style={styles.heroDesc}>Contato:</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
