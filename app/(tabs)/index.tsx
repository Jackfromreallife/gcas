import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/auth/login" style={styles.button}>
        Go to Login screen
      </Link>
      <Link href="/auth/register" style={styles.button}>
        Go to Register screen
      </Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
    marginBottom: 30,
  },
});