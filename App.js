
/*  import React, { useState } from 'react';
import { Text, View,  Button, StyleSheet } from 'react-native';

 const HelloWordApp = () => {
  return(
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Text>Hello, word!</Text>
      <Text>Bienvenido</Text>
      <Text>Maycol Arauz</Text>


    </View>
  )
} 
export default HelloWordApp; */
// saludos 
/* import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})
const Greeting = (props) => {
  return(
  <View style={styles.create}>
    <Text>Hello {props.name}!</Text>
  </View>
  );

}

const LostOfGreetings = () => {
  return(
    <View style={[styles.center, {top: 50}]}>
        <Greeting name='Maycol'/>
        <Greeting name='Jesus'/>
        <Greeting name='Randy'/>
    </View>
  );
}
export default LostOfGreetings;  */
//App
 /* import React, {useState} from 'react';  
import { View , Text,  Button, StyleSheet } from 'react-native';  

const App = () =>{
  const [count , setCount] = useState(0);
  
  return(
    <View style = {styles.container}>
      <Text>Tu clickea {count} tiempo</Text>
      <Button
            onPress={() => setCount(count + 1)}
            title="Click me!"
            />
      </View>
    );
};

//React Native styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default App;
 */

/* const { InputAccessoryView } = require("react-native"); */

//imagen 

/* import React from 'react';
import { View, Text, Image, ScrollView, TextInput} from 'react-native';

const modelo_imagen = ()=>{
  return(
    <ScrollView>
      <Text>Primera app con imagen</Text>
      <View>
        <Text>La imagen es</Text>
        <Image
        source={{
          uri: 'https://www.xtrafondos.com/wallpapers/resized/avengers-endgame-marvel-studios-2992.jpg?s=large'
        }}
            style={{ width: 200, height: 200}}
          />
      </View>
      <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          defaultValue= 'Imagen1'
        />
    </ScrollView>
  )
}
export default modelo_imagen; */

//flexbox
/* import React from 'react';
import {Text, View} from 'react-native';

import styles from './components/styles';

export default function cajon(){
  return(
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>Estoy en la caja</Text>
      </View>
    </View>
  );
}
 */

/* import React from 'react';
import {Text, View } from 'react-native';
import styles from "./components/styles";
export default function cajones(){
  return(
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>#1</Text>
      </View>
       
        <View style={styles.box}>
          <Text style={styles.boxText}>#2</Text>
        </View>

              <View style={styles.box}>
              <Text style={styles.boxText}>#3</Text>
            </View>
      </View>
  )
} */

//navigacion 

/* import * as React from 'react';
import{ Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function pantallaPrinc({ navigation }){
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Pantalla de Inicio</Text>
        <Button
            title="Ir a la pantalla de Detalles"
              onPress={( ) => navigation.navigate('Detalles')}
              />
    </View>
  );
}

function DetailsScreen(){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Pantalla de Detalles</Text>
    </View>
  );

}

const Stack = createStackNavigator();

function app_principal(){
  return(
    <NavigationContainer>
        <Stack.navigator initialRouteName="Inicio">
            <Stack.Screen name="Inicio" component={pantallaPrinc} />
            <Stack.Screen name="Detalles" component={DetailsScreen} />
        </Stack.navigator>
    </NavigationContainer>
  );
}

export default app_principal; */

//navigation header 

/* import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function HomeScreen(){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Pantalla de Inicio</Text>
    </View>
  );
}

function App_inicio(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screeen
            name="home"
            component={HomeScreen}
            options={{title: 'Inicio'}}>

            </Stack.Screeen>
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App_inicio; */

/* import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Homeini({ navigation}){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Pantalla de Inicio</Text>
        <Button
        title="Ir a la pantalla de Profile"
          onPress={()=> navigation.navigate('Profile',{ name:'pantalla de perfiles'})}

          />
    </View>

  );
}

function ProfileScreen({ navigation}){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Pantalla de Perfiles</Text>
            <Button title='Regresar' onPress={()=> navigation.goBack()}/>
    </View>
  );
}

const Stack = createStackNavigator();

function app_profile(){
  return(
    <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen 
                    name="Inicio"
                    component={Homeini}
                    options={{title: 'Inicio'}}
                 />

                      <Stack.Screen
                            name="Profile" 
                            component={ProfileScreen}
                            options={({route})=>({title: route.params.name})}
                         />     
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export  default app_profile; */

//cambio de color al header


