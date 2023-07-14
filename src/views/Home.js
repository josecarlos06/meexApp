import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { getAuth } from '../services/api';

export default function Home({navigation}) {
   const [usuario, setUsuario] = useState('');
   const [pass, setPass] = useState('');
   const [alerta, setAlerta] = useState('');
   const [auth, setAuth] = useState({});

   const handleSubmit = async () => {
      if ([usuario, pass].includes('')) {
         setAlerta('Faltan datos por llenar');
         setTimeout(() => {
            setAlerta('');
         }, 2000);
         return;
      };
      const data = await getAuth({usuario, pass});
      if(data?.empleadoL){
         console.log(data);
         navigation.navigate('Qr')
      }
   }

   return (
      <View style={styles.container}>
         <Text style={styles.heading}>Inicio de sesión</Text>
         {alerta && <Text style={styles.alerta}>{alerta}</Text>}
         {auth?.empleadoL && <Text>{auth}</Text>}
         <TextInput
            style={styles.input}
            onChangeText={setUsuario}
            placeholder='Corre electronico'
            value={usuario}
         />
         <TextInput
            style={styles.input}
            onChangeText={setPass}
            placeholder='Contraseña'
            value={pass}
         />
         <Text style={styles.button} onPress={() => handleSubmit()}>Iniciar sesion</Text>
         <StatusBar style="auto" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      gap: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'stretch',
      padding: 20
   },
   images: {
      resizeMode: "contain",
      width: '100%',
   },
   heading: {
      fontSize: 30,
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: 5
   },
   input: {
      backgroundColor: "#f3f4f6",
      padding: 10,
      borderRadius: 5,
      fontSize: 20,
   },
   button: {
      backgroundColor: "#06b6d4",
      textAlign: "center",
      borderRadius: 5,
      fontSize: 20,
      padding:8,
      color:"#fff",
   },
   text: {
      fontSize: 20,
      color: "white",
      padding: 10,
      textAlign: "center"
   }, 
   alerta : {
      backgroundColor:"#ef4444",
      color:"#fff",
      textAlign:"center",
      padding:10,
      fontSize: 20,
      borderRadius: 5
   }
});