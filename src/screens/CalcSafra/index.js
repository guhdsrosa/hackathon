import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

const CalcSafra = () => {

    const [result, setResult] = useState(null)
    const [option, setOption] = useState('soja')

    //Soja
    const [numHa, setNumHa] = useState(null)
    const [numVagem, setNumVagem] = useState(null)
    const [numGraoVagem, setNumGraoVagem] = useState(null)
    const [peso1kSemente, setPeso1kSemente] = useState(null)
    const [saca60kg, setSaca60kg] = useState(null)

    //Milho
    const [pesoMedioEspiga, setPesoMedioEspiga] = useState(null)
    const [numPlantasHa, setNumPlantasHa] = useState(null)
    const [sacaMilho, setSacaMilho] = useState(null)

    const OptionSelect = ({ select }) => {
        if (select == 'soja')
            setOption('soja')

        if (select == 'milho')
            setOption('milho')

    }

    const Calcular = () => {
        var resultado = 0
        setResult('')

        if (option == 'soja') {
            var _numHa = numHa?.replace(',', '.')
            var _numVagem = numVagem?.replace(',', '.')
            var _numGraoVagem = numGraoVagem?.replace(',', '.')
            var _peso1kSemente = peso1kSemente?.replace(',', '.')
            var _saca60kg = saca60kg?.replace(',', '.')

            resultado = _numHa * _numVagem * _numGraoVagem * (_peso1kSemente / 1000) / (_saca60kg * 1000)
            setResult(`${resultado.toFixed(1).replace('.', ',')}`)
        }

        if (option == 'milho') {
            var _numPlantasHa = numPlantasHa?.replace(',', '.')
            var _pesoMedioEspiga = pesoMedioEspiga?.replace(',', '.')
            var _sacaMilho = sacaMilho?.replace(',', '.')

            resultado = (_numPlantasHa * _pesoMedioEspiga) / _sacaMilho
            setResult(`${resultado.toFixed(1).replace('.', ',')}`)
        }
    }

    useEffect(() => {
        setResult(null)
    }, [option])

    return (
        <ScrollView style={styles.Container}>
            <Text style={styles.title}>Previsão de Safra</Text>

            <View style={styles.optionContainer}>
                <TouchableOpacity
                    style={option == 'soja' ? styles.optionButtonSelect : styles.optionButton}
                    onPress={() => OptionSelect({ select: 'soja' })}
                >
                    <Text style={option == 'milho' ? styles.optionText : styles.optionTextSelect}>Soja</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={option == 'milho' ? styles.optionButtonSelect : styles.optionButton}
                    onPress={() => OptionSelect({ select: 'milho' })}
                >
                    <Text style={option == 'soja' ? styles.optionText : styles.optionTextSelect}>Milho</Text>
                </TouchableOpacity>
            </View>

            {option == 'soja' &&
                <>
                    <Text style={styles.titleText}>Soja</Text>
                    <TextInput
                        onChangeText={setNumHa}
                        value={numHa}
                        placeholder="Número de plantas por área ou ha"
                        placeholderTextColor={'#787878'}
                        style={styles.TextInput}
                        keyboardType="decimal-pad"
                    />

                    <TextInput
                        onChangeText={setNumVagem}
                        value={numVagem}
                        placeholder="Numero de vagens por planta"
                        placeholderTextColor={'#787878'}
                        style={styles.TextInput}
                        keyboardType="decimal-pad"
                    />

                    <TextInput
                        onChangeText={setNumGraoVagem}
                        value={numGraoVagem}
                        placeholder="Numero de grãos por vagem"
                        placeholderTextColor={'#787878'}
                        style={styles.TextInput}
                        keyboardType="decimal-pad"
                    />

                    <Text style={styles.helpText}>*Geralmente tem uma média de 170g</Text>
                    <TextInput
                        onChangeText={setPeso1kSemente}
                        value={peso1kSemente}
                        placeholder="Peso de mil sementes (PMS)"
                        placeholderTextColor={'#787878'}
                        style={styles.TextInput}
                        keyboardType="decimal-pad"
                    />

                    <TextInput
                        onChangeText={setSaca60kg}
                        value={saca60kg}
                        placeholder="Saca de 60kg"
                        placeholderTextColor={'#787878'}
                        style={styles.TextInput}
                        keyboardType="decimal-pad"
                    />
                </>
            }

            {option == 'milho' &&
                <>
                    <Text style={styles.titleText}>Milho</Text>

                    <Text style={styles.helpText}>*Considerando uma humidade de colheita de 13%</Text>
                    <TextInput
                        onChangeText={setPesoMedioEspiga}
                        value={pesoMedioEspiga}
                        placeholder="Peso médio de grão de cada espiga"
                        placeholderTextColor={'#787878'}
                        style={styles.TextInput}
                        keyboardType="decimal-pad"
                    />

                    <TextInput
                        onChangeText={setNumPlantasHa}
                        value={numPlantasHa}
                        placeholder="Numero de plantas por hectare"
                        placeholderTextColor={'#787878'}
                        style={styles.TextInput}
                        keyboardType="decimal-pad"
                    />

                    <TextInput
                        onChangeText={setSacaMilho}
                        value={sacaMilho}
                        placeholder="Uma saca de milho"
                        placeholderTextColor={'#787878'}
                        style={styles.TextInput}
                        keyboardType="decimal-pad"
                    />
                </>
            }

            <TouchableOpacity style={styles.card} onPress={() => Calcular()}>
                <Text style={styles.cardText}>Calcular</Text>
            </TouchableOpacity>

            {result != null &&
                <>
                    <Text style={styles.resultText}>Resultado:</Text>
                    <TextInput
                        value={`${result} SC/h`}
                        //placeholder="Resultado"
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