/* import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function homeini(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Inicio</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function aps(){
  return(
    <NavigationContainer>
        <Stack.navigator>
            <Stack.Screen
                  name="home"
                  component={homeini}
                  options={{title: 'Inicio', headerStyle:{backgroundColor: 'blue',}, hearderTintColor: 'white'}}
                  />
        </Stack.navigator>
    </NavigationContainer>
  );

}

export default aps;  */

//componente View

/* import React from "react";
import {View, Text} from "react-native";

const ViewBoxewsWithColorAndText= () => {
  return(
    <View 
        style={{
          flexDirection: "row",
          height: 100,
          padding: 30
        }}

      >
        <View style={{ backgroundColor: "black", flex: 0.5}}></View>
        <View style={{ backgroundColor: "pink", flex: 0.8}}></View>
            <Text>Bienvenido</Text>
      </View>
  );
};

export default ViewBoxewsWithColorAndText; */

// componente text

/* import React, {useState} from "react";
import {Text, StyleSheet} from "react-native";

const TextCenter= ()=>{
  const [titleText, setTitleText]= useState("Presione aquí");
  const bodyText= useState("Aquí Estamos!!!!");

  const onPressTitle=()=>{
    setTitleText("Aquí no hay nada!!?");

  }

  return(
    <Text style={StyleSheet.baseText}>
        <Text style={StyleSheet.titleText} onPress={onPressTitle}>
          {titleText}
          {"\n"}
          {"\n"}
        </Text>
            <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
      titleText:{
        fontSize: 20,
        fontWeight: "bold"
      }
});


export default TextCenter; */


//imagen 

/* import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const Image= { uri: "https://www.xtrafondos.com/wallpapers/resized/monkey-d-luffy-de-one-piece-4015.jpg?s=large "}

const app_imagen =()=> (
  <View style={styles.container}>
      <ImageBackground source={Image} style={styles.Image}>
          <Text style={styles.text}>One Piece</Text>
          <Text style={styles.text}>Monky D. Luffy</Text>
      </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
    Image
    : {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text:{
          color: "white",
          fontSize: 42,
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: "#000000a0"
    }
});

export default app_imagen; */
//imput
/* import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button} from "react-native";

const inputText =()=>{
  const [text, onChangeText]=React.useState("Ingrese Texto");
  const [number, onChangeNumber]= React.useState(null);
  

    return(
      <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}>

              />
              <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Ingrese su Numero"
                  keyboardType="numeric"
                  />

                  <Button
                      title="Enviar"/>
                  
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  input:{
      height:50,
      margin: 20,
      borderWidth: 1,
  },

});

export default inputText; */

//app scrollview

/* import React from "react";
import {StyleSheet, Text, SafeAreaView, ScrollView, StatusBar} from "react-native";

const app_escrollview=()=> {
  return(
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
              <Text style={styles.text}>
              El manga de One Piece es considerado 
              como uno de los más populares dentro de la comunidad de fanáticos.
               La obra creada por Eiichiro Oda
                se encuentra en su punto más intenso tras
                el estreno del último arco.
              </Text>
        </ScrollView>
    </SafeAreaView>
  );

}
const styles= StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "blue",
    marginHorizontal: 20,
  },

  text:{
    fontSize: 45,
  },
});

export default app_escrollview; */

//styles
/* 
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const app_styles= ()=>(
  <View style={styles.container}>
    <Text style={styles.title}>One Piece</Text>
  </View>
);
 const styles = StyleSheet.create({
   container:{
     flex: 1,
     padding: 24,
     backgroundColor: "gray"
   },

   title:{
     marginTop: 20,
     paddingVertical: 10,
     borderWidth: 10,
     borderColor: "violet",
     borderRadius: 10,
     backgroundColor: "green",
     color: "black",
     textAlign: "center",
     fontSize: 100,
     fontWeight: "bold"
   }
 });

 export default app_styles; */

 //flat list

/*  import React from "react";
 import { SafeAreaView, View , Flatlist, StyleSheet , Text, StatusBar } from "react-native";

 const Data= [
   {
     id: 1,
     title: 'Primer Espacio',
   },
   {
     id: 2,
     title : 'Segundo Espacio',
   },
   {
     id: 3,
     title: 'Tercer Espacio',
   },
];

const Item = ({ title }) => (
  <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
  </View>
);

const app_flat_list = ()=>{
  const renderItem = ({ item })=>(
    <Item title={ item.title } />
  );

  return(
    <SafeAreaView style={styles.container}>
        <Flatlist
        data={Data}
        renderItem= { renderItem }
        keyExtractor={item=>item.id}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item:{
    backgroundColor: "gray",
    padding: 30,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  title:{
      fontSize: 32,
  },

});

export default app_flat_list; */

