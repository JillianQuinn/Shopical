import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";


const CustomButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

// const CustomButton = props => {
//     return (
//         <TouchableOpacity onPress={props.onPress}>
//             <View style={{...styles.button, ...props.style}}>
//                 <Text style={{...styles.buttonText, ...props.textStyling}}>
//                     {props.title}
//                 </Text>
//             </View>
//         </TouchableOpacity>
//     )
// }

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#EEEEEE",
        paddingVertical: 12,
        paddingHorizontal: 25, 
        borderRadius: 25,
    },
    buttonText: {
        color: "#5E87D9",
        fontSize: 18,
        textAlign:'center'
    }
});

export default CustomButton

// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

// const CustomButton = props => {
//     return (
//         <TouchableOpacity onPress={props.onPress}>
//             <View style={{...styles.button, ...props.style}}>
//                 <Text style={{...styles.buttonText, ...props.textStyling}}>
//                     {props.title}
//                 </Text>
//             </View>
//         </TouchableOpacity>
//     )
// }

// const styles = StyleSheet.create({
//     button: {
//         backgroundColor: "#EEEEEE",
//         paddingVertical: 12,
//         paddingHorizontal: 25, 
//         borderRadius: 25
//     },
//     buttonText: {
//         color: "#5E87D9",
//         fontSize: 18,
//         textAlign:'center'
//     }
// });

// export default CustomButton