import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
        //paddingHorizontal: 15
    },

    header: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        alignItems: 'center',
    },

    welcomeText: {
        color: '#141414',
        fontSize: 20,
        fontWeight: '300'
    },

    exitButtom: {
        position: 'absolute',
        right: 0,
        marginTop: 10
    },

    exitText: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        backgroundColor: '#f21b1b',
        borderRadius: 10,
        color: '#fff',
        fontWeight: 'bold'
    },

    climaContainer: {
        borderRadius: 12
    },

    climaText: {
        color: '#585958',
        textAlign: 'center',
        fontSize: 60,
        fontWeight: '200',
        paddingVertical: 0
    },

    dollarText: {
        color: '#585958',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '300',
        paddingVertical: 10
    },

    card: {
        backgroundColor: '#ffa500',
        marginVertical: 10,
        marginHorizontal: 15,
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