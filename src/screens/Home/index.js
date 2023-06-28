import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, RefreshControl, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import { SelectList } from 'react-native-dropdown-select-list'

import ClimaApi from '../../services/api/Clima/api'
import DolarApi from '../../services/api/Dolar/api'
import axios from "axios";

import styles from "./styles";

const Home = () => {
    const navigation = useNavigation()
    const [user, setUser] = useState({})
    const [positon, setPosition] = useState(null)
    const [climaResponse, setClimaResponse] = useState(0)

    const [selected, setSelected] = useState('Temperatura 2 metros');
    const [optionSelect, setOptionSelect] = useState('temperature_2m');

    const data = [
        { key: '1', value: 'Temperatura 2 metros' },
        { key: '2', value: 'Umidade Relativa' },
        { key: '3', value: 'Probabilidade de Precipitação' },
        { key: '4', value: 'Evapotranspiração' },
        { key: '5', value: 'Velocidade do vento' }
    ]

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

    const ClimaTempoTemperatura = async () => {
        try {
            var config = {
                method: 'get',
                url: `https://api.open-meteo.com/v1/forecast?latitude=${positon?.coords.latitude}&longitude=${positon?.coords.longitude}&hourly=temperature_2m&forecast_days=1`
            }
            await axios(config)
                .then(function (response) {
                    const result = response.data.hourly.temperature_2m
                    const _result = result[hours]
                    setClimaResponse(`${_result}ºc`)
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (err) {
            console.log(err);
        }
    }

    const ClimaTempoUmidade = async () => {
        try {
            var config = {
                method: 'get',
                url: `https://api.open-meteo.com/v1/forecast?latitude=${positon?.coords.latitude}&longitude=${positon?.coords.longitude}&hourly=relativehumidity_2m&forecast_days=1`
            }
            await axios(config)
                .then(function (response) {
                    const result = response.data.hourly.relativehumidity_2m
                    const _result = result[hours]
                    setClimaResponse(`${_result}%`)
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (err) {
            console.log(err);
        }
    }

    const ClimaTempoProbabilidade = async () => {
        try {
            var config = {
                method: 'get',
                url: `https://api.open-meteo.com/v1/forecast?latitude=${positon?.coords.latitude}&longitude=${positon?.coords.longitude}&hourly=precipitation_probability&forecast_days=1`
            }
            await axios(config)
                .then(function (response) {
                    const result = response.data.hourly.precipitation_probability
                    const _result = result[hours]
                    setClimaResponse(`${_result}%`)
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (err) {
            console.log(err);
        }
    }

    const ClimaTempoEvapotrans = async () => {
        try {
            var config = {
                method: 'get',
                url: `https://api.open-meteo.com/v1/forecast?latitude=${positon?.coords.latitude}&longitude=${positon?.coords.longitude}&hourly=evapotranspiration&forecast_days=1`
            }
            await axios(config)
                .then(function (response) {
                    const result = response.data.hourly.evapotranspiration
                    const _result = result[hours]
                    setClimaResponse(`${_result}mm`)
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (err) {
            console.log(err);
        }
    }

    const ClimaTempoVelocidade = async () => {
        try {
            var config = {
                method: 'get',
                url: `https://api.open-meteo.com/v1/forecast?latitude=${positon?.coords.latitude}&longitude=${positon?.coords.longitude}&hourly=windspeed_10m&forecast_days=1`
            }
            await axios(config)
                .then(function (response) {
                    const result = response.data.hourly.windspeed_10m
                    const _result = result[hours]
                    setClimaResponse(`${_result}km/h`)
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
                    setValorDolar(parseFloat(response.data.USDBRL.ask))
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (err) {
            console.log(err)
        }
    }

    const exitPress = () => {
        Alert.alert('Deseja realmente sair?', 'Ao concordar você irá deslogar de sua conta.', [
            { text: 'Mudei de ideia' },
            { text: 'Sim', onPress: () => clearAsyncStorage() }
        ])
    }

    const clearAsyncStorage = async () => {
        AsyncStorage.clear();
        navigation.navigate('Login')
    }

    const onRefresh = () => {
        setRefreshing(true);

        setSelected('Temperatura 2 metros')
        CotacaoDolar()

        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    useEffect(() => {
        Geolocation.getCurrentPosition(info => setPosition((info)))
    }, [])

    useEffect(() => {
        if (selected == 'Temperatura 2 metros') {
            ClimaTempoTemperatura()
        }

        if (selected == 'Umidade Relativa') {
            ClimaTempoUmidade()
        }

        if (selected == 'Probabilidade de Precipitação') {
            ClimaTempoProbabilidade()
        }

        if (selected == 'Evapotranspiração') {
            ClimaTempoEvapotrans()
        }

        if (selected == 'Velocidade do vento') {
            ClimaTempoVelocidade()
        }
    }, [selected])

    useEffect(() => {
        ClimaTempoTemperatura()
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
                <TouchableOpacity style={styles.exitButtom} onPress={() => exitPress()}>
                    <Text style={styles.exitText}>Sair</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginHorizontal: 15}}>
                <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    save="value"
                    placeholder="Temperatura 2 metros"
                    search={false}
                    dropdownTextStyles={{ color: '#141414', fontSize: 16, fontWeight: '300' }}
                    inputStyles={{ color: '#141414', fontSize: 16, fontWeight: '300' }}
                />
            </View>

            {climaResponse != 0 && valorDolar != null ?
                <>
                    <View style={styles.climaContainer}>
                        <Text style={styles.climaText}>{`${climaResponse}`}</Text>
                        <Text style={[styles.dollarText, { fontSize: 13, paddingVertical: 0 }]}>{`${selected}, horário das ${hours}:00 horas`}</Text>
                    </View>

                    <Text style={styles.dollarText}>{`Valor do dolar: R$${valorDolar.toFixed(2)}`}</Text>
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

            <Text style={[styles.cardText, { color: '#00000070', marginTop: 0, fontWeight: '400' }]}>Valor do dolar retirado da{'\n'}awesomeapi.com.br</Text>
        </ScrollView>
    )
}

export default Home;