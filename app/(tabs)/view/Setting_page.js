import { View, Text, StyleSheet } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import { Button } from "@react-navigation/elements";

export function Setting_page({ navigation }) {

  const router = useRouter();

  return (
    <LinearGradient
    colors={['#FFFFF0', '#DBDE45']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={{ flex: 1 }}
  >
    <View>
      <View style={styles.iconContainer}>
        <Button onPress={() => router.push('/view/FoodApp')}>Go Back</Button>         
      
      </View>
      <View style={styles.container}>
      <Text style={styles.text}>Still Fixing get out...</Text>
      </View>
    </View>
    
    </LinearGradient>
  )
}



const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color:"Black",
    fontFamily: 'Montserrat-Bold',
  },
  container:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    padding:15
  },
  menu: {
    padding: 20,
    paddingHorizontal: 1,
  },
    iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
    marginRight:170
  }
})

export default Setting_page