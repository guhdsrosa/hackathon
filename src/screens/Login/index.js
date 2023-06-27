import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, TextInput, ScrollView, Image, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import logo from '../../assets/images/techagro.png'

import callApi from '../../services/api/LogIn/api'

import styles from './styles'

const Login = () => {
    const navigation = useNavigation()
    const [cpf, setCpf] = useState(null)
    const [senha, setSenha] = useState(null)

    const loginPress = async () => {
        try {
            var config = {
                method: 'post',
                url: '/validateuser',
                data: {
                    CPF: cpf,
                    Password: senha
                }
            };
            //CPF: '733.056.560-18',
            //Password: '123123123'

            callApi(config)
                .then(function (response) {
                    console.log(response.data)
                    if (response.status == 200) {
                        navigation.navigate('Home')
                        AsyncStorage.setItem('user', JSON.stringify(response.data));
                    } else {
                        Alert.alert('Erro', 'CPF ou senha podem estar incorretos')
                    }
                })
                .catch(function (error) {
                    console.log('error', error);
                    Alert.alert('Erro', 'Ocorreu algum erro ao efetuar o login', [
                        {
                            text: 'Tentar Novamente',
                        }
                    ])
                });
        } catch (err) {
            console.log(err);
        }
    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('user');
            if (value !== null) {
                navigation.navigate('Home')
            }
        } catch (e) {
            console.log('error async', e)
        }
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <ScrollView style={styles.Container}>
            <Image
                source={logo}
                style={styles.Logo}
                resizeMode="contain"
            />

            <TextInput
                onChangeText={setCpf}
                value={cpf}
                placeholder="CPF"
                placeholderTextColor={'#787878'}
                style={styles.TextInput}
            />

            <TextInput
                onChangeText={setSenha}
                value={senha}
                placeholder="Senha"
                keyboardType="numeric"
                placeholderTextColor={'#787878'}
                style={styles.TextInput}
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.Button} onPress={() => loginPress()}>
                <Text style={styles.ButtonText}>Logar</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Login;