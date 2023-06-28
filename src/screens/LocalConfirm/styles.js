import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 10
    },

    image: {
        height: 400,
        width: 400,
        position: 'absolute',
        bottom: 0
    },

    buttom: {
        backgroundColor: '#ffa500',
        borderRadius: 10,
        position: 'absolute',
        bottom: 20,
        zIndex: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    textButtom: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        paddingHorizontal: 90,
        paddingVertical: 10
    },

    text: {
        marginTop: '40%',
        fontSize: 18,
        textAlign: 'center',
        color: '#fff',
        zIndex: 3,
        marginHorizontal: 10
    },

})

export default styles;