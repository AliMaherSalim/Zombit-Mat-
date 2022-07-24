import React from 'react';
import {Text,View,Image,TextInput, Button} from 'react-native';
import Icon from "@expo/vector-icons/AntDesign";
import Register from './Register';

export default class Login extends React.Component{
 
    render (){
        const {navigate} = this.props.navigation;
        return(
        <View style={{backgroundColor:"#DAF7A6",height:"100%"}}>
            <Image source={require('../images/image.jpg')}
            style={{width:"100%", height:"30%", marginTop:"15%"}}
            />
            <Text
                    style={{fontSize:27,
                            fontWeight:"600",
                            alignSelf:"center",
                    }}
            >Welcome to Zombie-Hat App 😉</Text>

            <Text
                style={{
                    fontSize:18,
                    fontWeight:"500",
                    marginHorizontal:75,
                    textAlign:"center",
                    marginTop:10,
                    opacity:0.5,

                }}
            >
                This is a new Social Media Application 
                created and developed by RASMA Group 
                For All People all over the world 👏😎
            </Text>
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:50,
                paddingHorizontal:10,
                paddingVertical:5,
                borderColor:"#00716f",
                borderRadius:23,
                backgroundColor:"white",


            }}>
                <Icon name='mail' color="#00716f" size={24}/>
                <TextInput placeholder='Mail' placeholderTextColor={"#00716f"} style={{paddingHorizontal:10}} />
            </View>
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:30,
                paddingHorizontal:10,
                paddingVertical:5,
                borderColor:"#00716f",
                borderRadius:23,
                backgroundColor:"white",


            }}>
                <Icon name='lock' color="#00716f" size={24}/>
                <TextInput secureTextEntry placeholder='Password' placeholderTextColor={"#00716f"} style={{paddingHorizontal:10}} />
            </View>
            <View style={{
                marginHorizontal:55,
                alignItems:"center",
                marginTop:30,
                backgroundColor:"#00716f",
                paddingVertical:10,
                borderRadius:23,
               

            }}>
                <Text style={{fontWeight:"800", color:"white"}}>Login</Text>
            </View>
            {/* <View style={{paddingVertical:30,}}>
            <Button
                
                onPress={()=>('Register')}
                title="New User"
                color="#00716f"
                />
            </View> */}
            <Text
                onPress={()=>navigate('Register')}
                style={{
                    alignSelf:"center",
                    color:"#00716f",
                    fontWeight:"700",
                    paddingVertical:30,
                }}
            >
                New User
            </Text>
        </View>
        )
    }

}