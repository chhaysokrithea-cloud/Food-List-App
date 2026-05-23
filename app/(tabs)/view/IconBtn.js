import { View , Text} from "react-native";

export default function IconBtn(params){
 
    return (
        <View style={{padding: 8}}>
            {params.children}
            <View style={{
                position:"absolute",
                top:25,
                right:15,
                backgroundColor:"red",
                borderRadius:25,
                paddingHorizontal:4,
            }}>
                {params.badge !== null && <Text
                style={{
                    fontSize:10,
                    fontWeight:"bold",
                    color:"white"
                }}>{params.badge}</Text>}

            </View>


        </View>
    )
}