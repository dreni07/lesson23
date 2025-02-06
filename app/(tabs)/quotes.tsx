import {Text,View,StyleSheet,FlatList} from 'react-native';
import {useState,useEffect} from 'react';

const Quotes = () => {
  const [quotes,setQuote] = useState([]);

  useEffect(()=>{
    fetch('https://dummyjson.com/quotes').then(response=>response.json()).then(answer=>{
      setQuote(answer.quotes);
    },[])
  });

  return(
    <FlatList
      data={quotes}
      keyExtractor={(item)=>item.id.toString()}
      renderItem={({item})=>{
        return(
          <View>
            <Text>Quote:{item.quote}</Text>
            <Text>Author:{item.author}</Text>
          </View>
        )
      }}
    />

  )
}

export default Quotes;