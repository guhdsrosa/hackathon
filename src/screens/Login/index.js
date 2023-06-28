import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, TextInput, ScrollView, Image, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from 'react-native-masked-text'

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

            callApi(config)
                .then(function (response) {
                    console.log(response.data)
                    if (response.status == 200) {
                        getLocal()
                        AsyncStorage.setItem('user', JSON.stringify(response.data));
                    } else {
                        Alert.alert('Erro', 'CPF ou senha podem estar incorretos')
                    }
                })
                .catch(function (error) {
                    console.log('error', error.response.data);
                    Alert.alert('Erro', 'Ocorreu algum erro ao efetuar o login', [
                        {
                            text: 'Tentar Novamente',
                        }
                    ])
                });
        } catch (err) {
            console.log(err);
        }
        //navigation.navigate('Home')
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

    const getLocal = async () => {
        try {
            const value = await AsyncStorage.getItem('localAccept');
            if (value !== null) {
                navigation.navigate('Home')
            } else {
                navigation.navigate('LocationPermissionScreen')
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

            <TextInputMask
                type={'cpf'}
                value={cpf}
                placeholder="CPF"
                onChangeText={setCpf}
                keyboardType="numeric"
                style={styles.TextInput}
                placeholderTextColor={'#787878'}
            />

            <TextInput
                onChangeText={setSenha}
                value={senha}
                placeholder="Senha"
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