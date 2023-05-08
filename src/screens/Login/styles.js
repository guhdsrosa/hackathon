import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#171717',
        paddingTop: 100
    },

    Logo: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 60
    },

    TextInput: {
        borderWidth: 1,
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10,
        borderColor: '#c6c6c6',
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },

    Button: {
        backgroundColor: '#0b5626',
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10
    },

    ButtonText: {
        textAlign: 'center',
        color: '#fff',
        paddingVertical: 15,
        fontSize: 15
    }
})

export default styles;