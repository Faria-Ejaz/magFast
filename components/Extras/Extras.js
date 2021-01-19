import styles from '../../styles/Extras.module.scss'
import {Card, Col, Container, Row} from 'react-bootstrap';

export default function Extras() {
    return (
        <>
        <Row><h2 className={styles.title}>Which Extras?</h2></Row>

        <Row className={styles.container}>
            <Col md={6}>
                <Col md={4}>
                    <img width="374%" src="https://www.magfast.com/wp-content/uploads/jump-checksel-new.png" class="attachment-full size-full" alt="" loading="lazy" srcset="https://www.magfast.com/wp-content/uploads/jump-checksel-new.png 997w, https://www.magfast.com/wp-content/uploads/jump-checksel-new-300x135.png 300w, https://www.magfast.com/wp-content/uploads/jump-checksel-new-768x347.png 768w, https://www.magfast.com/wp-content/uploads/jump-checksel-new-600x271.png 600w" sizes="(max-width: 997px) 100vw, 997px" itemprop="image"></img>
                </Col>
            </Col>
            <Col md={6}>
                <h2 className={styles.boldText}>12v Jumper Cables for MAGFAST Extreme</h2>
                <p className={styles.lightText}>MAGFAST Extreme can jump start cars with the addition of this special jumper cable set.</p>
                <p className={styles.lightText}>(optional)<br></br>
                <strike>$5 x 6 months</strike> <span className={styles.highlightedText}>FREE</span><br></br>(Please help and only claim the number you will use.)
                </p>
                <div className={styles.BoxContainer}>
                        <div className={styles.item}>0 <br/><span>none</span></div>
                        <div className={styles.item}>1 <span>pair</span></div>
                        <div className={styles.item}>2 <span>pairs</span></div>
                        <div className={styles.item}>4 <span>pairs</span></div>
              </div>
            </Col>
           
        </Row>
        <br></br>
        <Row className={styles.container}>
            <Col md={6}>
                <Col md={4}>
                    <img width="374%" src="https://www.magfast.com/wp-content/uploads/time-aw-checksel.png" ></img>
                </Col>
            </Col>
            <Col md={6}>
                <h2 className={styles.boldText}>MAGFAST Time™<br></br>for Apple® Watch</h2>
                <p className={styles.lightText}>MAGFAST Time for Apple Watch has all the MAGFAST features you love, plus a neat fold-out magnetic charger for your Apple Watch.</p>
                <p className={styles.lightText}>(optional)<br></br>
                <strike>$33 x 6 months</strike><br></br><span className={styles.highlightedText}>$27 x 6 months now as Pro-Kit option.</span><br></br>
                </p>
                <div className={styles.BoxContainer}>
                        <div className={styles.item}>0 <br/><span>none</span></div>
                        <div className={styles.item}>1 <span>unit</span></div>
                        <div className={styles.item}>2 <span>units</span></div>
                        <div className={styles.item}>4 <span>units</span></div>
              </div>
            </Col>
           
        </Row>
        <br></br>

        </>
    )
}

