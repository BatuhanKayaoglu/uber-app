import { Text, View, StyleSheet } from "react-native";

const Signin = () => {
    return (
        <View style={styles.container}>
            <Text className="text-red-900 font-bold">Signin</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Signin;