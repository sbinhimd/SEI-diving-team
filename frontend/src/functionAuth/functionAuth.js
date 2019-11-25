import axios  from "axios"
// register
export const register = (newuser)=>{
    return axios.post('http://localhost:5000/user/register' ,newuser )
    .then(res => console.log("registerd ! "))
    .catch(err => console.log(err))
}
// login 
export const login = (user)=>{
    return axios.post('/user/login' , user)
    .then(token =>{
            console.log(token.data)
         localStorage.setItem('usertoken' , token.data)
         return true
    })
    .catch(err=>console.log(err))
}

