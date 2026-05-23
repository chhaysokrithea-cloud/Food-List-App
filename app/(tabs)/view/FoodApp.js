import { View, Text, StyleSheet,ScrollView, TouchableOpacity} from 'react-native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { AntDesign } from '@expo/vector-icons';
import { useCallback, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import ItemFood from '../../../components/ItemFood';
import IconBtn from './IconBtn';
import { useRouter } from 'expo-router';
SplashScreen.preventAutoHideAsync();

function FoodApp({navigation,Press,params}){
  const [cart, setCart] = useState([]); 
  const router = useRouter();
  const [badge,SetBadge] = useState(0);
function addToCart(item){
  setCart([...cart, item]);
  SetBadge(badge + 1);
}
  const data=[
  {
    id:1,
    title:"Combo Single",
    status:"202 Sold",
    price:"$3.50",
    image: "https://www.freeiconspng.com/thumbs/fast-food-png/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png",
  },
    {
    id:2,
    title:"Combo Couple",
    status:"1K+ Sold",
    price:"$8.90",
    image: "https://png.pngtree.com/png-clipart/20240103/original/pngtree-group-of-fast-food-products-png-image_14008130.png"
  },
    {
    id:3,
    title:"Set Family",
    status:"12 Sold",
    price:"$25.00",
    image: "https://www.kindpng.com/picc/m/182-1823082_fast-food-restaurant-junk-food-kfc-hamburger-junk.png"
  },
  {
    id:4,
    title:"នំបញ្ជុក",
    status:"349 Sold",
    price:"$5.00",
    image: "https://images.deliveryhero.io/image/fd-kh/LH/kbs3-listing.jpg"
  },
    {   id:5,
    title:"ស្ងោម្រះ",
    status:"2 Sold",
    price:"$25.00",
    image: "https://i.ytimg.com/vi/m34IwwyHplI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDfRigs0Wm08_QHMIxiZ0mihaEmaw"
  },
  {
    id:6,
    title:"ត្រីអាំង",
    status:"28 Sold",
    price:"$1.60",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-iVA9qVOlpT_xS15qSo-j544zxvHT3AZbA&s"
  },

]



  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
    'Arimo-Regular': require('../../../assets/fonts/Arimo-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

return(


    
    <LinearGradient
    colors={['#FFFFF0', '#DBDE45']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={{ flex: 1 }}
  >
   
      
    
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={true}
    >
      <TouchableOpacity onPress={Press}>
      <View style={styles.main} onLayout={onLayoutRootView}>

        {/* Top Bar */}
        <IconBtn badge={String(badge)} style={{width:30, height:30}} >
        <View style={styles.iconContainer}>
          <AntDesign 
            
          name="align-left" 
          
          color="black" 
          
          size={20} 
          
          style={styles.menu} 
          onPress={() => router.push('/view/setting_page')}/>
          
          <Text style={styles.title}>Klean Genz</Text>
          
          <AntDesign 
          
          name="shop" 
          
          color="black" 
          
          size={20} 
          
          style={styles.shop}
          onPress={() => router.push({ 
            pathname: '/view/CartPage',
            params: {
              cartData: JSON.stringify(cart),  // ← send cart data!
            }
          })}
          
          />
        </View>
        </IconBtn>

        {/* Food List */}
         <Text style={styles.text}>Fast Food</Text>
        <View style={{ paddingVertical: 10 }}>
          
        {data.length === 0 && <Text>No Food!</Text>}

        

          {data.filter(obj=> [1,2,3].includes(obj.id)).map((obj, index) =>
            <ItemFood
              key={index}
              model={obj}
              onPress={() => addToCart(obj)}
              Press={() => router.push({
                pathname: '/view/DetailFood',
                params: {      
                  title: obj.title,
                  price: obj.price,
                  status: obj.status,
                  image: obj.image,
                }
              })}
            />
          )}
        <Text style={styles.text}>Khmer Food</Text>
                <View style={{ paddingVertical: 10 }}>
          
        {data.length === 0 && <Text>No Food!</Text>}


            {data.filter(obj => [4 , 5, 6].includes(obj.id)).map((obj, index) =>
              <ItemFood
                key={index}
                model={obj}
                onPress={() => addToCart(obj)}
                onItemPress={() => router.push({
                  pathname: '/view/DetailFood',
                  params: {
                    title: obj.title,
                    price: obj.price,
                    status: obj.status,
                    image: obj.image,
                  }
                })}
              />
            )}
          </View>
        </View>

      </View>
     </TouchableOpacity>
    </ScrollView>

  </LinearGradient>

  
)
}


const styles = StyleSheet.create({

  main: {
    flex: 1,
    width: "100%",
  },
  menu: {
    padding: 20,
    paddingHorizontal: 1,
  },
  text:{
    fontSize:15,
    fontFamily:"Montserrat-Bold",
    marginTop:10,
    color:"red",
    paddingHorizontal:25,
    backgroundColor: "transparent",
    textShadowColor: 'rgba(203, 17, 48, 0.95)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15,
  },
  
  shop: {
    padding: 20,
    paddingHorizontal: 1,
  },
  shadowtext: {
    backgroundColor: "transparent",
    textShadowColor: 'rgba(16, 21, 4, 0.95)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15,
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 17,
    color: "rgb(39, 39, 37)",
    backgroundColor: 'transparent',
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 60,
    paddingTop: 10,
  }


});

export {FoodApp}
export default FoodApp