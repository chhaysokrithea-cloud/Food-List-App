import { View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native'
import { ImagePath } from '../config/ImagePath'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';
import { useCallback } from 'react';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

SplashScreen.preventAutoHideAsync();

function LoginFourPage(params) {
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

      {/* ✅ Removed width/height props - only use style */}
      <LinearGradient
        style={styles.background}
        colors={['#4688ff','#6b46ff']}
        
        >
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
            <View style={styles.content}>

              {/* Blur */}
              <BlurView
                intensity={50}
                tint="light"
                style={styles.Blur}
                reducedTransparencyFallbackColor="white"
              />

              {/* Circles */}
              <MyCircle style={{ top: -100, right: -60 }} size={200} />
              <MyCircle style={{ top: -100, left: -60 }} size={200} />
              <MyCircle style={{ top: -25, right: -130 }} size={200} />
              <MyCircle style={{ top: 430, right: 80 }} size={200} />
              <MyCircle style={{ top: 290, right: -130 }} size={300} />


              {/* Title */}
              <Text style={styles.text}>Login Account</Text>
              <Text style={styles.title}>
                Hello you must login your account first to continue this app feature
              </Text>

              {/* Phone Label */}
              <InputSection icon="call">Phone Number</InputSection>

              {/* Phone Input */}
              <View style={styles.PhoneContainer}>
                <View style={styles.btncodecountry}>
                  <Text style={{ fontFamily: "Arimo-Regular", color: "white" }}>+885</Text>
                  <Ionicons name="caret-down" size={12} color="white" />
                </View>
                <TextInput
                  style={styles.inputphone}
                  placeholder="Enter phone number"
                  placeholderTextColor="rgba(255,255,255,0.5)"
                  keyboardType='numeric'
                />
                <View style={styles.btnResend}>
                  <Text style={{
                    color: "#FFFFFF",
                    fontSize: 13,
                    fontFamily: "Montserrat-Bold",
                    textAlign: "center",
                  }}>Resend</Text>
                </View>
              </View>

              {/* Sign In */}
              <View style={styles.btnSignIn}>
                <Text style={styles.signin}>Sign In</Text>
              </View>

              {/* Sign in with */}
              <View style={styles.account}>
                <View style={styles.ruler} />
                <Text style={{ marginHorizontal: 15, fontFamily: "Arimo-Regular", color: "white" }}>
                  Sign in with
                </Text>
                <View style={styles.ruler} />
              </View>

              {/* Social Buttons */}
              <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Mybutton icon={ImagePath.goggle}>Google</Mybutton>
                <View style={{ width: 16 }} />
                <Mybutton icon={ImagePath.facebook}>Facebook</Mybutton>
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

function MyCircle(params) {
  return (
    <View style={[{
      position: "absolute",
      width: params.size,
      height: params.size,
      borderRadius: params.size / 2,
      backgroundColor: "rgba(255,255,255,0.15)",
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
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderRadius: 8,
      height: 55,
      width: 158,
      marginBottom: 10,
    }, params.style]}>
      <Image source={params.icon} style={{ width: 28, height: 28 }} resizeMode='contain' />
      <Text style={[{
        fontFamily: "Montserrat-Bold",
        fontSize: 15,
        color: "black",
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
  content: {
    width: "100%",         
    padding: 24,
    borderRadius: 25,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  Blur: {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    borderRadius: 25,
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
    borderColor: "rgba(255,255,255,0.3)",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    padding: 3,
    marginBottom: 15,
  },
  btncodecountry: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
    gap: 4,
  },
  inputphone: {
    flex: 1,
    fontSize: 14,
    minWidth: 0,
    fontFamily: "Arimo-Regular",
    color: "white",
    paddingHorizontal: 8,
  },
  btnResend: {
    paddingHorizontal: 8,
    flexShrink: 0,
    backgroundColor: "gray",
    borderRadius: 8,
    height: "100%",
    width: 70,
  },
  btnSignIn: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 8,
    height: 50,
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  signin: {
    color: "black",
    fontSize: 18,
    fontFamily: "Montserrat-Bold",
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

export { LoginFourPage }
export default LoginFourPage