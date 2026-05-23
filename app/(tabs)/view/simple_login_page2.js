import {View,StyleSheet,Text,TextInput,ScrollView} from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function LoginTwoPage() {
    const [fontsLoaded] = useFonts({
  'Montserrat-Regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-Bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
  'Taprom': require('../../../assets/fonts/Taprom.ttf'),
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
    <View style={styles.main}>
        <View style={styles.body} onLayout={onLayoutRootView}>
            <ScrollView>
        <Text style={styles.headertitle}>ចូល គណនី</Text>
        <Text style={styles.text}> សូមអ្នកចូលគណនីអ្នកជាមុនសិនទើបធ្វើការចូលក្នុងកម្មវិធីនេះបាន សូមអរគុណ!</Text>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={styles.text}>Password</Text>
        <View style={{flexDirection:"row"}}>
        <TextInput style={styles.input}  secureTextEntry={true}></TextInput>
        <button title='show password' style={{flex:1,borderWidth:0,borderRadius:15,fontSize:10,height:30,marginTop:2,marginRight:15,fontWeight:'bold'}}>Show</button>
        </View>
        <button title='forgot password' style={styles.password}>Forgot Password?</button>
        <button title='sign in' style={styles.signin}>ចុះឈ្មោះ</button>
        <View style={styles.account}>
            <View style={styles.ruler}></View>
                    <Text style={{marginHorizontal:5,fontFamily:"arial"}}>Dont have an account?</Text>
                <View style={styles.ruler}></View>
        </View>
        <View style={{flexDirection:"row"}}>
        <MyButton style={{flex:1,backgroundColor:"#888888",marginRight:15}}>Contact</MyButton>
        <MyButton style={{flex:1,backgroundColor:"#FF5C00"}}>Register</MyButton>
        </View>
        </ScrollView>
        </View>
    </View>
  )
}
function MyButton(props){
    return(
        <View style={[{
            backgroundColor:"#6b46c1",
            borderRadius:50,
            height:40,
            justifyContent:"center",
            alignItems:"center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0, height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4.84,
            elevation: 5,
        },props.style]}>
            <Text style={{
                color:"white",
                fontFamily:"arial",
                fontWeight:"bold",
                fontSize:15,
            }}>{props.children}</Text>
        </View>
    )   
}    

const styles = StyleSheet.create({

    main:{
    height:'100%',
    backgroundColor: '#CCCCCC',
    justifyContent:"center",
    alignItems:"center"
    },
    ruler:{
    flex:1,
    borderBottomColor:"#d9d9d9",
    borderBottomWidth:1,
    },
    account:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginHorizontal:15,
    marginVertical:16,
    },
    contact:{
    fontSize:18,
    color:"white",
    fontFamily:"arial",
    marginLeft:15,
    marginTop:10,
    backgroundColor:"#888888",
    borderRadius:25,
    fontWeight:"bold",
    width:134,
    height:40,
},
    Register:{
    fontSize:18,
    color:"white",
    fontFamily:"Montserrat-Bold",
    marginLeft:130,
    backgroundColor:"#FF5C00",
    borderRadius:25,
    width:134,
    height:40,
},
    body:{
    backgroundColor: '#FFFFFF',
    height:'78%',
    width:'90%',
    borderRadius:20,
},
    headertitle:{
    fontSize:20,
    color:"black",
    marginBottom:10,
    marginLeft:70,
    marginTop:20,
    fontFamily:"Taprom",
},
    text:{
    fontSize:11,
    color:"#a4a2a2",
    fontFamily:"Taprom",
    marginLeft:15,
    marginTop:10,
    marginHorizontal:15,

},
signin:{
    backgroundColor:"#e04662",
    color:"white",
    borderWidth:0,
    fontSize:20,
    height:40,
    marginLeft:15,
    marginRight:15,
    marginTop:20,
    fontFamily:"Taprom",
    borderRadius:10,
},
  password:{
    backgroundColor:"transparent",
    color:"#e04662",
    fontSize:10,
    borderWidth:0,
    fontWeight:"bold",
    height:10,
    marginLeft:150,
    marginTop:10,
  },
  input:{
    borderColor:"#CCCCCC",
    borderWidth:1,
    borderRadius:5,
    padding:10,
    marginHorizontal:15,
    },
})