import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
    title: string;
    onPress?: (event: GestureResponderEvent) => void;
    type?: 'primary' | 'dangerous' | 'disabled';
};

const BasicButton: React.FC<ButtonProps> = ({ title, onPress, type = 'primary' }) => {
    const isDisabled = type === 'disabled';

    return (
        <TouchableOpacity
            style={[
                styles.button,
                type === 'primary' && styles.primary,
                type === 'dangerous' && styles.dangerous,
                isDisabled && styles.disabled,
            ]}
            onPress={!isDisabled ? onPress : undefined}
            activeOpacity={isDisabled ? 1 : 0.7}
        >
            <Text style={[styles.text, isDisabled && styles.disabledText]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
    },
    primary: {
        backgroundColor: '#007BFF',
    },
    dangerous: {
        backgroundColor: '#DC3545',
    },
    disabled: {
        backgroundColor: '#6C757D',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    disabledText: {
        color: '#D6D6D6',
    },
});

export default BasicButton;