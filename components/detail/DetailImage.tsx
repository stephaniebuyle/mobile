import React from 'react'
import { Image, View } from 'react-native'

const DetailImage = ({ uri } : any) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image 
                source={ { uri: uri }}
                style={{ width: 300, height: 300 }}
            />
    </View>
  )
}

export default DetailImage
