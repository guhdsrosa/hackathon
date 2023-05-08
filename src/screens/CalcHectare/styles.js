import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#171717',
        flex: 1
    },

    title: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        paddingVertical: 50
    },

    TextInput: {
        borderWidth: 1,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: '#c6c6c6',
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },

    card: {
        backgroundColor: '#0b5626',
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
        color: '#fff'
    }
})

export default styles;