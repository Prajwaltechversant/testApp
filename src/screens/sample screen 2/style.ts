import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      timerText: {
        fontSize: 48,
        marginBottom: 20,
        color:'black'
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom:20
      },
})

export default styles