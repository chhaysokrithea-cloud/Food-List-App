import { View, Text, TextInput, TouchableOpacity, 
StyleSheet, 
ActivityIndicator, 
KeyboardAvoidingView, 
Platform,
Image,
ScrollView
} from 'react-native'

import { useState ,useCallback} from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function LoginPage_Interface_api() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin() {
    // Validate fields
    if (!username || !password) {
      setError('Please fill in all fields!');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const credentials = { username, password};

      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      if (data.token) {
        // Login success — go to FoodApp!
        console.log('Token:', data.token);
        router.replace('/view/FoodApp');
      
    } else {
        // Login failed
        setError('Wrong username or password!');
      }

    } catch (err) {
      setError('Network error — please try again!');
      console.log('Login error:', err);
    } finally {
      setLoading(false);
    }
  }

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
    <LinearGradient
      colors={['#FFFFF0', '#DBDE45']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.main}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={true}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >

        {/* Header */}
        <View style={styles.header} onLayout={onLayoutRootView}>
          <View style={styles.logoBox}>
            <Image 
              source={{uri:"https://techboard.com.au/wp-content/uploads/2024/07/Klean-logo.jpeg"}}
              resizeMode='cover'
              style={{width:80,height:80,borderRadius:25}}
            ></Image>
          
          </View>
          <Text style={styles.appName}>Klean Genz</Text>
          <Text style={styles.tagline}>Order food you love!</Text>
        </View>

        {/* Card */}
        <View style={styles.card}>

          <Text style={styles.loginTitle}>សូមស្វាគមន៍</Text>
          <Text style={styles.loginSub}>Sign in to continue</Text>

          {/* Error Message */}
          {error ? (
            <View style={styles.errorBox}>
              <Ionicons name="alert-circle" size={16} color="#FF5C00" />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}

          {/* Username Input */}
          <View style={styles.inputWrapper}>
            <Ionicons name="person-outline" size={18} color="gray" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="mor_2314"
              placeholderTextColor="#aaa"
              value={username}
              onChangeText={(text) => setUsername(text)}
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={18} color="gray" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="83r5^_"
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!showPassword}
            />
            {/* Show/Hide Password */}
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={18}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          {/* Hint */}
          <Text style={styles.hint}>
            💡 Try: username = <Text style={styles.hintBold}>mor_2314</Text> password = <Text style={styles.hintBold}>83r5^_</Text>
          </Text>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginBtnWrapper}
            onPress={handleLogin}
            disabled={loading}
          >
            <LinearGradient
              colors={['#FFA500', '#DBDE45']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.loginBtn}
            >
              {loading ? (
                <ActivityIndicator color="white" size="small" />
              ) : (
                <Text style={styles.loginBtnText}>Sign In</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Register */}
          <TouchableOpacity style={styles.registerBtn}>
            <Text style={styles.registerText}>
              Dont have an account?{' '}
              <Text style={styles.registerLink}>Register</Text>
            </Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
      </ScrollView>
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  // Header
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoBox: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 12,
  },
  logoText: {
    fontSize: 40,
  },
  appName: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 28,
    color: 'black',
    marginBottom: 4,
  },
  tagline: {
    fontFamily: 'Arimo-Regular',
    fontSize: 14,
    color: 'gray',
  },

  // Card
  card: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  loginTitle: {
    fontFamily: 'Siemreap',
    fontSize: 22,
    color: 'black',
    marginBottom: 4,
  },
  loginSub: {
    fontFamily: 'Arimo-Regular',
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },

  // Error
  errorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF0EB',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    gap: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#FF5C00',
  },
  errorText: {
    fontFamily: 'Arimo-Regular',
    fontSize: 13,
    color: '#FF5C00',
    flex: 1,
  },

  // Input
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 4,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#eee',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'Arimo-Regular',
    fontSize: 15,
    color: 'black',
    paddingVertical: 12,
  },

  // Hint
  hint: {
    fontFamily: 'Arimo-Regular',
    fontSize: 11,
    color: 'gray',
    marginBottom: 20,
    backgroundColor: '#FFFDE7',
    padding: 10,
    borderRadius: 8,
    lineHeight: 18,
  },
  hintBold: {
    fontFamily: 'Montserrat-Bold',
    color: '#FFA500',
  },

  // Login Button
  loginBtnWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#FFA500',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  loginBtn: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtnText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: 'white',
  },

  // Divider
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#eee',
  },
  dividerText: {
    fontFamily: 'Arimo-Regular',
    fontSize: 13,
    color: 'gray',
  },

  // Register
  registerBtn: {
    alignItems: 'center',
  },
  registerText: {
    fontFamily: 'Arimo-Regular',
    fontSize: 14,
    color: 'gray',
  },
  registerLink: {
    fontFamily: 'Montserrat-Bold',
    color: '#FFA500',
  },
});