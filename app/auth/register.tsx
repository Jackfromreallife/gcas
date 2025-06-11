import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import BasicButton from '../component/button'; // Adjust the import path as necessary

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        if (formData.password !== formData.confirmPassword) {
            Alert.alert('Error', 'Passwords do not match!');
            return;
        }
        // Handle registration logic here
        console.log('Form submitted:', formData);
        Alert.alert('Success', 'Registration successful!');
    };

    return (
        <View style={styles.registerContainer}>
            <Text style={styles.label}>Username:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter username"
                value={formData.username}
                onChangeText={(value) => handleChange('username', value)}
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter email"
                value={formData.email}
                onChangeText={(value) => handleChange('email', value)}
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter password"
                secureTextEntry
                value={formData.password}
                onChangeText={(value) => handleChange('password', value)}
            />
            <Text style={styles.label}>Confirm Password:</Text>
            <TextInput
                style={styles.input}
                placeholder="Confirm password"
                secureTextEntry
                value={formData.confirmPassword}
                onChangeText={(value) => handleChange('confirmPassword', value)}
            />
            <BasicButton title="Register" onPress={handleSubmit} type='primary' />
        </View>
    );
};

const styles = StyleSheet.create({
    registerContainer: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
});

export default Register;