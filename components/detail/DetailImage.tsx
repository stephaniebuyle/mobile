import React from 'react'
import { Image, View, StyleSheet} from 'react-native'
import { DetailImageProps } from '../../types';

const DetailImage = ({ uri } : DetailImageProps) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image 
                source={ { uri: uri }}
                style={styles.image}
            />
    </View>
  )
}
const styles = StyleSheet.create({
  image: {
    width: 400, 
    height: 400
  },
});
export default DetailImage
