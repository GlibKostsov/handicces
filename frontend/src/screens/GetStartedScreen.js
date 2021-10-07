import Modal from '../components/UI/Modal'
import Card from '../components/UI/Card'
import classes from './GetStartedScreen.module.css'

import { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import { register } from '../actions/userActions'

const GetStarted = ({ history }) => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // const dispatch = useDispatch()

  // const userRegister = useSelector((state) => state.userRegister)
  // const { loading, error, userInfo } = userRegister

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      console.log('Password is not the same')
    } else {
      // dispatch(register(firstName, lastName, email, password))
      history.push('/home')
    }
  }
  return (
    <Modal>
      <Card>
        <div className={classes.header}>
          <div className={classes.action}>
            <button className={classes.active}>Sign Up</button>
            <button className={classes.disabled}>Log In</button>
          </div>
          <h1 className={classes.message}>Sign Up For Free</h1>
        </div>

        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.input}>
            <div className={classes.name}>
              <input
                placeholder='First Name'
                id='first-name'
                type='text'
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
              />
              <input
                id='last-name'
                placeholder='Last Name'
                type='text'
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
              />
            </div>

            <input
              id='email'
              placeholder='Email Address'
              type='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <input
              id='password'
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <input
              id='password-repeat'
              placeholder='Confirm Password'
              type='password'
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
              }}
            />
          </div>

          <spin className={classes.forgot}>forgot password?</spin>
          <button className={classes.start}>GET STARTED</button>
        </form>
      </Card>
    </Modal>
  )
}

export default GetStarted
