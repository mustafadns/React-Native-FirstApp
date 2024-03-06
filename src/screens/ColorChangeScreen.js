import { StyleSheet, Text, View , Button} from 'react-native'
import React , { useReducer }from 'react'
import ColorChange from '../../components/ColorChange.js'


const reducer = (state,action) => {
    // console.log(action);
    switch(action.type)
    {
        case 'changeRed':
            return state.red + action.payload > 255 || 
            state.red + action.type < 0 ? state : 
            {...state,red : state.red + action.payload};
        case 'changeBlue':
            return state.blue + action.payload > 255 || 
            state.blue + action.type < 0 ? state : 
            {...state,blue : state.blue + action.payload};
        case 'changeGreen':
            return state.green + action.payload > 255 || 
            state.green + action.type < 0 ? state : 
            {...state,green : state.green + action.payload};
    }
};

export default function ColorChangeScreen() {
    const [state, dispatch] = useReducer(reducer,{red:0 , blue:0 , green:0})
    const {red,blue,green} = state;
    console.log(`rgb(${red},${blue},${green})`);
    return (
        <View>
            <ColorChange 
                color="KIRMIZI" 
                onIncrease = {() => dispatch({type:'changeRed',payload:20})} 
                onDecrease = {() => dispatch({type:'changeRed',payload:-20})}
            />
            <ColorChange 
                color="MAVİ" 
                onIncrease = {() => dispatch({type:'changeBlue',payload:20})} 
                onDecrease = {() => dispatch({type:'changeBlue',payload:-20})}
            />
            <ColorChange 
                color="YEŞİL" 
                onIncrease = {() => dispatch({type:'changeGreen',payload:20})} 
                onDecrease = {() => dispatch({type:'changeGreen',payload:-20})}
            />
            <View style={{
                    height:150,
                    width:150,
                    backgroundColor:`rgb(${red},${blue},${green})`,
                    position:'relative',
                    marginTop:50,
                    left:120
                }} 
            >
            </View>
            <Text style={{
                fontSize:20,
                fontWeight:'bold',
                position:'relative',
                top:30,
                left:125,
                textDecorationLine:'underline'
            }}>
                rgb({red},{blue},{green})
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({})