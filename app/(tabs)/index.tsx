import {useState,useEffect} from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';

const App = () => {
  const [recipes,setRecipe] = useState([]);

  useEffect(()=>{
    fetch('https://dummyjson.com/recipes').then(res=>res.json()).then(ans=>{
      setRecipe(ans.recipes);
    });
  },[]);

  return (
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item})=>{
          return(
            <View>
              <Text>{item.name}</Text>
              <Text>{item.difficulty}</Text>
            </View>
          )
          
        }}
      />
    
  )
}

export default App;