import {React, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, decrementByAmount } from './CounterSlice'
import { Button, Text, TextInput, View } from 'react-native'



const Counter = () => {
    const [value, setValue] = useState(10);
    const [value2,setValue2] = useState(5);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return(
        <View>
            <Button
                onPress={() => dispatch(increment())}
                title="Increment"
                color="green"
            />
            <Button
                onPress={() => dispatch(decrement())}
                title="Decrement"
                color="red"
            />
            <TextInput 
                style={{borderWidth:1,margin:20}}
                value={value.toString()}
                placeholder='Increment value'
                onChangeText={(text) => setValue(text)}
            />
            <Button 
                onPress={() => dispatch(incrementByAmount(parseInt(value)))}
                title="Increment by value"
                color="green"
            />
            <TextInput 
                style={{borderWidth:1,margin:20}}
                value={value2.toString()}
                placeholder='Increment value'
                onChangeText={(text) => setValue2(text)}
            />
            <Button 
                onPress={() => dispatch(decrementByAmount(parseInt(value2)))}
                title="Decrement by value"
                color="red"
            />
            <Text style={{fontSize:32,textAlign:'center'}}>{count}</Text>
        </View>
    )
}

export default Counter;