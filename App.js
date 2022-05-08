import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Flex from './components/Page';
import Discussion from './Ecrans/Discussion';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
     
     <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen name='Pick Up !' component={Flex} style={{position: 'absolute'}}/>
          <Stack.Screen name='Chat' component={Discussion}/>
        </Stack.Navigator>
     </NavigationContainer>

    </>
  );
}







// const styles = StyleSheet.create({

//   // Ceci est la partie Header
//   header: {
//     backgroundColor: "white",
//     marginTop: 20,
//     flex: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   Title: {

//   },
//   // Ceci est la partie Center
//   principale:{
//     marginLeft: 50,
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   textbutton: {
//     flex: 0,
//     justifyContent: "center",
//     alignItems: "center",
//   },
  
// });

// giroscope


  {/* <View className="App">
           <AInput onFocus={() => changeColor()} on onChanged={setStr}/>
         </View> */}


        //  <TouchableOpacity style={styles.avatar}  onPress={() => setcpt (cpt+1)}><Text styles={styles.textbutton}>Appuyez !</Text></TouchableOpacity>
        //  <API value={cpt}/>
         // useEffect(() => {
    
  // setStr(localStorage.getItem("futurtitle"))
    
  // }, [])

  // function changeColor(){
  //   document.getElementsByClassName('Input').style.backgroundColor = "cyan"
  // }

  // avatar: {
  //   marginTop: 20,
  //   backgroundColor: "blue",
  //   borderRadius:25,
  //   flex: 0,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width: 130,
  //   height: 50
  // },

  // const [cpt,setcpt] = useState(0)
  // const [str,setStr]=useState("")