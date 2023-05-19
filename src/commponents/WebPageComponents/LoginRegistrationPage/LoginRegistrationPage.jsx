import React from 'react';
import './LoginRegistrationPage.css';
import googleIcon from '../../../assets/Google-Icon.png';
import linkedinIcon from '../../../assets/LoginPage-Linkedin-Icon.png';
import BestPlaceFooter from '../../LayoutComponents/BestPlaceFooter/BestPlaceFooter';
import HeaderComponent from '../../LayoutComponents/HeaderComponent/HeaderComponent';
import { useState } from 'react';
import loginPagePic from '../../../assets/LoginPage-Pic.jpg';

const displayNone = {
  display: 'none'
}
const displayInherit = {
  display: 'inherit'
}

export default function LoginRegistrationPage() {

  // loginRegistrationStyle and layOutChangeHandler will show different forms
  const [loginRegistrationStyle, setLoginRegistrationStyle] = useState([
    displayInherit,
    displayNone,
    displayNone
  ])

  const layOutChangeHandler = (layOutName) => {
    if (layOutName === 'registration') {
      setLoginRegistrationStyle([
        displayNone,
        displayInherit,
        displayNone
      ])
    }
    if (layOutName === 'forgetPassword') {
      setLoginRegistrationStyle([
        displayNone,
        displayNone,
        displayInherit
      ])
    }
    if (layOutName === 'login') {
      setLoginRegistrationStyle([
        displayInherit,
        displayNone,
        displayNone
      ])
    }
  }
  // Login Password-Show useState and Its handler
  const [loginPasswordShow, setLoginPasswordShow] = useState(['password', displayInherit, displayNone])
  
  const loginPasswordShowHandler = (event, showPassword) => {
    event.preventDefault()

    if (showPassword === true) {
      setLoginPasswordShow(['text', displayNone, displayInherit])
    }
    if (showPassword === false) {
      setLoginPasswordShow(['password', displayInherit, displayNone])
    }
  }

  // Registration Password-Show useState and Its handler
  const [registrationPasswordShow, setRegistrationPasswordShow] = useState(['password', displayInherit, displayNone])
  
  const registrationPasswordShowHandler = (event, showPassword) => {
    event.preventDefault()

    if (showPassword === true) {
      setRegistrationPasswordShow(['text', displayNone, displayInherit])
    }
    if (showPassword === false) {
      setRegistrationPasswordShow(['password', displayInherit, displayNone])
    }
  }



  return (
    <div className='LoginRegistrationPage'>
      <HeaderComponent HeaderPositionAt={'AnyOtherPage'} />

      <main>

        <img src={loginPagePic} className='LoginPagePic' alt='LoginPagePic' />
        <div className='LoginRegistrationPage-AllForms'>



          {/* Login form Box is here */}
          <div className='Login-FormBox' style={loginRegistrationStyle[0]}>
            <p className='Login-FormBox-Heading'>Login</p>

            <div className='Login-FormBox-Top'>
              <button className='with-Google-LoginButton'>
                <span>Google</span>
                <img src={googleIcon} alt='googleIcon' className='googleIcon' />
              </button>
              <button className='with-LinkeDIn-LoginButton'>
                <span>LinkeDIn</span>
                <img src={linkedinIcon} alt='linkedinIcon' className='linkedinIcon' />
              </button>
            </div>

            <form className='LoginForm'>
              <label>Email</label>
              <input type='email' className='emailInput' />

              <label>Password</label>
              <div className='LoginForm-Div-InputBox'>
                <input type={loginPasswordShow[0]} />
                <button>
                  <i onClick={(e) => loginPasswordShowHandler(e, true)} className="fa fa-eye" style={loginPasswordShow[1]}></i>
                  <i onClick={(e) => loginPasswordShowHandler(e, false)} className="fa fa-eye-slash" style={loginPasswordShow[2]}></i>
                </button>
              </div>

            </form>

            <div className='LoginForm-Checkbox' >
              <input type='checkbox' className='Remeber-checkbox' />
              <label className='RememberMe-Label'>Remember me</label>
              <p className='forgetPassword' onClick={(e) => layOutChangeHandler('forgetPassword')}>Forget Password?</p>
            </div>

            <button className='Login-FormBox-LoginButton'>Login</button>

            <p className='Login-FormBox-Footer'>
              <span>
                Dont have an account?
              </span>
              <span className='signUp-Option' onClick={(e) => layOutChangeHandler('registration')}>
                Sign Up
              </span>
            </p>
          </div>





          {/* Registration FormBox is below */}
          <div className='Registration-FormBox' style={loginRegistrationStyle[1]}>
            <p className='Registration-FormBox-Heading'>Create an account</p>
            <div className='Registration-FormBox-Top'>
              <button className='with-LinkeDIn-RegisterButton'>
                <span>LinkeDIn</span>
                <img src={linkedinIcon} alt='linkedinIcon' className='linkedinIcon' />
              </button>
              <button className='with-Google-RegisterButton'>
                <span>Google</span>
                <img src={googleIcon} alt='googleIcon' className='googleIcon' />
              </button>
            </div>

            <form className='RegistrationForm'>
              <label>Email</label>
              <input type='email' className='emailInput' />

              <label>Password</label>
              <div className='RegistrationForm-InputBox'>
                <input type={registrationPasswordShow[0]} />
                <button  >
                  <i onClick={(e)=>registrationPasswordShowHandler(e,true)} className="fa fa-eye" style={registrationPasswordShow[1]}></i>
                  <i onClick={(e)=>registrationPasswordShowHandler(e,false)} className="fa fa-eye-slash" style={registrationPasswordShow[2]}></i>
                </button>
              </div>

            </form>

            <div className='RegistrationForm-Div'>
              <button className='RegistrationForm-Div-CreateAccountButton'>Create Account</button>
              <p className='RegistrationForm-Div-P'>
                <span>Have an account?</span>
                <span className='RegistrationForm-Div-LogInOption' onClick={(e) => layOutChangeHandler('login')}>Log In</span>
              </p>
            </div>

            <p className='Registration-FormBox-Footer'>By creating an account, you are ageeing to our</p>
            <p className='Registration-FormBox-Footer'>
              <span>Terms & Conditions</span>
              <span> and </span>
              <span>Privacy Policy</span>
            </p>
          </div>









          {/* Forget password FormBox is below */}
          <div className='ForgetPassword-FormBox' style={loginRegistrationStyle[2]}>
            <button className='ForgetPassword-FormBox-BacktoLoginButton' onClick={(e) => layOutChangeHandler('login')}>Back to Login</button>
            <p className='ForgetPassword-FormBox-Heading' style={{ marginTop: '3vh' }}>Forgot password</p>
            <p className='ForgetPassword-FormBox-SubHeading'>Forget your password?</p>
            <p className='ForgetPassword-FormBox-SubHeading'>We'll send you instructions on</p>
            <p className='ForgetPassword-FormBox-SubHeading' style={{ marginBottom: '4vh' }}>how to reset it</p>

            <form className='forgetPasswordForm'>
              <label>Email</label>
              <input type='email' className='emailInput' />
            </form>

            <button className='ForgetPassword-FormBox-ResetButton'>Reset</button>
          </div>

        </div>
      </main>

      {/* Footer From layout components is here */}
      <BestPlaceFooter />

    </div>
  )
}
