import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, ScrollView, Image, Alert } from "react-native";
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
                method: 'get',
                url: '/validateuser',
                data: {
                    CPF: '733.056.560-18',
                    Password: '123123123'
                }
            };

            callApi(config)
                .then(function (response) {
                    console.log(response)
                    if(response.status == 200){
                        navigation.navigate('Home')
                    }
                })
                .catch(function (error) {
                    console.log('error', error);
                });
        } catch (err) {
            console.log(err);
        }

        navigation.navigate('Home')
    }

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