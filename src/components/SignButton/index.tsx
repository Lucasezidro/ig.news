import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

export function SignButton(){
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button 
        type="button"
        className={styles.signButton}

        >
        <FaGithub color="#04d361"/>
        Lucas Ezidro
        <FiX color="#737380" className={styles.closeIcon} />
    </button>

    ) : (
        <button 
        type="button"
        className={styles.signButton}

        >
        <FaGithub color="#eba417"/>
        Sign with Github
    </button>
    )
}