import { Text, View, StyleSheet } from "react-native";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text className="text-red-900 font-bold">Home</Text>
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

export default Home;