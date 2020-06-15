import axios from 'axios';
const Login = (url,username,password,changeName) =>{
    var postData = `username=${username}&password=${password}`
    axios.post(url,postData).then(res =>{
        var result = res.data
        if(result.success==1){
            changeName(result.name)
        }
    }).catch(error =>{
      console.log(error)  
    })
}
 
export default Login 