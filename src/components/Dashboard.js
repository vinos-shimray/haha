import styles from './styles/dashboard.module.css'

function Dashboard (userDetails) {
  const user = { name: 'Mr. Worldwide', email: 'world@example.com' }
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Home</h1>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src='./images/profile.jpg' alt='login' />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Profile</h2>
          <img
            src={user.picture}
            alt='profile'
            className={styles.profile_img}
          />
          <input
            type='text'
            defaultValue={user.name}
            className={styles.input}
            placeholder='UserName'
          />
          <input
            type='text'
            defaultValue={user.email}
            className={styles.input}
            placeholder='Email'
          />
          <button className={styles.btn}>Log Out</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
