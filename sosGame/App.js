import {StyleSheet, View} from 'react-native';
import Oyun from './src/Oyun';

 
  export default function App() {
    return(
     
        <View style={styles.container}>
          <Oyun />
        </View>
    
    );
  }

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
 
});