//section list
/* import React ,{Componet} from 'react';
import { StyleSheet, Text, View , SafeAreaView, SectionList, StatusBar} from 'react-native';

const datos =[
  {
    title: "Comida Rapida",
    data: ["Pizza", "Hamburguesa", "Hot Dog"]
  },
  { 
    title: "Fritos",
    datos:["Pollo Frito", "Nugets", "Chuleta fritas"]
  },
  {
    title: "Bevidas",
    data:["Agua", "Coca Cola", "Cervezas"]
  },
  {
    title:"Postres",
    datos:["Helados","Tres leche"]
  }
];

Item = ({title})=>(
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

class App extends Componet {
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <SectionList
            sections={datos}
            keyExtractor={(item, index)=> item + index}
            renderItem={({ item })=> <Item title={item}/>}
          renderSectionHeader={({section: {title}})=>(
            <Text style={styles.header}>{title}</Text>
          )}
          />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal:16
  },
  item:{
    backgroundColor: "blue",
    padding: 20,
    marginVertical:8
  },
  header:{
    fontSize: 32,
    backgroundColor: "pink"
  },
  title:{
    fontSize: 24
  }
})
export default App; */

//activity indicator
/* import React ,{Componet} from 'react';
import { ActivityIndicator,StyleSheet, Text, View  } from 'react-native';


class App extends Componet{
  render(){
    return(
      <View style={[styles.container, styles.horizontal]}>
       <ActivityIndicator color="blue"/>
       <ActivityIndicator size="large" color="green"/>
       <ActivityIndicator size="small" color="pink"/>
       <ActivityIndicator size="large" color="gray"/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center"
  },
  horizontal:{
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  }
});
export default App; */

//siguiente activity indicator

/* import React from 'react';
import {View, StyleSheet, ProgressBarAndroid, Text, } from 'react-native';

const App=()=> {
  return(
    <View style={styles.container}>
     <View style={styles.example}>
       <Text>Barra de Progreso</Text>
       <ProgressBarAndroid />
     </View>
     <View style={styles.example}>
        <Text>Barra de Progreso horizontal</Text>
        <ProgressBarAndroid styleAttr="Horizontal" />
      </View>
      <View style={styles.example}>
        <Text>Barra de Progreso horizontal colores</Text>
        <ProgressBarAndroid styleAttr="Horizontal"  color="pink"/>
      </View>
      <View style={styles.example}>
        <Text>Barra de Progreso horizontal valores</Text>
        <ProgressBarAndroid styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
      </View>
    
    </View>
    
  );
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  example:{
    marginVertical:24,
  },
});

export default App; */

//componentes 2
/* 
import React,{ useStates} from 'react';
import PropTypes from 'Prop-Types';
import { View, TextInput, Text } from "rect-native";
import styles from './stilos';
import { sub } from 'react-native-reanimated';

function Input(props){
  return(
    <View style={styles.textInputContainer}>
        <Text style={styles.textInputLabel}>{props.label}</Text>
       <TextInput style={styles.textInput}{...props}/>

    </View>
  );
}


Input.prototype={
  label: PropTypes.string
};

export default function CollectionTextInput(){
  const [ChangedText, setChangeText]= useStates("");
  const [SubmittedText, setSubmittedText] = useStates("");

  return(
    <View style={styles.container}>
      <Input label="Input Basico"/>
      <Input label="Input clave" secureTextEntry />
      <Input label="Return Key" returnKeyType="search"/>
      <Input label="Placeholder Text" placeholder="search"/>
      <Input
          label="Input Evento:"
          onChangeText={e=>{
            setChangeText(e);
          }}
          onSubmittedText={e=>{
            setSubmittedText(e.nativeEvent.text);
          }}
          onFocus={()=>{
            setChangeText("");
            setSubmittedText("");
          }}
          />
          <Text>Cambiado:{ChangedText}</Text>
          <Text>Enviado:{SubmittedText}</Text>
    </View>
  );
} */


