import { View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native'
import { ImagePath } from '../config/ImagePath'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';
import { useCallback } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

SplashScreen.preventAutoHideAsync();

function LoginFivePage(params) {
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
        colors={['#000000','#7557EE']}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          bounces={false}
          overScrollMode='never'
        >
          <View style={styles.body}>

                {/* Logo */}
                <View style={styles.logoContainer}>
                  <Image style={styles.logo} source={ImagePath.logo} resizeMode='cover' />
                </View>

                {/* Card */}
                <View>


                  {/* Reactangle */}
                  <Rectangle style={{ top: 550, right:90 }} size={200} backgroundColor="rgba(255, 255, 255, 0.4)" />
                  <Rectangle style={{ top: 480, right:90 }} size={200} backgroundColor="rgba(255, 255, 255, 0.4)" />
                  <Rectangle style={{ top: 430, right:90 }} size={200} backgroundColor="rgba(255, 255, 255, 0.4)" />
                  <Rectangle style={{ top: 370, right:90 }} size={200} backgroundColor="rgba(255, 255, 255, 0.4)" />
                  <Rectangle style={{ top: 520, left:100, transform:[{rotate : '-25deg'}] }} size={200} backgroundColor="rgba(255, 255, 255, 0.4)" />
                  <Rectangle style={{ top: 465, left:100, transform:[{rotate : '-25deg'}] }} size={200} backgroundColor="rgba(255, 255, 255, 0.4)" />


                  {/* Title */}
                  <Text style={styles.text}>Login Account</Text>
                  <Text style={styles.title}>
                  First You must login your account first to continue this app feature
                  </Text>

                  {/* Phone Label */}
                  <InputSection icon="call">Phone Number</InputSection>

                  {/* Phone Input */}
                  <View style={styles.PhoneContainer}>
                    <View style={styles.btncodecountry}>
                      
                      <Text style={{ fontFamily: "Arimo-Regular", color: "white" }}>+885</Text>
                      <Ionicons name="caret-down" size={12} color="white"/>
              
                    </View>
                    <TextInput
                      style={styles.inputphone}
                      placeholder="Enter phone number"
                      keyboardType='numeric'
                    />
                  </View>
                  {/* Sign In */} 
                    <LinearGradient
                    colors={['#4688FF', '#6B46FF']}  // ← colors not color!
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.btnSignIn}>


                      
                      {/* Reactangle Sign In Button */}

                        <Rectangle style={{ top: -60, left:300,
                        transform:[{rotate : '-25deg'}] }} 
                        size={100}
                        backgroundColor="rgba(255, 255, 255, 0.1)" />
                        
                        <Rectangle style={{ top: -85, left:300,
                        transform:[{rotate : '-25deg'}] }} 
                        size={100}
                        backgroundColor="rgba(255, 255, 255, 0.1)" />
                        
                        <Rectangle style={{ top: -60, left:300,
                        transform:[{rotate : '-25deg'}] }} 
                        size={100}
                        backgroundColor="rgba(255, 255, 255, 0.1)" />

                        {/* Left-Side */}

                        <Rectangle style={{ top: -60, right:300,
                        transform:[{rotate : '25deg'}] }} 
                        size={100}
                        backgroundColor="rgba(255, 255, 255, 0.1)" />
                        
                        <Rectangle style={{ top: -85, right:300,
                        transform:[{rotate : '25deg'}] }} 
                        size={100}
                        backgroundColor="rgba(255, 255, 255, 0.1)" />
                        
                        <Rectangle style={{ top: -60, right:300,
                        transform:[{rotate : '25deg'}] }} 
                        size={100}
                        backgroundColor="rgba(255, 255, 255, 0.1)" />

                      
                      <Text style={styles.signin}>Sign In</Text>
                    </LinearGradient>


                  {/* Sign in with */}


                  <View style={styles.account}>
                    <View style={styles.ruler} />
                    <Text style={{ marginHorizontal: 15, fontFamily: "Arimo-Regular", color: "white" }}>
                      Sign in with
                    </Text>
                    <View style={styles.ruler} />
                  </View>

                  {/* Social Buttons */}


                  {/* Goggle */}

                  <View style={{flexDirection:"row", flex:1 }}>
                  <LinearGradient 
                  colors={['#45caab', '#6B46FF']}  // ← colors not color!
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  style={styles.Social}>

                        {/* Rectangle */}
                        
                      

                    <Mybutton icon={ImagePath.goggle} color="white">Google</Mybutton>
                        <Rectangle style={{ top: -140, right:100,
                        transform:[{rotate : '-60deg'}] }} 
                        size={100}
                        backgroundColor="rgba(255,255,255, 0.1)" />
                        
                        <Rectangle style={{ top: -155, right:100,
                        transform:[{rotate : '-60deg'}] }} 
                        size={100}
                        backgroundColor="rgba(255,255,255, 0.1)" />
                        
                        {/* Left Reacangle */}


                        <Rectangle style={{ top: -130, left:100,
                        transform:[{rotate : '60deg'}] }} 
                        size={100}
                        backgroundColor="rgba(255,255,255, 0.1)" />
                        
                        <Rectangle style={{ top: -145, left:100,
                        transform:[{rotate : '60deg'}] }} 
                        size={100}
                        backgroundColor="rgba(255,255,255, 0.1)" />
                        
                        
                        </LinearGradient>


                    {/* Space Button */}

                    <View style={{ width: 16 , overflow:"hidden" }}> </View>
                    {/* -------- */}


                    <LinearGradient
                    colors={['#4bf5d6','#6B46FF']} 
                    start={{x:2 , y:1}}
                    end={{x:1 , y:0}}
                    style={styles.Social}>

                    
                    {/* Facebook btn */}
                        <Rectangle style={{ top: -130, right:100,
                        transform:[{rotate : '-60deg'}] }} 
                        size={100}
                        backgroundColor="rgba(255,255,255, 0.1)" />
                        
                        <Rectangle style={{ top: -145, right:100,
                        transform:[{rotate : '-60deg'}] }} 
                        size={100}
                        backgroundColor="rgba(255,255,255, 0.1)" />

                          
                          {/* Left Reacangle  */}

                        <Rectangle style={{ top: -130, left:100,
                        transform:[{rotate : '60deg'}] }} 
                        size={100}
                        backgroundColor="rgba(255,255,255, 0.1)" />
                        
                        <Rectangle style={{ top: -145, left:100,
                        transform:[{rotate : '60deg'}] }} 
                        size={100}
                        backgroundColor="rgba(255,255,255, 0.1)" />
                    <Mybutton icon={ImagePath.facebook}>Facebook</Mybutton>
                  
                  </LinearGradient>
                  </View>


                  {/* Apple Button */}
                  
                  <Mybutton 
                    style={{ backgroundColor: "black", width: "100%", marginTop: 10 }}
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
          width:590,
          height:700,
          transform: [{ rotate: '25deg' }],
          backgroundColor:params.backgroundColor,
        }, params.style]} />
      );
    }

    function Mybutton(params) {
      return (

        <View style={[{
          flexDirection: "row",
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
          height: 55,
          width: 158,
          marginBottom: 10,
        }, params.style]}>
          <Image source={params.icon} style={{ width: 28, height: 28 }} resizeMode='contain' />
          <Text style={[{
            fontFamily: "Montserrat-Bold",
            fontSize: 15,
            color: "white",
            marginLeft: 8,
          }, params.textStyle]}>
            {params.children}
          </Text>
        </View>
      );
    }

