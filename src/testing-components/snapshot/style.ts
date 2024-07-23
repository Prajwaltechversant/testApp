import { StyleSheet } from "react-native";
import { StyleProps } from "../../types/styleProps";


const styles =({screenContext,width,height}:StyleProps)=> StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default styles