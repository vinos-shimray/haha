import { Link } from 'react-router-dom'
import styles from './styles/signup.module.css'

function Signup () {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>SignUp Form</h2>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src='./images/signup.jpg' alt='' />
        </div>
        <div className={styles.right}>
          <h2 className={styles.form_heading}>Create an Account</h2>
          <input type='text' className={styles.input} placeholder='Username' />
          <input type='text' className={styles.input} placeholder='Email' />
          <input
            type='password'
            className={styles.input}
            placeholder='Password'
          />
          <input
            type='password'
            className={styles.input}
            placeholder='Confirm password'
          />
          <button className={styles.btn}>Sign Up</button>
          <p className={styles.text}>
            Already Have Account ? <Link to='/'>Log In</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
