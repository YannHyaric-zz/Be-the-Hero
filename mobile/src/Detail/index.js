import React from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Logo from "../assets/Logo.png";
import { Feather } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native'

export default function Detail() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} />
        <TouchableOpacity>
          <Feather name='arrow-left' size={28} color='#e02041' />
        </TouchableOpacity>
      </View>
      <View style={styles.incident}>
      <Text style={[styles.incidentProperty,{marginTop:0}]}>Ong:</Text>
            <Text style={styles.incidentValue}>APAD </Text>
      </View>
      <View syle={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o heroi!</Text>
        <Text style={styles.heroDesc}>Contato:</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={()=>{}}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={()=>{}}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}
