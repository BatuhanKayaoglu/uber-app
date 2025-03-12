import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

const Layout = () => {

    return (
        <>
            <Stack>
                <Stack.Screen name="welcome" options={{ headerShown: false }} />
                <Stack.Screen name="sign-up" options={{ headerShown: false }} />
                <Stack.Screen name="sign-in" options={{ headerShown: false }} />
            </Stack>
            <StatusBar style="auto" />
        </>
    );
}

export default Layout;