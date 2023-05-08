import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import ClimaApi from '../../services/api/Clima/api'

const Home = () => {

    const [climaVarivel, setClimaVariavel] = useState(null)
    const [climaData, setClimaData] = useState(null)

    const Clima = async () => {
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
    }

    const ClimaVariavel = async () => {
        try {
            var config = {
                method: 'get',
                url: `/ncep-gfs/${climaVarivel}`
            };

            ClimaApi(config)
                .then(function (response) {
                    console.log('ClimaVariavel: ', response.data);
                    if (response.status == 200) {
                        setClimaData(response.data)
                        ClimaTempo()
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
                url: `/ncep-gfs/${climaVarivel}/${climaData}/-45.9471/-21.4294`,
                /*params: {
                    variavel: climaVarivel,
                    data: climaData,
                    longitude: '-45.9471',
                    latitude: '-21.4294'
                    //lat: -21.4294, long: -45.9471
                }*/
            };

            ClimaApi(config)
                .then(function (response) {
                    console.log('ClimaTempo: ', response.data);
                    if (response.status == 200) {
                        setClimaData(response.data)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        Clima()
    }, [])

    return (
        <View>
            <Text>TELA HOME</Text>
        </View>
    )
}

export default Home;