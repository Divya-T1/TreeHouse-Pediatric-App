import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, TouchableOpacity, TouchableHighlight} from 'react-native';
import { Button } from 'react-native-web';

export default function Homescreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source = {require('./Logo.png')} />
      <View style = {styles.grid}>
        <TouchableOpacity 
          activeOpacity = {0.6}
          onPress={() => console.log("HIIII")}>
            <View style = {styles.circle1}>
              <Image
                  source = {require('./Running.png')}
              />
            </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity = {0.6}
          onPress={() => console.log("HIIII")}>
            <View style = {styles.circle2}>
              <Image
                  source = {require('./TeddyBear.png')}
              />
            </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity = {0.6}
          onPress={() => console.log("HIIII")}>
            <View style = {styles.circle3}>
              <Image
                  source = {require('./Arts.png')}
              />
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
          activeOpacity = {0.6}
          onPress={() => console.log("HIIII")}>
            <View style = {styles.circle4}>
              <Image
                  source = {require('./Door.png')}
              />
            </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent:'center',
    width: '100%',
  },

  circle1: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(211,211,211)',
  },

  circle2: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(211,211,211)',
  },
  circle3: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(211,211,211)',
  },
  circle4: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(211,211,211)',
  }
});
