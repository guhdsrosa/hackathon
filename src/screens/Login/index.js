import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from './styles'

const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const loginButton = () => {
        navigation.navigate('Home')
    }

    return(
        <ScrollView style={styles.Container}>
            <Text style={styles.Logo}>Hackaton</Text>

            <TextInput
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
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
            />

            <TouchableOpacity style={styles.Button} onPress={() => loginButton()}>
                <Text style={styles.ButtonText}>Logar</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Login;