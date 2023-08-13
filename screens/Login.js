import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Button from '../components/Button';
import { Entypo } from '@expo/vector-icons'


const Login = ({navigation}) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.grey}}>
            <View style={{flex: 1, marginHorizontal: 22}}>
                <View style={{marginVertical: 22}}>
                <Text
                style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginVertical: 12,
                    color: COLORS.purple,
                }}>Hey you're back!</Text>

            <Text style={{
                fontSize: 16,
                color: COLORS.purple,
            }}>Enter your Login details to Be Incredible</Text>
                </View>
                <View style={{marginBottom: 12}}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Email Address</Text>
                    <View style={{
                        width: '100%',
                        height: 48,
                        borderColor: COLORS.purple,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingLeft: 22
                    }}>
                        <TextInput
                        placeholder='Enter your email address'
                        placeholderTextColor={COLORS.orange}
                        keyboardType='email-address'
                        style={{
                            width: '100%'
                        }}
                        />

                    </View>
                </View>

                <View style={{marginBottom: 12}}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Password</Text>
                    <View style={{
                        width: '100%',
                        height: 48,
                        borderColor: COLORS.purple,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingLeft: 22
                    }}>
                        <TextInput
                        placeholder='Enter your password'
                        placeholderTextColor={COLORS.orange}
                        secureTextEntry={isPasswordShown}
                        style={{
                            width: '100%'
                        }}
                        />
                        <TouchableOpacity
                        onPress={()=>setIsPasswordShown(!isPasswordShown)}
                        style={{
                            position: 'absolute',
                            right: 12
                        }}
                        >
                           {
                           isPasswordShown == true ? (
                            <Ionicons name='eye-off' size={24} color={COLORS.orange}/>
                           ) : (
                            <Ionicons name='eye' size={24} color={COLORS.orange}/>
                           )
                        }
                           
                        </TouchableOpacity>
                    </View>
                  
                </View> 
                <View style={{
                        flexDirection: 'row',
                        marginVertical: 6
                    }}>
                        <Checkbox
                        style={{marginRight: 8}}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.purple : undefined}
                        />
                        <Text>agree to the terms and conditions</Text>
                    </View>
                    <Button
                    title='Log In'
                    color={COLORS.purple}
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4
                    }}
                    />
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 20
                    }}>
                        <View style={{
                            height: 1,
                            flex: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                        />
                        <Text style={{fontSize: 16}}>or log in with</Text>
                        <View style={{
                            height: 1,
                            flex: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <TouchableOpacity
                        onPress={()=> console.log('pressed')}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.orange,
                            marginRight: 4,
                            borderRadius: 10,
                        }}
                        >
                            <Entypo name="facebook" size={24} color="blue" />
                            <Text style={{
                                fontSize: 10
                            }}>Facebook</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={()=> console.log('pressed')}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.orange,
                            marginRight: 4,
                            borderRadius: 10,
                        }}
                        >
                            <Entypo name="twitter-with-circle" size={24} color="blue" />
                            <Text style={{
                                fontSize: 10
                            }}>Twitter</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={()=> console.log('pressed')}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.orange,
                            marginRight: 4,
                            borderRadius: 10,
                        }}
                        >
                            <Entypo name="instagram-with-circle" size={24} color="purple" />
                            <Text style={{
                                fontSize: 10
                            }}>Instagram</Text>
                        </TouchableOpacity>

                       
                    </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginVertical: 22
                 }}>
                    <Text style={{
                        fontSize: 16,
                        color: COLORS.purple
                    }}>Don't have an account?</Text>
                    <Pressable
                    onPress={()=>navigation.navigate('Signup')}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.orange,
                            fontWeight: 'bold'
                        }}>Signup</Text>
                    </Pressable>
                </View>   
                    
            </View>
        </SafeAreaView>
    )
};

export default Login;