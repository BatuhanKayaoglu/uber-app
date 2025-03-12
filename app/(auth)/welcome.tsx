import { Text, View, StyleSheet } from "react-native";

const Onboarding = () => {
    return (
        <View style={styles.container}>
            <Text className="text-red-900 font-bold">Onboarding</Text>
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

export default Onboarding;