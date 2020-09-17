import React from "react";
import { View, Image, Text , TouchableOpacity} from "react-native";
import styles from "../Incident/styles";
import Logo from "./assets/Logo.png";
import {Feather } from '@expo/vector-icons'

export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} />
        <Text style={styles.headerText}>
          Total de <Text style={stiles.headerTextBold}>0 casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem Vindo</Text>
      <Text style={styles.description}>Selecione um caso abaixo</Text>

      <View style={styles.incidentList}>
        <View style={styles.incident}>
            <Text style={styles.incidentProperty}>Ong:</Text>
            <Text style={styles.incidentValue}>APAD </Text>
            <TouchableOpacity style={styles.detailsButton} onPress={()=>{}}>
                <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                <Feather name='arrow-right' size={16} color ='#E02041'
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
