import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 100
    },

    Logo: {
        width: 300, 
        height: 90,
        alignSelf: 'center',
        paddingVertical: 80
    },

    TextInput: {
        borderWidth: 1,
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10,
        borderColor: '#c6c6c6',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        color: '#000'
    },

    Button: {
        backgroundColor: '#ffa500',
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