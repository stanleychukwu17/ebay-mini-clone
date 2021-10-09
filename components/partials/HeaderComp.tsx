import styles from '../../styles/partials/Header.module.scss';

type HeaderPropsType = {
    wch?: string
}

export default function HeaderComp(props: HeaderPropsType) {
    return (
        <div className={styles.mainCover}> 
            the header is here
        </div>
    )
}
