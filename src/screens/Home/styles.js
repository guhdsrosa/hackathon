import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center',
    },

    Container: {
        flex: 1,
        backgroundColor: '#171717',
    },

    card: {
        backgroundColor: '#0b5626',
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 15,

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
        paddingVertical: 20,
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default styles;