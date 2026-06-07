import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Inicio() {
    const [emailIngresado, setEmail] = useState('');
    const [passwordIngresado, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = () => {
        const emailValido = "brandongag14@gmail.com";
        const passwordValida = "hola1234";

        if (emailIngresado === emailValido && passwordIngresado === passwordValida) {
            setMensaje("EXITOOOO");
        } else {
            setMensaje("Usuario o contraseña incorrectos");
        }
    };

    return (
        <View style={styles.mainContainer}>
            {/* Cabecera Violeta */}
            <View style={styles.header}>
                <Text style={styles.headerText}>La mejor login app</Text>
            </View>

            <View style={styles.content}>
                {/* Logo */}
                <Image
                    source={require('../assets/logoOrt.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                {/* Inputs */}
                <TextInput
                    style={styles.input}
                    placeholder="email@EfsiEsLaMejorMateria.com"
                    value={emailIngresado}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="********"
                    value={passwordIngresado}
                    onChangeText={setPassword}
                    secureTextEntry
                />


                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>INGRESAR</Text>
                </TouchableOpacity>

             
                <TouchableOpacity>
                    <Text style={styles.linkText}>Olvidaste la clave?</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.linkText}>Crear Cuenta</Text>
                </TouchableOpacity>

                {mensaje ? <Text style={styles.mensaje}>{mensaje}</Text> : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    header: {
        backgroundColor: '#8A47EB',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        padding: 25,
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: 150,
        marginBottom: 30,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#8A47EB',
        borderRadius: 5,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: 'white',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#8A47EB',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    linkText: {
        color: 'black',
        marginBottom: 15,
        fontSize: 14,
    },
    mensaje: {
        marginTop: 10,
        color: '#8A47EB',
        fontWeight: 'bold'
    }
});