function InputSection(params) {
  return (
    <View style={{
      paddingVertical: 10,
      gap: 10,
      flexDirection: "row",
      alignItems: "center",
    }}>
      <Ionicons name={params.icon} size={15} color="white" />
      <Text style={{
        fontFamily: "Arimo-Regular",
        fontSize: 14,
        color: "white",
      }}>
        {params.children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,          
  },
  background: {
    flex: 1,
    width:"100%"   
  },
  Social:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    overflow:"hidden",    
    height:50,
    shadowColor: "#000000",
    shadowOffset: { width: 3, height:3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
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
  },
  logo: {
    width: 100,
    height: 100,

  },
  text: {
    fontSize: 24,
    marginVertical: 10,
    textAlign: "center",
    color: "white",
    paddingVertical: 10,
    fontFamily: "Montserrat-Bold",
    borderRadius: 20,
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    color: "white",
    fontWeight: "bold",
    marginBottom: 16,
  },
  PhoneContainer: {
    flexDirection: "row",
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderWidth: 1,
    alignItems: "center",
    padding: 10,
    marginBottom: 15,
    
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
  inputphone: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Arimo-Regular",
    color: "white",
    paddingHorizontal: 8,
    
  },
  btnSignIn: {
    height: 50,
    width:339,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow:"hidden",
  },
  signin: {
    color: "white",
    fontSize: 18,
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

export { LoginFivePage }
export default LoginFivePage