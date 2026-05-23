import { useCallback } from 'react';
import { View, Text, StyleSheet,TextInput} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();

export default function LoginThreePage(params) {

const [fontsLoaded] = useFonts({
  'Montserrat-Regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-Bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
  'Arimo-Regular': require('../../../assets/fonts/Arimo-Regular.ttf'),
});

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
 
  return (
    <View style={styles.main} onLayout={onLayoutRootView}>
      <View style={styles.header}>
          <Text style={styles.welcome}>Welcome</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Login Account</Text>
        <Text style={styles.title}>Hello, you must login first to be able to use the application and enjoy all the features.</Text>
        <InputSection icon="call">Phone Number</InputSection>
        <View style={styles.PhoneContainer}>
          <View style={styles.btncodecountry}>
            <Text>+885</Text>
           <Ionicons name="caret-down" size={12} color="black"/>
          </View>
          <TextInput style={styles.inputphone} placeholder="Enter phone number" keyboardType='numeric'></TextInput>
          <View style={styles.btnResend}>
            <Text style={styles.btnResend}>Resend</Text>
          </View>
        </View>
        <InputSection icon="mail">Verify Code</InputSection>
        
        <Boxnumber></Boxnumber>
      </View>
    </View>
    
  );
}
function InputSection(params) {
  return (
    <View style={{paddingVertical:2,gap:10,flexDirection:"row",alignItems:"center",fontFamily:"Arimo-Regular",fontSize:14,color:"#888888"}}>
      <View style={{paddingVertical:10 ,flexDirection:"row",alignItems:"center"}}>
     <Ionicons name={params.icon} size={15} color="#888888"/>

      </View>
      {params.children}
    </View>
  );
}
function Boxnumber(params){
  return(
    <View>
      <View style={{flexDirection:"row",paddingVertical:15,gap:15}}>
        <TextInput keyboardType='numeric' style={styles.boxnumber} maxLength={1}></TextInput>
        <TextInput style={styles.boxnumber}maxLength={1}></TextInput>
        <TextInput style={styles.boxnumber}maxLength={1}></TextInput>
        <TextInput style={styles.boxnumber}maxLength={1}></TextInput>
      </View>
      {params.children}
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
   height: '100%',
    backgroundColor: '#CCCCCC',
  },
  boxnumber:{
    flexDirection:"row",
    borderColor:"#CCCCCC",
    borderWidth:1,
    borderRadius:8,
    width:50,
    height:50,
    textAlign:"center"
  },
  PhoneContainer:{
  flexDirection:"row",
  borderColor:"#CCCCCC",
  borderWidth:1,
  borderRadius:8,
  alignItems:"center",
  padding:3,
  marginBottom: 15,
},
btncodecountry:{
  flexDirection:"row",
  backgroundColor:"rgba(218,218,218,0.5)",
  borderRadius:8,
  alignItems:"center",
  paddingHorizontal:8,
  paddingVertical:8,
},
inputphone:{
  flex:1,              // ← takes only available space
  paddingHorizontal:8,
  fontSize:14,
  minWidth:0,
  fontFamily:"Arimo-Regular"
},
btnResend:{
  paddingHorizontal: 8,
  flexShrink: 0,       // ← never shrink Resend
  flexGrow: 0,
  backgroundColor: "#6B46FF",
  color:"#FFFFFF",
  borderRadius:8,
  height:"100%",
  alignContent:"center",
  fontSize:10,
  fontFamily:"Montserrat-Bold"
},
  header: {
  height:170,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#CCCCCC',
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
      color: 'white',
  },
  text : {
    fontSize: 20,
    marginLeft: 50,
    fontWeight: 'bold',
    marginVertical:5
  },
  title:{
    fontSize: 12,
    textAlign: 'center',
    paddingVertical:15,
    marginVertical:5,
    color:"#888888"
  },
body: {
  flex: 1,
  paddingHorizontal: 20,  // ← change padding to paddingHorizontal
  paddingTop: 20,
  backgroundColor: '#FFFFFF',
  borderRadius: 20,
},
});