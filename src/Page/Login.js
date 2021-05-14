import axios from 'axios';
import {useState, useEffect} from 'react';
import qs from 'qs'



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const submit =  (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password
        }

        axios({
            method: 'post',
            url: 'https://covid-relief-backend-karnataka.herokuapp.com/api/login',
            data: qs.stringify({
              email: email,
            password: password
            }),
            headers: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          })
          .
            then(res => {
                console.log(res)
                console.log(email)
            }).catch(error => {
                console.log(error)
            })
    }
    
    return (
            <div >
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" 
                    onChange={e => setEmail(e.target.value)}  />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                    onChange={e => setPassword(e.target.value)}/>
                    <label for="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
            </form>
            </div>
    );
};


export default Login;