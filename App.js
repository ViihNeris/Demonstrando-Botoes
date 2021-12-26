import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, Alert } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        A importância de doar sangue
      </Text>

      <Text style = {styles.legenda}>
        A doação de sangue é um gesto solidário de doar uma pequena quantidade do próprio sangue para salvar a vida de pessoas que se submetem a tratamentos e intervenções médicas de grande porte e complexidade, como transfusões, transplantes, procedimentos oncológicos e cirurgias. {'\n'}

      </Text>

      <Image style = {styles.img} source = {require ('./assets/doacao.png')}/>

      <Text style = {styles.legenda2}>
        {'\n'}Selecione uma das opções abaixo para mais informações:
      </Text>

      <Image style = {styles.gif} source = {require ('./assets/seta.gif')}/>
    <View style = {styles.btn3}> 
      <TouchableOpacity style = {styles.btn3} onPress = {()=> {Alert.alert('Requisitos', '\n • Ter entre 16 e 69 anos; \n • Pesar mais de 50kg; \n • Estar alimentado, porém com distância de 3h do procedimento; \n • Ter dormido pelo menos 6 horas nas últimas 24 horas.')}}>

        <Text style = {styles.cont}> Requisitos </Text>

      </TouchableOpacity>

       <TouchableOpacity style = {styles.btn2}  onPress = {()=> {Alert.alert('Impedimentos Temporários', '\n • Gripe, resfriado e febre; \n • Período gestacional e pós; \n • Ingestão de bebida alcoólica nas 12 horas que antecedem a doação; \n • Tatuagem e/ou piercing nos últimos 12 meses; \n • Vacinação.')}}>
        <Text style = {styles.cont}> Impedimentos </Text>
      
       </TouchableOpacity>

       <TouchableOpacity style = {styles.btn3} onPress = {()=> {Alert.alert('Curiosidades', '\n • A frequência máxima é de quatro doações de sangue anuais para o homem e de três doações de sangue anuais para a mulher; \n • Dentre os impedimentos definitivos para doar estão a contaminação de Malária e o uso de drogas ilícitas injetáveis.')}}>
        <Text style = {styles.cont}> Curiosidades </Text>
      
       </TouchableOpacity>

    </View>
    <View style = {styles.btn}> 

        <Button title = 'Site Referencial' color = '#B31712' style = {styles.btn} onPress = {()=> Alert.alert ('Saúde, Ministério da. "Doação de sangue: como doar, quem pode doar, impedimentos".\n \n Disponível em: <https://antigo.saude.gov.br/saude-de-a-z/doacao-de-sangue>.')}/>

    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFE4E1',
    padding: 8,
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#750F0C"
  },

  legenda: {  
    textAlign: 'justify',
    fontSize: 15
  },

  legenda2: {  
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16 
  },

  img: {  
    width: 180,
    height: 180
    
  },

  btn: {  
    flexDirection: 'row',
    padding: 50,  
  },

  btn2: {  
    alignItems: 'stretch',
    backgroundColor: '#FF580F',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 3
  },

  btn3: {  
      
    alignItems: 'stretch',
    backgroundColor: '#DC2119',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 5
  },

  cont: {  
      
     color: 'white',
     fontSize: '18',
     fontWeight: 'bold'
  },

  gif: {
    
    width: 40,
    height: 78,
    marginTop: 10,
    marginBottom: 10
  }

});
