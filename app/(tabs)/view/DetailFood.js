import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DetailFood(params) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState('Medium');
  const { title, price, status, image } = useLocalSearchParams();
  const sizes = ['Small', 'Medium', 'Large'];
  return (
    <View style={styles.main}>

      {/* Header Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={styles.foodImage}
          resizeMode='contain'
        />

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
        >
          <AntDesign name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>

        {/* Title Row */}
        <View style={styles.titleRow}>
          <View>
            <Text style={styles.foodName}>{title}</Text>
            <Text style={styles.foodStatus}>{status}</Text>
          </View>
          <Text style={styles.foodPrice} fontSize={5}>{price}</Text>
        </View>

        {/* Description */}
        <Text style={styles.desc}>
          A delicious combo meal with crispy fried chicken, fresh fries, and a refreshing drink. Perfect for one person!
        </Text>

        {/* Size Selection */}
        <Text style={styles.sectionTitle}>Choose Size</Text>
        <View style={styles.sizeRow}>
          {sizes.map((size) => (
            <TouchableOpacity
              key={size}
              onPress={() => setSelected(size)}
              style={[
                styles.sizeBtn,
                selected === size && styles.sizeBtnActive
              ]}
            >
              <Text style={[
                styles.sizeTxt,
                selected === size && styles.sizeTxtActive
              ]}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quantity */}
        <Text style={styles.sectionTitle}>Quantity</Text>
        <View style={styles.qtyRow}>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => quantity > 1 && setQuantity(quantity - 1)}
          >
            <Text style={styles.qtyBtnTxt}>−</Text>
          </TouchableOpacity>

          <Text style={styles.qtyNum}>{quantity}</Text>

          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Text style={styles.qtyBtnTxt}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Total */}
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total Price</Text>
          <Text style={styles.totalPrice}>
           ${(parseFloat(price.replace(/[^0-9.]/g, '')) * quantity).toFixed(2)}
          </Text>
        </View>

        {/* Add to Cart Button */}
        <LinearGradient
          colors={['#FFA500', '#DBDE45']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.cartBtn}
        >
          <TouchableOpacity
            style={styles.cartBtnInner}
            onPress={() => router.back()}
          >
            <AntDesign name="shoppingcart" size={20} color="white" />
            <Text style={styles.cartBtnTxt}>Add to Cart</Text>
          </TouchableOpacity>
        </LinearGradient>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFFFF0',
  },

  // Image Section
  imageContainer: {
    height: 280,
    backgroundColor: '#FFF9E6',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  foodImage: {
    width: '80%',
    height: '80%',
  },
  backBtn: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  // Content
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  // Title
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  foodName: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    color: 'black',
  },
  foodStatus: {
    fontFamily: 'Arimo-Regular',
    fontSize: 13,
    color: 'gray',
    marginTop: 4,
  },
  foodPrice: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    paddingHorizontal:10,
    color: '#FF5C00',
  },

  // Description
  desc: {
    fontFamily: 'Arimo-Regular',
    fontSize: 14,
    color: 'gray',
    lineHeight: 22,
    marginBottom: 20,
  },

  // Section Title
  sectionTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: 'black',
    marginBottom: 12,
  },

  // Size
  sizeRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  sizeBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'white',
  },
  sizeBtnActive: {
    backgroundColor: '#FFA500',
    borderColor: '#FFA500',
  },
  sizeTxt: {
    fontFamily: 'Arimo-Regular',
    fontSize: 14,
    color: 'gray',
  },
  sizeTxtActive: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },

  // Quantity
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 24,
  },
  qtyBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyBtnTxt: {
    color: 'white',
    fontSize: 22,
    lineHeight: 26,
  },
  qtyNum: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: 'black',
    minWidth: 30,
    textAlign: 'center',
  },

  // Total
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  totalLabel: {
    fontFamily: 'Arimo-Regular',
    fontSize: 15,
    color: 'gray',
  },
  totalPrice: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    color: '#FF5C00',
  },

  // Cart Button
  cartBtn: {
    borderRadius: 16,
    marginBottom: 40,
  },
  cartBtnInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 16,
  },
  cartBtnTxt: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: 'white',
  },
});