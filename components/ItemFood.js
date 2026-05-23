import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function ItemFood({ model, onPress, Press }) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
      }}>

      {/* Food Image */}
      <Image
        source={{ uri: model.image }}
        style={{ width: 90, height: 90, borderRadius: 12 }}
        resizeMode='cover'
      />

      {/* Food Info */}
      <View style={{ flex: 1, paddingHorizontal: 12 }}>

        <Text style={{
          fontFamily: 'Montserrat-Bold',
          fontSize: 16,
          color: 'black',
        }}>{model.title}</Text>

        <Text style={{
          fontFamily: 'Arimo-Regular',
          fontSize: 13,
          color: 'gray',
          marginVertical: 4,
        }}>{model.status}</Text>

        <Text style={{
          fontFamily: 'Montserrat-Bold',
          fontSize: 14,
          color: '#FF5C00',
        }}>{model.price}</Text>

      </View>

      {/* + Button */}
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: '#FFA500',
          width: 36,
          height: 36,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 8,
        }}
      >
        <Text style={{
          color: 'white',
          fontSize: 22,
          lineHeight: 26,
        }}>+</Text>
      </TouchableOpacity>

    </TouchableOpacity>
  );
}