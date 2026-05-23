import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import { ImagePath } from '../config/ImagePath'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useState } from 'react';


SplashScreen.preventAutoHideAsync();

function DigitalTime (){
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
    'Arimo-Regular': require('../../../assets/fonts/Arimo-Regular.ttf'),
  });

const [label,setlabel] = useState(CurrentTime());


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;


setInterval(function () {
    setlabel(CurrentTime)
}, 1000);


function CurrentTime (){
    const time = new Date()
    return time.toLocaleTimeString()

}


  return(

    <View style={styles.main} onLayout={onLayoutRootView}>
    <View style={styles.background}>
    <ScrollView
        style={{ flex: 1 }}
    contentContainerStyle={{ flexGrow: 1 }}
    showsVerticalScrollIndicator={false}
    bounces={false}
    overScrollMode='never'>

    <LinearGradient
    style={styles.background}
    colors={['#000000','#7557EE']}
    start={{x:0,y:10}}
    end={{x:2,y:10}} // x= jur dek , y=jur chor
    >
    {/* DigitalClock */}

    <View style={styles.container}>
        <View style={styles.box}>
            <View style={styles.glass}></View>
            <Text style={styles.label}>
                {label}
            </Text>
        </View>
    </View>



   
  
 </LinearGradient>
 </ScrollView>
 </View>
 </View>

)
}



const styles = StyleSheet.create({

main:{
    flex:1
},
background:{
    width:"100%",
    flex:1
},
glass:{
    width:230,
    height:210,
    bottom:20,
    borderRadius:500,
    backgroundColor:"rgba(255,255,255,0.2)",
    position:"absolute",
    overflow:"hidden",
},
container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",

},
box:{
    width:250,
    height:250,
    borderRadius:500, 
    backgroundColor:"rgb(229, 201, 201),",
    justifyContent:"center",
    alignItems:"center",
    shadowColor: "#04d697",
    shadowOffset: { width: 8, height:8 },
    shadowOpacity: 2,
    shadowRadius: 25,
    elevation: 3,
},
label:{
    fontFamily:"Montserrat-Bold",
    color:"black",
    fontSize:30,

},





})

export {DigitalTime}
export default DigitalTime