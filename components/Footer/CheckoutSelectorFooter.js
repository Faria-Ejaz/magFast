import styles from '../../styles/CheckoutSelectorFooter.module.scss';

export default function CheckoutSelectorFooter() {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.h2}>Copyright © 2020
                <b className={styles.b}>&nbsp;MAGFAST LLC.</b>
                All&nbsp;rights&nbsp;reserved</h2>
            <h2 className={styles.h2}>
                <b className={styles.b}>MAGFAST®</b>
                is a registered trademark</h2>
            <h2 className={styles.h2}>
                <a className={styles.b} href="https://www.magfast.com/pkdf/legal-etc/">Legal etc</a>
            </h2>
        </footer>
    )
}

