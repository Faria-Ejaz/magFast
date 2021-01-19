import styles from '../../styles/ProdQuantity.module.scss'
import { Container, Col, Row } from 'react-bootstrap';

export default function ProdQuantity() {
    return (
        <>
            <Row><h2 className={styles.title}>How Many?</h2></Row>
            <Row className={styles.BoxesRow}>   
                <Col className={styles.QuantityBoxes} md={4}>
                <span className={styles.bigNumber}>1</span>
                <p className={styles.kitText}>Pro Kit</p>
                </Col>
            <Col className={styles.QuantityBoxes} md={4}>              
            <span className={styles.bigNumber}>2</span>
            <p className={styles.kitText}>Pro Kits + get 2 Airs for  <span className={styles.highlightedText} >FREE</span></p>
            </Col>
            <Col className={styles.QuantityBoxes} md={4}>                 
            <span className={styles.bigNumber}>3+1 FREE</span>
            <p className={styles.kitText}>Get <span className={styles.highlightedText}>FOUR</span> Pro Kits</p>                 

            </Col>                         
            </Row>
        </>
    )
}

