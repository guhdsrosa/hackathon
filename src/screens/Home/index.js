import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';

import ClimaApi from '../../services/api/Clima/api'
import DolarApi from '../../services/api/Dolar/api'

import styles from "./styles";

const Home = () => {
    const navigation = useNavigation()
    const [climaVarivel, setClimaVariavel] = useState(null)
    const [climaData, setClimaData] = useState(false)
    const [valorDolar, setValorDolar] = useState(false)
    let hours = new Date().getHours();
    console.log('hours', hours)

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
                    const result = response.data
                    const horas = hours

                    if (horas == 0) {
                        horas == 24
                    }
                    //console.log('ClimaTempo: ', response.data);

                    if (response.status == 200) {
                        result.map((res) => {
                            const horaApi = parseInt(res.horas)
                            if (horas <= horaApi) {
                                console.log('res', res)
                            }
                        })
                        setClimaData(response.data[3])
                        console.log('ClimaTempo: ', typeof climaData);
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
                    console.log(response.data)
                    setValorDolar(response.data.USDBRL)
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        ClimaVariavel()
        CotacaoDolar()
    }, [])

    useEffect(() => {
        ClimaTempo()
    }, [climaData])

    return (
        <ScrollView style={styles.Container}>
            <View style={styles.header}>
                <Text style={styles.welcomeText}><Text style={[styles.welcomeText, { fontWeight: 'bold' }]}>Bem vindo,</Text> {'\n'}Nome</Text>
            </View>
            {climaData != false && valorDolar != false ?
                <>
                    <LinearGradient colors={['#ff8000', '#ff5e00']} style={styles.climaContainer}>
                        <Text style={styles.climaText}>{`Horas: ${climaData.horas}`}</Text>
                        <Text style={styles.climaText}>{`Tempo: ${climaData.valor}`}</Text>
                    </LinearGradient>

                    <Text style={{ color: '#141414' }}>{`Valor do dolar: ${valorDolar.high}`}</Text>
                </>
                :
                <ActivityIndicator size={25} color="#ff5e00" style={{ paddingTop: 10 }} />
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