//Switch
/* 
import { useState } from "react"
import { View, Switch, StyleSheet} from "rect-native";

const App= ()=>{
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch=()=> setIsEnabled(previousStates => !previousStates)
  return(
    <View>
    <Switch style={styles.container}
    trackColor={{ false: 'balck', true: 'yellow'}}
    thumbColor={isEnabled ? 'green': 'white'}
    ios_backgroundColor="brown"
     onValueChange={toggleSwitch}
    value={isEnabled} 
    />
    </View>
  );
  

}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    alignItems:"center",
    justifyContent: "center"
  }
});

export default App; */

//ventanas emergentes 
/* 
import React,{useState} from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';


const App=()=>{
  const [modalVisible, setModalVisible]= useState(false);
  return(
    <View style={styles.centerView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=>{
          Alert.alert("Modal ha sido cerrado");
          setModalVisible(!modalVisible);
        }}
        >
          <View style={styles.centerView}>
            <View style={styles.modalView}>

            <Text style={styles.modalText}>Hola modal</Text>
            <Pressable 
            style={[styles.button, styles.buttonClose]}
            onPress={()=> setModalVisible(!modalVisible)}>
              <Text style={styles.textStyles}>Ocultar Modal</Text>
            </Pressable>
            </View>
            
          </View>
        </Modal>
        <Pressable 
            style={[styles.button, styles.buttonOpen]}
            onPress={()=> setModalVisible(true)}>
              <Text style={styles.textStyles}>Mostrar Modal</Text>
            </Pressable>
    </View>

  );
}

const styles= StyleSheet.create({
  centerView:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    marginTop:22

  },
  modalView:{
    margin:20,
    backgroundColor: "white",
    borderRadius:20,
    padding: 35,
    alignItems:"center",
    shadowColor: "gray",
    shadowOffset:{
      width:0,
      height:2
    },
  },
  button:{
    borderRadius:20,
    padding: 10,
    elevation:2,
  },
  buttonOpen:{
    backgroundColor: "pink"
  },
  buttonClose:{
    backgroundColor:"blue"
  },
  textStyles:{
    color:"black",
    fontSize: "bold",
    textAlign: "center"
  },
  modalView:{
    marginBottom:15,
    textAlign: "center"
  }
});

export default App; */


//botones 
/* 
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert}from 'react-native';

const Separador=()=>(
  <View style={styles.Separador}></View>
);

const App =()=>(
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>
      Vamos a precionar cualquier boton
    </Text>
    <Button
    title="Preciona Aqui"
    onPress={()=>Alert.alert('bonton simple')}
    />
    <Separador />
    <View >
      <Text style={styles.title}>
        Ajustamos un color a este codigo
      </Text>
      <Button
          title="Press here"
          color="black"
          onPress={()=> Alert,alert('Boton con colores')}
          />
    </View>
    <Separador />
    <View>
    <Text style={styles.title}>
        todos los botones son disible
      </Text>
      <Button
          title="Press here"
         disabled
          onPress={()=> Alert,alert('No precionar el boton')}
          />
    </View>
    <Separador />
    <View>
    <Text style={styles.title}>
        las letras estan en lps botones del izquierda
      </Text>
      <View styles={styles.fixToText}>
      <Button
          title="Left here"
          onPress={()=> Alert,alert('Letf boton pressed')}
          />
          <Button
                title="Rigt Button"
                onPress={()=> Alert.alert('RIgt boton pressed')}
                />
       </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title:{
    textAlign:' center',
    marginVertical: 8,
  },
  fixToText:{
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  Separador:{
    marginVertical:8,
    borderBottomColor: 'pink',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App; */

//touchableHighlight
/* 
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const TouchableHighlight=()=>{
  const [count, setCount]= useState(0);
  const onPress = () => setCount(count +1 );
  return(
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text>Toca Aquí </Text>
        </View>
      </TouchableHighlight>
       <View style={styles.countContainer}>
         <Text style={styles.countText}>
           {count ? count : null}
         </Text>
         </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button:{
    alignItems: "center",
    backgroundColor: "gray",
    padding: 10,
  },
  countContainer:{
    alignItems: "center",
    padding: 10,
  },
  countText:{
    color: "black"
  }
});

export default TouchableHighlight; */

//TouchableOpacity

import React,{ useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


const App=()=>{
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount +1);
  return(
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity
      style={styles.button}
      onPress={onPress}>
        <Text>Preciona aquí</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    padding: 10,
  },
  button:{
    alignItems:"center",
    backgroundColor: "blue",
    padding:10
  },
  countContainer:{
    alignItems: "center",
    padding:10
  }
})

export default App;