import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff',
        flex: 1
    },

    title: {
        fontSize: 20,
        textAlign: 'center',
        color: '#141414',
        paddingVertical: 50
    },

    //Option
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20
    },

    optionButtonSelect: {
        backgroundColor: '#ffa500',
        borderRadius: 10
    },

    optionButton: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#141414'
    },

    optionTextSelect: {
        color: '#fff',
        textAlign: 'center',
        paddingVertical: 15,
        paddingHorizontal: 70,
        fontSize: 15,
        fontWeight: 'bold'
    },

    optionText: {
        color: '#141414',
        textAlign: 'center',
        paddingVertical: 15,
        paddingHorizontal: 70,
        fontSize: 15,
        fontWeight: '500'
    },
    //Option

    titleText: {
        color: '#141414',
        textAlign: 'center',
        paddingBottom: 20,
        paddingHorizontal: 70,
        fontSize: 18,
        fontWeight: '400'
    },

    helpText: {
        color: '#323232',
        paddingBottom: 2,
        paddingTop: 5,
        paddingHorizontal: 10,
        fontSize: 13,
        fontWeight: '400'
    },

    TextInput: {
        borderWidth: 1,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: '#c6c6c6',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        color: '#000'
    },

    card: {
        backgroundColor: '#ffa500',
        marginHorizontal: 10,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    cardText: {
        color: '#fff',
        textAlign: 'center',
        paddingVertical: 15,
        fontSize: 15,
        fontWeight: 'bold'
    },

    resultText: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 15,
        color: '#141414'
    }
})

export default styles;