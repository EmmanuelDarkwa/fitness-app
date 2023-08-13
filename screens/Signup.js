import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Button from '../components/Button';
import { Entypo } from '@expo/vector-icons'


const Signup = ({navigation}) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <View style={{flex: 1, marginHorizontal: 22}}>
                <View style={{marginVertical: 22}}>
                <Text
                style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginVertical: 12,
                    color: COLORS.purple,
                }}>Create Account</Text>

            <Text style={{
                fontSize: 16,
                color: COLORS.purple,
            }}>Take a step towards your goals today</Text>
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
                <View>
                <View style={{marginBottom: 12}}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Mobile Number</Text>
                    <View style={{
                        width: '100%',
                        height: 48,
                        borderColor: COLORS.purple,
                        borderWidth: 1,
                        borderRadius: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingLeft: 22
                    }}>
                        <TextInput
                        placeholder='+233'
                        placeholderTextColor={COLORS.orange}
                        keyboardType='numeric'
                        style={{
                            width: '12%',
                            borderRightWidth: 1,
                            borderLeftColor: COLORS.black,
                            height: '100%'
                        }}
                        />
                        <TextInput
                         placeholder='Enter you phone number'
                         placeholderTextColor={COLORS.orange}
                         keyboardType='numeric'
                         style={{
                            width: '80%'
                         }}
                        />

                    </View>
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
                    title='Sign Up'
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
                        <Text style={{fontSize: 16}}>or sign up with</Text>
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
                            <Entypo name="linkedin-with-circle" size={24} color="blue" />
                            <Text style={{
                                fontSize: 10
                            }}>LinkedIn</Text>
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
                    }}>Already have an account?</Text>
                    <Pressable
                    onPress={()=>navigation.navigate('Login')}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.orange,
                            fontWeight: 'bold'
                        }}>Login</Text>
                    </Pressable>
                </View>   
                    
            </View>
        </SafeAreaView>
    )
};

export default Signup;