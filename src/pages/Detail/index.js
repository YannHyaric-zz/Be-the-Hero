import React from 'react';
import { useNavigation } from "@react-navigation/native"
import { Feather } from '@expo/vector-icons'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import Logo from '../assets/Logo.png'
import styles from './styles'

export default function Detail() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} />
                <TouchableOpacity onPress={() => { }}>
                    <Feather name="arrow-left" size={20} color="#E82041" />
                </TouchableOpacity>
            </View>
            <View style={styles.Incident}>
                <Text style={[styles.IncidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.IncidentValue}>SJPA</Text>

                <Text style={styles.IncidentProperty}>Caso:</Text>
                <Text style={styles.IncidentValue}>Cachorro doente</Text>

                <Text style={styles.IncidentProperty}>Valor:</Text>
                <Text style={styles.IncidentValue}>10</Text>

                <TouchableOpacity style={styles.detailsButton} onPress={() => { }}>
                    <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                    <Feather name="arrow-right" size={16} color="#E02041" />
                </TouchableOpacity>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroDescription}>Entre em contato!</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={() => { }}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actions} onPress={() => { }}>
                        <Text style={styles.actionsText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}