import React from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Logo from "../assets/Logo.png";
import { Feather } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native'

export default function Detail() {
  const navigation = useNavigation();

  function navigateToDetail(){
    navigation.navigate('Detail')
  }

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

      <FlatList
        style={styles.incidentList }
        data={[1,2]}
        keyExtractor={incident =>String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>Ong:</Text>
            <Text style={styles.incidentValue}>APAD </Text>
            <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
              <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
