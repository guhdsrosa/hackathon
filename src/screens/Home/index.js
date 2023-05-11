import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";

import ClimaApi from '../../services/api/Clima/api'
import DolarApi from '../../services/api/Dolar/api'

import styles from "./styles";

const Home = () => {

    const [climaVarivel, setClimaVariavel] = useState(null)
    const [climaData, setClimaData] = useState(false)
    const [valorDolar, setValorDolar] = useState(false)

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
                    console.log('ClimaTempo: ', response.data);
                    if (response.status == 200) {
                        setClimaData(response.data[3])
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
                <Text style={{ color: '#fff' }}>Bem vindo, {'\n'}nome</Text>
                <Text style={{ color: '#fff' }}>Menu</Text>
            </View>
            {climaData != false && valorDolar != false ?
                <>
                    <View>
                        <Text style={{ color: '#fff' }}>{`Horas: ${climaData.horas} Tempo: ${climaData.valor}`}</Text>
                    </View>

                    <Text style={{ color: '#fff' }}>{`Valor do dolar: ${valorDolar.high}`}</Text>
                </>
                :
                <ActivityIndicator size={25} color="#fff" style={{ paddingTop: 10 }} />
            }

            <TouchableOpacity style={styles.card}>
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