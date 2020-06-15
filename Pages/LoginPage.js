import React from 'react';
import {connect} from 'react-redux'

import {
  TextInput,TouchableOpacity,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import styles from '../css/style.js'
import Login from "../axios/Login"
import  {changeName}  from './../Store/ActionExporter'

const LoginPage =(props) =>{
    const [username,setUsername] = React.useState('')
    const [password,setPassword] = React.useState('')

    const onUsernameChange =(text)=>{
        setUsername(text)
    }
    const onPasswordChange = (password) =>{
        setPassword(password);
    }
    const loginFunction = () =>{
        const loginUrlApi="http://192.168.100.3/testing%20api/loginTest.php"
        var result = Login(loginUrlApi,username,password,props.changeNameProp)
    }
    // const ImgUrl = ""
    // const image = { uri: `${ImgUrl}` }
  
    return(
        <>
            {/* <ImageBackground source={image}  style={styles.MainContainer}> */}
            <View style={styles.MainContainer}> 
                <View style={styles.textLabelView}>
                    <Text style={styles.textLabel}>{props.name}</Text>
                </View>
                <View style={styles.textInputView}>
                    <TextInput
                    style={styles.textInput}
                    onChangeText = {onUsernameChange}
                    inlineImageLeft="user"
                    placeholder="Enter Username"
                    defaultValue={username}  
                    selectionColor="green"
                    inlineImagePadding={2}
                    underlineColorAndroid= 'transparent'
                    placeholderTextColor="grey" 
                    ></TextInput>
                
                    <TextInput
                    inlineImageLeft="pass"
                    style={styles.textInput}
                    onChangeText = {onPasswordChange}
                    placeholder="Enter Password"  
                    selectionColor="green"
                    defaultValue={password}
                    placeholderTextColor="grey" 
                    ></TextInput>
                </View>
                <View style={styles.loginButtonView}>
                    <TouchableOpacity
                    onPress={loginFunction}
                    style={styles.loginButton}
                    >
                        <Text style={styles.logInButtonText}> Login </Text>
                    </TouchableOpacity>
                </View>
            {/* </ImageBackground> */}
            </View>
        </>
    )

}


const mapStateToProps = (state) =>{
    return {
        name : state.name
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        changeNameProp : (name) => dispatch(changeName(name))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)