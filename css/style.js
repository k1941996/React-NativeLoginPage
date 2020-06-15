import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center'
  },
  MainContainer:{
    // backgroundColor: '#61dafb',
    flex:1,
    justifyContent:'center',
    alignItems:'stretch',
  },
  textInputView:{
    margin:20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding:20,
    borderRadius:8
  },
  textInput:{
    borderBottomWidth:2,
    borderColor:'#rgba(255, 255, 255, 0.2)',
    color:'#000',
    marginBottom:4,
    fontSize:24,
    paddingLeft:4,
    bottom:5
  },
  textLabel:{
    color: 'black',
    fontSize:40,
    fontFamily: 'Yellowtail-Regular',
    textAlign:"center"
  },
  textLabelView:{
    margin:20,
  },
  bgimage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  loginButtonView:{
    margin:20,
    
    
  },
  loginButton:{
    padding: 10,
    borderRadius:20,
    backgroundColor:'#64e291'

  },
  logInButtonText:{
    textAlign:"center",
    color:"white",
    fontSize:20,
    fontFamily:"Roboto"
  }
});

export default styles;