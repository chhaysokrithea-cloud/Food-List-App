import { View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native'
import { ImagePath } from '../config/ImagePath'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';
import { useCallback } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

SplashScreen.preventAutoHideAsync();

function LoginSixPage(params) {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
    'Arimo-Regular': require('../../../assets/fonts/Arimo-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.main} onLayout={onLayoutRootView}>

      <LinearGradient
        style={styles.background}
        colors={['rgba(255, 180, 137, 1)','#FF5C00']}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          bounces={false}
          overScrollMode='never'
        >
          <View style={styles.body}>
                

            <Circle style={{top:-100,right:100}}
            size={100}
            backgroundColor="rgba(255,255,255,0.1)"/>

            <Circle style={{top:100,right:200}}
            size={100}
            backgroundColor="rgba(255,255,255,0.1)"/>
            
            <Circle style={{top:200,right:200}}
            size={100}
            backgroundColor="rgba(255,255,255,0.1)"/>
            
            <Circle style={{top:250,right:200}}
            size={100}
            backgroundColor="rgba(255,255,255,0.1)"/>
            
            <Circle style={{top:-10,right:200}}
            size={100}
            backgroundColor="rgba(255,255,255,0.1)"/>
            
            <Circle style={{top:20,right:200}}
            size={100}
            backgroundColor="rgba(255,255,255,0.1)"/>
            
            <Circle style={{top:130,right:150}}
            size={100}
            backgroundColor="rgba(255,255,255,0.1)"/>
            
            <Circle style={{top:200,right:180}}
            size={100}
            backgroundColor="rgba(255,255,255,0.1)"/>




                {/* Reacangle */}
                <Rectangle style={{top :300 , right :27}}
                size={200}
                backgroundColor="rgba(255,255,255,0.4)"/>
                
                {/* Logo */}

                <View style={styles.logoContainer}>
                  <Image style={styles.logo} source={ImagePath.logo} resizeMode='cover' />
                </View>


                {/* Head title */}
                <Text style={styles.text}>ចូលគណនី</Text>

                {/* Card */}

                
                
                <View style={styles.card} >
                
                 <View style={styles.emailCard}>

                <TextInput style={styles.email} placeholder='Username'></TextInput>
                </View>
                

                    {/* Shadow Wrapper */}
                    <View style={{
                    marginLeft: 160,
                    marginVertical: 15,
                    width: 113,
                    borderRadius:25,
                    shadowColor: "#000000",
                    shadowOffset: { width: 3, height: 5 },
                    shadowOpacity: 0.25,
                    shadowRadius: 5,
                    elevation: 5,
                    }}>
                    {/* Red Button */}
                    <View style={{
                        backgroundColor: "rgba(255, 0, 0, 1)",
                        width: 113,
                        height: 50,
                        borderRadius: 25,
                        overflow: "hidden",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        {/* Circle */}
                        <Circle
                        style={{ top: 10, left: 70 }}
                        size={70}
                        backgroundColor="rgba(255,255,255,0.2)"
                        />

                        <Circle
                        style={{ top: 10, left: 60 }}
                        size={60}
                        backgroundColor="rgba(255,255,255,0.2)"
                        />

                                                {/* Circle */}
                        <Circle
                        style={{ top: -10, left: 50 }}
                        size={70}
                        backgroundColor="rgba(255,255,255,0.2)"
                        />

                        <Circle
                        style={{ top: -20, left: 60 }}
                        size={60}
                        backgroundColor="rgba(255,255,255,0.2)"
                        />
                        




                        {/* Text */}
                        <Text style={{
                        color: "white",
                        fontFamily: "Taprom",
                        fontSize: 18,
                        textAlign: "center",
                        }}>ចូល</Text>
                    </View>
                    </View>





                <View style={{width:15}}></View>
                
                
                <View style={styles.passwordCard}>
                <TextInput style={styles.password} placeholder='Password'></TextInput>
                </View>
                
                
                <View style={{
                backgroundColor:"rgba(255, 92, 0, 1),rgba(255, 180, 137, 1)",
                width: 113,
                height: 50,
                borderRadius: 25,
                overflow: "hidden",
                marginLeft:98,
                marginVertical:8,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000000",
                shadowOffset: { width: 3, height:3 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 3,}}>
                
                
                {/* Circle */}
                        <Circle
                        style={{ top: 10, left: 70 }}
                        size={70}
                        backgroundColor="rgba(255,255,255,0.2)"
                        />

                        <Circle
                        style={{ top: -20, left: 60 }}
                        size={60}
                        backgroundColor="rgba(255,255,255,0.1)"
                        />

                                                {/* Circle */}
                        <Circle
                        style={{ top: -50, left: 50 }}
                        size={70}
                        backgroundColor="rgba(255,255,255,0.1)"
                        />

                        <Circle
                        style={{ top: -20, left: 60 }}
                        size={60}
                        backgroundColor="rgba(255,255,255,0.1)"
                        />
                    <Text style={styles.btnregister}>ចុះឈ្មោះ</Text>
                </View>
                
                
                
                {/* Sign in with */}

                <View style={styles.account}>
                <View style={styles.ruler} />
                <Text style={{ marginHorizontal: 15, fontFamily: "Arimo-Regular", color: "white" }}>
                    Sign in with
                </Text>
                <View style={styles.ruler} />
                </View>
                
                <View style={{flexDirection:"row",}}>
                <View style={{
                        width: 150,
                        height: 50,
                        borderRadius: 25,
                        overflow: "hidden",
                        justifyContent: "center",
                        alignItems: "center",
                        shadowColor: "#000000",
                        shadowOffset: { width: 3, height:3 },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 3,
                        
                  }}>
                        
                        
                        {/* Circle */}
                        <Circle
                        style={{ top: 10, left: 70 }}
                        size={70}
                        backgroundColor="rgba(255,255,255,0.2)"
                        />

                        <Circle
                        style={{ top: -20, left: 60 }}
                        size={60}
                        backgroundColor="rgba(255,255,255,0.1)"
                        />

                                                {/* Circle */}
                        <Circle
                        style={{ top: -50, left: 50 }}
                        size={70}
                        backgroundColor="rgba(255,255,255,0.1)"
                        />

                        <Circle
                        style={{ top: -20, left: 60 }}
                        size={60}
                        backgroundColor="rgba(255,255,255,0.1)"
                        />

                    <Mybutton icon={ImagePath.goggle} style={styles.Social}>Goggle</Mybutton>
                </View>


                 <View style={{
                  overflow:"hidden",
                  width:150,
                  height:50,
                  justifyContent:"center",
                  alignItems:"center",
                  borderRadius:25,
                  shadowColor: "#000000",
                  shadowOffset: { width: 3, height:3 },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 3,
                 }}>

                                          {/* Circle */}
                        <Circle
                        style={{ top: 10, left: 70 }}
                        size={70}
                        backgroundColor="rgba(255,255,255,0.2)"
                        />

                        <Circle
                        style={{ top: -20, left: 60 }}
                        size={60}
                        backgroundColor="rgba(255,255,255,0.1)"
                        />

                                                {/* Circle */}
                        <Circle
                        style={{ top: -50, left: 50 }}
                        size={70}
                        backgroundColor="rgba(255,255,255,0.1)"
                        />

                        <Circle
                        style={{ top: -20, left: 60 }}
                        size={60}
                        backgroundColor="rgba(255,255,255,0.1)"
                        />

                    <Mybutton icon={ImagePath.facebook} style={styles.Social}>Facebook</Mybutton>
                </View>
                </View>


                <Mybutton 
                style={{ backgroundColor: "black", width: "85%", marginTop: 10,marginLeft:25 ,borderRadius:25}}
                textStyle={{ color: "white" }}
                icon={ImagePath.apple}
            >
                Sign In With Apple
            </Mybutton>
                </View>
        </View>
    </ScrollView>
    </LinearGradient>
</View>


        
      );
    }

    function Rectangle(params) {
      return (
        <View style={[{
          position: "absolute",
          width:550,
          height:200,
          borderRadius:100,
        //   transform: [{ rotate: '25deg' }],
          backgroundColor:params.backgroundColor,
        }, params.style]} />
      );
    }
        function Circle(params) {
      return (
        <View style={[{
          position: "absolute",
          width:200,
          height:200,
          borderRadius:1000,
        //   transform: [{ rotate: '25deg' }],
          backgroundColor:params.backgroundColor,
        }, params.style]} />
      );
    }

    function Mybutton(params) {
      return (

        <View style={[{
          flexDirection: "row",
          paddingHorizontal:15,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
          height: 55,
          width: 158,
          marginBottom:10
        }, params.style]}>
          <Image source={params.icon} style={{ width: 28, height: 28, marginTop:5 }} resizeMode='contain' />
          <Text style={[{
            fontFamily: "Montserrat-Bold",
            fontSize: 15,
            marginTop:5,
            justifyContent:"center",
            color: "white",
            marginLeft: 8,
          }, params.textStyle]}>
            {params.children}
          </Text>
        </View>
      );
    }

const styles = StyleSheet.create({
  main: {
    flex: 1,          
  },
  btnregister:{
    justifyContent:"center",
    fontFamily:"Taprom",
    color:"white",
    fontSize:16
    
  },
  emailCard:{
    marginTop:40,
    marginRight:35,
    paddingHorizontal:25,
    paddingVertical:2,
    overflow:"hidden"
  },
  passwordCard:{
    flexDirection:"column",
    paddingVertical:10,
    paddingHorizontal:20
  },
  email:{
    width:210,
    height:45,
    borderTopRightRadius:50,
    borderBottomLeftRadius:50,
    backgroundColor:"rgba(255, 255, 255, 0.5)",
    fontSize: 14,
    fontFamily: "Arimo-Regular",
    color: "rgba(121, 121, 121, 0.7)",
    paddingHorizontal:24,
    textAlign:"left",
    justifyContent:"center",

  },
    password:{
    width:210,
    height:40,
    borderTopLeftRadius:50,
    borderBottomRightRadius:50,
    backgroundColor:"rgba(255, 255, 255, 0.5)",
    fontSize: 14,
    fontFamily: "Arimo-Regular",
    color: "rgba(121, 121, 121, 0.7)",
    paddingHorizontal:25,
    textAlign:"left",
    justifyContent:"center",

  },
  background: {
    flex: 1,
    width:"100%"   
  },
  Social:{
    textAlign:"center",
    padding:10,
    height:50,
    borderRadius:25,
  },
  body: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent:"center",
    paddingHorizontal: 16,
    paddingBottom: 40,
    paddingTop: 20,
  },
  logoContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 25,
    overflow: "hidden",
    marginTop: 60,
    marginBottom: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 3, height:3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  logo: {
    width: 100,
    height: 100,

  },
  text: {
    fontSize: 23,
    marginVertical: 10,
    textAlign: "center",
    color: "white",
    paddingVertical: 4,
    fontFamily: "Taprom",
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    color: "white",
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    flex:1,
    flexDirection:"column", 
  },
  btncodecountry: {
    flexDirection: "row",
    backgroundColor: "rgba(218, 218, 218, 0.2)",
    alignItems: "center",
    height:40,
    width:83,
    paddingHorizontal: 8,
    paddingVertical: 8,
    shadowColor: "#000000",
    shadowOffset: { width: 3, height:3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },

  signin: {
    color: "white",
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
  },
  ruler: {
    flex: 1,
    borderBottomColor: "#DADADA",
    borderBottomWidth: 1,
  },
  account: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
    width: "100%",
  },
});

export { LoginSixPage }
export default LoginSixPage