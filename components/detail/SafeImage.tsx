import * as MediaLibrary from 'expo-media-library';
import { Pressable, Text } from 'react-native'

// werkt niet omdat de url niet verwijst naar een bestand met extensie
const SafeImage = ({ uri } : any) => {

    const download = async ( { uri } : any) => {
        try{
          const { status } = await MediaLibrary.requestPermissionsAsync();
          if (status === 'granted') {
            await MediaLibrary.saveToLibraryAsync(uri);
            alert("De afbeelding is gedownload");
          }
        }
        catch (e) {
          alert("Niet gelukt om de afbeelding te downloaden");
          console.log(e);
        }
      }

    return(
        <Pressable
            onPress={() => { download(uri) }}
            style={{ backgroundColor: "lightblue", padding: 5 }}
        >
            <Text>Download afbeelding</Text>
        </Pressable>
    )
}

export default SafeImage;