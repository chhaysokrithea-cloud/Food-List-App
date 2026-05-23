import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function CartPage() {
  const router = useRouter();
  const { cartData } = useLocalSearchParams();

  // Parse cart data
  const cart = cartData ? JSON.parse(cartData) : [];

  // Calculate total
  const total = cart.reduce((sum, item) => {
    return sum + parseFloat(item.price.replace(/[^0-9.]/g, ''));
  }, 0);

  return (
    <View style={styles.main}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
        >
          <AntDesign name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Cart 🛒</Text>
        <Text style={styles.itemCount}>{cart.length} items</Text>
      </View>

      {/* Cart List */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Empty Cart */}
        {cart.length === 0 && (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyIcon}>🛒</Text>
            <Text style={styles.emptyText}>Your cart is empty!</Text>
            <TouchableOpacity
              style={styles.shopBtn}
              onPress={() => router.back()}
            >
              <Text style={styles.shopBtnTxt}>Browse Food</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Cart Items */}
        {cart.map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <Image
              source={{ uri: item.image }}
              style={styles.itemImage}
              resizeMode='contain'
            />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.title}</Text>
              <Text style={styles.itemStatus}>{item.status}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          </View>
        ))}

      </ScrollView>

      {/* Bottom Total */}
      {cart.length > 0 && (
        <View style={styles.bottomBar}>
          <View>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
          </View>
          <LinearGradient
            colors={['#FFA500', '#DBDE45']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.checkoutBtn}
          >
            <TouchableOpacity style={styles.checkoutBtnInner}>
              <Text style={styles.checkoutTxt}>Checkout →</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFFFF0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#FFFFF0',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backBtn: {
    width: 40, height: 40,
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: 'black',
  },
  itemCount: {
    fontFamily: 'Arimo-Regular',
    fontSize: 13,
    color: 'gray',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  itemInfo: {
    flex: 1,
    paddingHorizontal: 12,
  },
  itemName: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: 'black',
  },
  itemStatus: {
    fontFamily: 'Arimo-Regular',
    fontSize: 13,
    color: 'gray',
    marginVertical: 4,
  },
  itemPrice: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    color: '#FF5C00',
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyIcon: {
    fontSize: 60,
    marginBottom: 16,
  },
  emptyText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
  shopBtn: {
    backgroundColor: '#FFA500',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  shopBtnTxt: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    fontSize: 15,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 10,
  },
  totalLabel: {
    fontFamily: 'Arimo-Regular',
    fontSize: 13,
    color: 'gray',
  },
  totalPrice: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    color: '#FF5C00',
  },
  checkoutBtn: {
    borderRadius: 12,
  },
  checkoutBtnInner: {
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  checkoutTxt: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: 'white',
  },
});