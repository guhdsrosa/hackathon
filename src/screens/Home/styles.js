import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    Container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 15
    },

    header: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center',
    },

    welcomeText: {
        color: '#141414',
        fontSize: 20,
        fontWeight: '300'
    },

    climaContainer: {
        //backgroundColor: '#ffa500'
        borderRadius: 12
    },

    climaText: {
        color: '#585958',
        textAlign: 'center',
        fontSize: 60,
        fontWeight: '200',
        paddingVertical: 10
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