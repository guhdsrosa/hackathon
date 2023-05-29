import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';

import ClimaApi from '../../services/api/Clima/api'
import DolarApi from '../../services/api/Dolar/api'

import styles from "./styles";

const Home = () => {
    const navigation = useNavigation()
    
    const [climaVariavel, setClimaVariavel] = useState(null)
    const [climaData, setClimaData] = useState({})
    const [climaResponse, setClimaResponse] = useState([])
    const [valorDolar, setValorDolar] = useState(false)
    const [refreshing, setRefreshing] = useState(false);
    let hours = new Date().getHours();

    /*const Clima = async () => {
        try {
            var config = {
                method: 'get',
                url: '/ncep-gfs'
            };

            ClimaApi(config)
                .then(function (response) {
                    console.log('Clima: ', response.data);
                    if (response.status == 200) {
                        setClimaVariavel(response.data)
                        ClimaVariavel()
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (err) {
            console.log(err);
        }
    }*/

    const ClimaVariavel = async () => {
        try {
            var config = {
                method: 'get',
                url: `/ncep-gfs/tmpsfc`
            };

            ClimaApi(config)
                .then(function (response) {
                    console.log('ClimaVariavel: ', response.data[0]);
                    if (response.status == 200) {
                        setClimaData(response.data[0])
                        //ClimaTempo()
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (err) {
            console.log(err);
        }
    }

    const ClimaTempo = async () => {
        try {
            var config = {
                method: 'get',
                url: `/ncep-gfs/tmpsfc/${climaData}/-45.9471/-21.4294`,
            };

            ClimaApi(config)
                .then(function (response) {
                    //const result = response.data
                    //const horas = hours

                    //if (horas == 0) {
                    //    horas == 24
                    //}
                    //console.log('ClimaTempo: ', response.data);

                    if (response.status == 200) {
                        setClimaResponse(response.data)

                    }


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

        setClimaVariavel(null)
        ClimaTempo()
        CotacaoDolar()

        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    useEffect(() => {
        ClimaVariavel()
        CotacaoDolar()
    }, [])

    useEffect(() => {
        ClimaTempo()
    }, [climaData])

    useEffect(() => {
        if (hours === 0) {
            hours = 24;
        }

        for (let i = 0; i < climaResponse.length; i++) {
            const result = climaResponse[i];
            const horasApi = parseInt(result.horas);

            if (horasApi > hours) {
                if (climaVariavel === null) {
                    setClimaVariavel(result);
                    console.log('RES', result);
                    break;
                }
            }
        }
    }, [climaResponse])

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
                <Text style={styles.welcomeText}><Text style={[styles.welcomeText, { fontWeight: 'bold' }]}>Bem vindo,</Text> {'\n'}Nome</Text>
            </View>
            {climaVariavel != null && valorDolar != null ?
                <>
                    <View style={styles.climaContainer}>
                        <Text style={styles.climaText}>{`${climaVariavel.valor}ºc`}</Text>
                        <Text style={[styles.dollarText, { fontSize: 17, paddingVertical: 0 }]}>{`Horário das ${climaVariavel.horas}:00`}</Text>
                    </View>

                    <Text style={styles.dollarText}>{`Cotação do dolar: R$${valorDolar.toFixed(2)}`}</Text>
                </>
                :
                <ActivityIndicator size={25} color="#ffa500" style={{ paddingTop: 10 }} />
            }

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CalcSafra')}>
                <Text style={styles.cardText}>Calcular previsão de Safra</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <Text style={styles.cardText}>Calcular sementes por hectares</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <Text style={styles.cardText}>Calculo de foliar</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Home;