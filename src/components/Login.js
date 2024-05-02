import { Link } from 'react-router-dom'
import styles from './styles/login.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Log in Form</h2>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src='./images/login.jpg' alt='' />
        </div>
        <div className={styles.right}>
          <h2 className={styles.form_heading}>User LogIn</h2>
          <input type='text' className={styles.input} placeholder='Email' />
          <input
            type='password'
            className={styles.input}
            placeholder='Password'
          />
          <button className={styles.btn}>Login</button>
          <p className={styles.text}>
            New Here? <Link to='/signup'>SignUp</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
