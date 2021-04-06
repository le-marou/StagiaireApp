import React, { useState, useEffect, useContext } from "react";
import { RouteComponentProps, Link } from 'react-router-dom'
import Firebase, { FirebaseContext } from 'C:/Users/OUMAR/Documents/stagiaireapp/Gesta/src/components/Firebase'
import bg1 from "C:/Users/OUMAR/Documents/stagiaireapp/Gesta/src/assets/img/bg1.png";
import bg2 from "C:/Users/OUMAR/Documents/stagiaireapp/Gesta/src/assets/img/bg2.png";
import cercle1 from "C:/Users/OUMAR/Documents/stagiaireapp/Gesta/src/assets/img/cercle1.png";
import cercle2 from "C:/Users/OUMAR/Documents/stagiaireapp/Gesta/src/assets/img/cercle2.png";
import cercle3 from "C:/Users/OUMAR/Documents/stagiaireapp/Gesta/src/assets/img/cercle3.png";
import 'C:/Users/OUMAR/Documents/stagiaireapp/Gesta/src/assets/css/style.css'
import axios from "axios"

const Form = (props) => {

  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (password.length > 5 && email !== '') {
      setBtn(true)
    } else if (btn) {
      setBtn(false)
    }
  }, [password, email, btn])

  const handleSubmit = e => {
    e.preventDefault();
    // firebase.loginUser(email,password).then(user =>{
    //   console.log(user);
    //   setEmail('');
    //   setPassword('');
    //   props.history.push('/Gesta/src/views/Dashboard.js')
    // })
    // .catch(error =>{
    //   setError(error);
    //   setEmail('');
    //   setPassword('');
    // })

    axios.post('http://localhost:3001/login', { username: 'utilisateur', password: 'motDePasse' }).then(res => {
      console.log(res)
    })

  }

  return (
    <>
      <main class="ccontainer">
        <img src={bg1} alt="/" className="bg1" />
        <img src={bg2} alt="/" className="bg2" />
        <img src={cercle1} alt="/" className="cercle1" />
        <img src={cercle2} alt="/" className="cercle2" />
        <img src={cercle3} alt="/" className="cercle3" />

        <div class="form-block">
          <p class="title">CONNEXION</p>
          {error !== '' && <span>{error.message}</span>}
          <form class="form" onSubmit={handleSubmit}>
            <div class=" username-block">
              <i class=" fas fa-user"></i>
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                name="username"
                id="username"
                placeholder="Nom d'utilisateur" autoComplete="off" required
              />
            </div>
            <div class="password-block">
              <i class="fas fa-lock"></i>
              <input onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe" required
              />
            </div>
            <div class="checkbox-linkForget">
              <div class="checkbox-block">
                <input type="checkbox" name="check" id="check" />
                <span class="checkbox-text">Se souvenir de moi</span>
              </div>
              <a href="#" class="link-forget">
                J'ai oublié mon mot de passe
              </a>
            </div>

            {btn ? <button type="submit" class="button">
              Connexion </button> : <button type="submit" class="button" disabled>
              Connexion </button>}
            <Link to="/demande" className="demande"> <span >Demande</span></Link>
          </form>
        </div>
      </main>
    </>
  );
}
export default Form;
