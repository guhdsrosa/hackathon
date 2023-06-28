import React, { useState } from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

const CalcFoliar = () => {

    const [result, setResult] = useState(null)
    const [vazao, setVazao] = useState(null)
    const [tempTrator, setTempTrator] = useState(null)
    const [espacamentoLinha, setEspacamentoLinha] = useState(null)
    const [numBicoPul, setNumBicoPul] = useState(null)

    const Calcular = () => {
        setResult('0')

        var _result = 0
        var _vazao = vazao
        var _tempTrator = tempTrator
        var _espacamentoLinha = espacamentoLinha
        var _numBicoPul = numBicoPul

        console.log(_vazao)
        console.log(_tempTrator)
        console.log(_espacamentoLinha)
        console.log(_numBicoPul)

        _result = ((_vazao * _tempTrator * _espacamentoLinha) / 10000) / _numBicoPul
        _result = _result * 1000

        setResult(`${_result.toFixed(1).replace('.', ',')} ml/bico`)
    }

    return (
        <ScrollView style={styles.Container}>
            <Text style={styles.title}>Calculo de Adubação Foliar - Vazão</Text>

            <TextInput
                onChangeText={setVazao}
                value={vazao}
                placeholder="Vazão"
                placeholderTextColor={'#787878'}
                style={styles.TextInput}
                keyboardType="decimal-pad"
            />

            <TextInput
                onChangeText={setTempTrator}
                value={tempTrator}
                placeholder="Tempo do trator"
                placeholderTextColor={'#787878'}
                style={styles.TextInput}
                keyboardType="decimal-pad"
            />

            <TextInput
                onChangeText={setEspacamentoLinha}
                value={espacamentoLinha}
                placeholder="Faixa de aplicação"
                placeholderTextColor={'#787878'}
                style={styles.TextInput}
                keyboardType="decimal-pad"
            />

            <TextInput
                onChangeText={setNumBicoPul}
                value={numBicoPul}
                placeholder="Numero de bicos do pulverizador"
                placeholderTextColor={'#787878'}
                style={styles.TextInput}
                keyboardType="decimal-pad"
            />

            <TouchableOpacity style={styles.card} onPress={() => Calcular()}>
                <Text style={styles.cardText}>Calcular</Text>
            </TouchableOpacity>

            {result != null &&
                <>
                    <Text style={styles.resultText}>Resultado:</Text>
                    <TextInput
                        //onChangeText={'setEmail'}
                        value={result}
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

export default CalcFoliar;