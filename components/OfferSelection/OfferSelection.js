import styles from '../../styles/ProductChoice.module.scss'
import {Container, Col, Row} from 'react-bootstrap';

export default function OfferSelection() {
    return (
        <Container className={styles.container}>
            <Row>
                <h2 className={
                    styles.title
                }>Pro Kit:
                    <strike>$630</strike><br/>
                    Select Backers Offer:</h2>
            </Row>
            <Row>
                <Col md={5}
                    className={
                        styles.boxes
                }>
                    <Row className={styles.row1}>
                    <p className={styles.offerTitle}>SAVE $333<br></br>
                        <span className={styles.backers}>Backers Launch offer saving</span>
                    </p></Row>
                    <Row className={styles.row2}>
                    <p className="elementor-heading-title ">$
                        <span className={styles.bigNumber}>297</span>once
                    </p>
                    <p className={styles.italicTitle}>One single pledge today.</p></Row>
                    
                </Col>
                <Col className={
                        styles.or
                    } md={2}
                    >

                    <p className={
                        styles.text
                    }>or</p>
                </Col>
                <Col md={5} className={
                        styles.boxes
                    }
                    >
                        <Row className={styles.row1}>
                    <p className={styles.offerTitle}>SAVE $228<br></br>
                        <span className={styles.backers}>Backers Launch offer saving</span>
                    </p></Row>
                    <Row  className={styles.row2}>

                    <p className="elementor-heading-title ">$
                        <span className={styles.bigNumber}>67</span>x 6 months
                    </p>
                    <p className={styles.italicTitle}>Six easy automatic monthly amounts.</p>
                    </Row>
                </Col>
            </Row>
            <Row className={
                styles.textRow
            }>
                <p className={
                    styles.text
                }>Obviously the 6-pay is a bit more. So why is this fair? Because cash is critical to any company especially a small one just launching. And in practice payment plans create a big burden that has to be managed, and waiting for the cash is challenging too. But we wanted to have a plan that makes supporting MAGFAST possible for almost everyone, so this is it. Terms and Conditions apply of course, but don’t they always?</p>
            </Row>
        </Container>
    )
}

