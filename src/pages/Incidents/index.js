import React from 'react';
import { useNavigation } from "@react-navigation/native"
import { Feather } from '@expo/vector-icons'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import Logo from '../assets/Logo.png'
import styles from './styles'

export default function Incidents() {
    const nav = useNavigation();
    function navigateToDetail() {
        nav.navigate('Detail');
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} />
                <Text style={styles.headerText}>Total de:
                    <Text style={styles.headerTextBold}> 0 casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem Vindo</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo</Text>

            <FlatList style={styles.incidentList} data={[1, 2, 3]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.IncidentProperty}>ONG:</Text>
                        <Text style={styles.IncidentValue}>SJPA</Text>

                        <Text style={styles.IncidentProperty}>Caso:</Text>
                        <Text style={styles.IncidentValue}>Gato Cego</Text>

                        <Text style={styles.IncidentProperty}>Valor:</Text>
                        <Text style={styles.IncidentValue}>20</Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>

                    </View>
                )} />
            <View style={styles.incidentList}>
                <View style={styles.incident}>
                    <Text style={styles.IncidentProperty}>ONG:</Text>
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
            </View>
        </View>
    )
}
