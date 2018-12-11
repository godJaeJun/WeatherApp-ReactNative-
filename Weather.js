import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {LinearGradient} from 'expo';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import PropTypes from "prop-types";

const weatherCases={
  Rain:{
    colors:['#00C6FB','#005BEA'],
    title:"비",
    subtitle:"비가오니 꼭 우산을 준비해주세요~!",
    icon:'weather-rainy'
  },
  Clear:{
    colors:['#FEF253','#FF7300'],
    title:"맑음",
    subtitle:"데이트하기 딱 좋은 날씨네요~!",
    icon:'weather-sunny'
  },
  Thunderstorm:{
    colors:['#00ECBC','#007ADF'],
    title:"천둥",
    subtitle:"번개 맞을 수도 있으니 외출을 삼가하세요~!",
    icon:'weather-lightning'
  },
  Clouds:{
    colors:['#D7D2CC','#304352'],
    title:"구름",
    subtitle:"구름이 있으니 어두울 것~!",
    icon:'weather-cloudy'
  },
  Snow:{
    colors:['#7DE2FC','#B9B6E5'],
    title:"눈",
    subtitle:"눈싸움하기 딱 좋은 날씨에요~!",
    icon:'weather-snowy'
  },
  Drizzle:{
    colors:['#89F7FE','#66A6FF'],
    title:"이슬비",
    subtitle:"이슬비가 주륵주륵~!",
    icon:"weather-hail"
  },
  Haze:{
    colors:['#D7D2CC','#304352'],
    title:"안개",
    subtitle:"안개가 많이 꼈네요~!",
    icon:'weather-fog'
  },
  Fog:{
    colors:['#D7D2CC','#304352'],
    title:"안개",
    subtitle:"안개가 많이 꼈네요~!",
    icon:'weather-fog'
  },
  Mist:{
    colors:['#D7D2CC','#304352'],
    title:"안개",
    subtitle:"안개가 많이 꼈네요~!",
    icon:'weather-fog'
  }
}
function Weather({temp,weatherName}){
  return(
          <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
          <View style={styles.upper}>
            <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon}/>
            <Text style={styles.temp}>{temp}°</Text>
          </View>
          <View style={styles.lower}>
            <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
            <Text style={styles.subtitle}>
            {weatherCases[weatherName].subtitle}
            </Text>
          </View>
          </LinearGradient>
  );
}
Weather.propTypes={
  temp: PropTypes.number.isRequired,
  weatherName:PropTypes.string.isRequired
}
export default Weather;
const styles=StyleSheet.create({
  container:{
    flex:1
  },
  upper:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"transparent",
    paddingTop:40
  },
  temp:{
    fontSize:48,
    backgroundColor:"transparent",
    color:"white",
    marginTop:10
  },
  lower:{
    flex:1,
    alignItems:"flex-start",
    justifyContent:"flex-end",
    paddingLeft:25
  },
  title:{
    fontSize:38,
    backgroundColor:"transparent",
    color:"white",
    marginBottom:10,
    fontWeight:"300"
  },
  subtitle:{
    fontSize:24,
    backgroundColor:"transparent",
    color:"white",
    marginBottom:60
  }
});
