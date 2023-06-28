import React, { useState } from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

const CalcHectare = () => {

    const [result, setResult] = useState(null)
    const [populacaoPlanta, setPopulacaoPlanta] = useState(null)
    const [espacamentoLinha, setEspacamentoLinha] = useState(null)
    const [numPlantaMetro, setNumPlantaMetro] = useState(null)
    const [metroLineares, setMetroLineares] = useState(null)

    const Calcular = () => {
        setResult('0')

        var _result = 0
        var _populacaoPlanta = populacaoPlanta?.replace(',', '.')
        var _espacamentoLinha = espacamentoLinha?.replace(',', '.')
        var _numPlantaMetro = 0
        var _metroLineares = 0

        _metroLineares = 1000 / _espacamentoLinha
        setMetroLineares(`${_metroLineares.toFixed(1).replace('.', ',')}`)

        _numPlantaMetro = _populacaoPlanta / _metroLineares
        setNumPlantaMetro(`${_numPlantaMetro.toFixed(1).replace('.', ',')}`)

        _result = _metroLineares * _numPlantaMetro
        setResult(`${_result.toFixed(1).replace('.', ',')}`)
    }

    return (
        <ScrollView style={styles.Container}>
            <Text style={styles.title}>Calcular Quantidade de Semente por hectare</Text>

            <TextInput
                onChangeText={setPopulacaoPlanta}
                value={populacaoPlanta}
                placeholder="Populaçao de plantas"
                placeholderTextColor={'#787878'}
                style={styles.TextInput}
                keyboardType="decimal-pad"
            />

            <TextInput
                onChangeText={setEspacamentoLinha}
                value={espacamentoLinha}
                placeholder="Espaçamento entre linhas (cm)"
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

                    <Text style={styles.resultTitle}>Sementes / ha</Text>
                    <TextInput
                        value={result}
                        placeholder="Sementes por hectare"
                        placeholderTextColor={'#787878'}
                        style={styles.TextInput}
                        keyboardType="decimal-pad"
                    />

                    <Text style={styles.resultTitle}>Números de plantas por metro</Text>
                    <TextInput
                        value={numPlantaMetro}
                        placeholder="Números de plantas por metro"
                        placeholderTextColor={'#787878'}
                        style={styles.TextInput}
                        keyboardType="decimal-pad"
                    />

                    <Text style={styles.resultTitle}>Metros lineares</Text>
                    <TextInput
                        value={metroLineares}
                        placeholder="Metros lineares"
                        placeholderTextColor={'#787878'}
                        style={styles.TextInput}
                        keyboardType="decimal-pad"
                    />
                </>
            }

        </ScrollView>
    )
}

export default CalcHectare;