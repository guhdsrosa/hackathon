import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, ScrollView } from "react-native";

import styles from './styles'

const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <ScrollView style={styles.Container}>
            <Text style={styles.Logo}>LOGO</Text>

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

            <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}>Logar</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Login;