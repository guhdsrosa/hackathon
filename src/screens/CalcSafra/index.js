import React, { useState } from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

const CalcSafra = () => {

    const [result, setResult] = useState(false)

    const Calcular = () => {
        setResult(!result)
    }

    return (
        <ScrollView style={styles.Container}>
            <Text style={styles.title}>Previsão de Safra</Text>

            <TextInput
                //onChangeText={'setEmail'}
                //value={''}
                placeholder="Peso dos grãos por planta"
                placeholderTextColor={'#787878'}
                style={styles.TextInput}
                keyboardType="decimal-pad"
            />

            <TextInput
                //onChangeText={'setEmail'}
                //value={''}
                placeholder="Numero de planta por hectare"
                placeholderTextColor={'#787878'}
                style={styles.TextInput}
                keyboardType="decimal-pad"
            />

            <TouchableOpacity style={styles.card} onPress={() => Calcular()}>
                <Text style={styles.cardText}>Calcular</Text>
            </TouchableOpacity>

            {result &&
                <>
                    <Text style={styles.resultText}>Resultado:</Text>
                    <TextInput
                        //onChangeText={'setEmail'}
                        //value={''}
                        placeholder="Resultado"
                        placeholderTextColor={'#787878'}
                        style={styles.TextInput}
                        keyboardType="decimal-pad"
                    />
                </>
            }

        </ScrollView>
    )
}

export default CalcSafra;