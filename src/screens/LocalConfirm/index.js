import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import Fazendeiro from '../../assets/images/fazendeiro.png'

const LocationPermissionScreen = () => {
    const [accept, setAccept] = useState(false)
    const navigation = useNavigation()

    const acceptPermissions = async () => {
        Geolocation.getCurrentPosition()
        await AsyncStorage.setItem('localAccept', JSON.stringify({result: 'true'}));
        setAccept(true)
    }

    useEffect(() => {
        if (accept) {
            navigation.navigate('Home')
        }
    }, [accept])

    return (
        <LinearGradient colors={['#003f9d', '#0073f9', '#70a134']} style={styles.container}>
            <Text style={styles.text}>O aplicativo requer o uso da sua localização, aceite para prosseguir.</Text>
            <Text style={[styles.text, { marginTop: 5 }]}>Com a permissão de acesso à localização podemos fornecer informações mais precisas sobre o clima local.</Text>

            <Image
                source={Fazendeiro}
                style={styles.image}
                resizeMode='contain'
            />

            <TouchableOpacity style={styles.buttom} onPress={() => acceptPermissions()}>
                <Text style={styles.textButtom}>Aceitar</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

export default LocationPermissionScreen;
