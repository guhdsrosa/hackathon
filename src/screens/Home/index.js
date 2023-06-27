import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, RefreshControl, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';

import ClimaApi from '../../services/api/Clima/api'
import DolarApi from '../../services/api/Dolar/api'
import axios from "axios";

import styles from "./styles";

const Home = () => {
    const navigation = useNavigation()
    const [user, setUser] = useState({})
    const [positon, setPosition] = useState(null)
    const [climaResponse, setClimaResponse] = useState(0)

    const [valorDolar, setValorDolar] = useState(false)
    const [refreshing, setRefreshing] = useState(false);
    let hours = new Date().getHours();

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('user');
            if (value !== null) {
                setUser(JSON.parse(value))
            }
        } catch (e) {
            // error reading value
        }
    };

    const ClimaTempo = async () => {
        try {
            var config = {
                method: 'get',
                url: `https://api.open-meteo.com/v1/forecast?latitude=${positon?.coords.latitude}&longitude=${positon?.coords.longitude}&hourly=temperature_2m&forecast_days=1`
            };

            axios(config)
                .then(function (response) {
                    console.log('response', response.data.hourly.temperature_2m)
                    const result = response.data.hourly.temperature_2m

                    console.log('result', result[hours])
                    const _result = result[hours]
                    setClimaResponse(_result)
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (err) {
            console.log(err);
        }
    }

    const CotacaoDolar = async () => {
        try {
            var config = {
                url: 'USD-BRL'
            }

            DolarApi(config)
                .then(function (response) {
                    setValorDolar(parseFloat(response.data.USDBRL.high))
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (err) {
            console.log(err)
        }
    }

    const onRefresh = () => {
        setRefreshing(true);

        ClimaTempo()
        CotacaoDolar()

        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    useEffect(() => {
        Geolocation.getCurrentPosition(info => setPosition((info)))
    },[])

    useEffect(() => {
        //ClimaVariavel()
        ClimaTempo()
        CotacaoDolar()
        getData()
    }, [positon])

    return (
        <ScrollView
            style={styles.Container}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >
            <View style={styles.header}>
                <Text style={styles.welcomeText}><Text style={[styles.welcomeText, { fontWeight: 'bold' }]}>Bem vindo,</Text> {'\n'}{user.name}</Text>
            </View>
            {climaResponse != 0 && valorDolar != null ?
                <>
                    <View style={styles.climaContainer}>
                        <Text style={styles.climaText}>{`${climaResponse}ºc`}</Text>
                        <Text style={[styles.dollarText, { fontSize: 13, paddingVertical: 0 }]}>{`Temperatura de 2 metros, horário das ${hours}:00 horas`}</Text>
                    </View>

                    <Text style={styles.dollarText}>{`Cotação do dolar: R$${valorDolar.toFixed(2)}`}</Text>
                </>
                :
                <ActivityIndicator size={25} color="#ffa500" style={{ paddingTop: 10 }} />
            }

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('calcSafra')}>
                <Text style={styles.cardText}>Calcular previsão de Safra</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('calcHectare')}>
                <Text style={styles.cardText}>Calcular sementes por hectares</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('calcFoliar')}>
                <Text style={styles.cardText}>Calculo de foliar</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Home;