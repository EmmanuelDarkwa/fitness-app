import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import COLORS from '../constants/colors';
import Button from '../components/Button';
import { Assets } from 'react-navigation-stack';



const Welcome = ({ navigation }) => {
    return (
            <LinearGradient
            style={{
                flex: 1
            }}
            colors={[ COLORS.white, COLORS.white]}
            >
                <View>
                   <Image
                   source={require('../assets/warmz1.jpg')}
                   style={{
                    height: 100,
                    width: 100,
                    borderRadius: 20,
                    position: 'absolute',
                    top: 30,
                    transform: [
                        {translateX: 20},
                        {translateY: 50},
                        {rotate: '-15deg'}
                    ]
                   }}
                   /> 

                   <Image
                    source={require('../assets/IMG_8175.jpg')}
                    style={{
                     height: 100,
                     width: 100,
                     borderRadius: 20,
                     position: 'absolute',
                     top: 30,   
                     left: 200,
                     transform: [
                         {translateX: 20},
                         {translateY: 60},
                         {rotate: '15deg'}
                     ]
                    }}
                   />

                <Image
                source={require('../assets/IMG-5335.jpg')}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 20,
                    position: 'absolute',
                    top: 130,
                    left: -50,
                    transform: [
                        {translateX: 50},
                        {translateY: 50},
                        {rotate: '15deg'}
                    ]
                }}
                />

                <Image
                source={require('../assets/IMG-3497.jpg')}
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 20,
                    position: 'absolute',
                    top: 110,
                    left: 100,
                    transform: [
                        {translateX: 50},
                        {translateY: 50},
                        {rotate: '-15deg'}
                    ]
                }}
                />
                   {/*Content */}

                   <View style={{
                    paddingHorizontal: 22,
                    position: 'absolute',
                    top: 400,
                    width: '100%'
                   }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color:COLORS.purple
                    }}>Let's get </Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.orange
                    }}>INCREDIBLE</Text>
                  

                   <View style={{marginVertical: 22}}>
                    <Text style={{
                        fontSize: 15,
                        color: COLORS.purple,
                        marginVertical: 4,
                    }}>WE ARE INCREDIBLE</Text>
                   </View>

                    <Button
                    title='Sign Up Now'
                    onPress={()=> navigation.navigate('Signup')}
                    style={{
                        marginTop: 22,
                        width: '100%',
                    }} 
                    />
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 12,
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary
                        }}>Already have an acount?</Text>
                        <Pressable
                        onPress={()=> navigation.navigate('Login')}
                        >
                            <Text
                            style={{
                                fontSize: 16,
                                color: COLORS.secondary,
                                fontWeight: 'bold',
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>
                    </View>
                   </View>
                </View>
            </LinearGradient>
        
    )
};

export default Welcome;