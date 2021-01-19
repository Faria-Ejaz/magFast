import styles from '../../styles/Summary.module.scss'
import { Card, Col, Row,Button } from 'react-bootstrap';

export default function Summary() {
    return (
        <Row >
          <Col md={7} className={styles.cardContainer}>  
          <Card className={styles.card}>
          <Card.Title className={styles.title}>  Summary</Card.Title>

    <Card.Img variant="top" src="https://www.magfast.com/wp-content/uploads/checksum-prokit-b-white-checksel-1.png" />
    <Card.Body>
      <Card.Text>
      <h3 className={styles.line1}>1</h3>
      <p className={styles.line2}>Pro Kit</p>
      <p className={styles.line3}>Alpine White <br></br>1 x $67/mo</p>
      </Card.Text>
    </Card.Body>
  </Card></Col>
  <Col md={1}></Col>
          <Col md={4} className={styles.card2Container}>
          <Card className={styles.card2}><br></br>
<Button className={styles.button} variant="warning">Pre-Order Now</Button><br></br>
    <Card.Img variant="top" src="https://www.magfast.com/wp-content/uploads/visa-mc-discover-amex1.png" />
    <Card.Body>
      <Card.Text>$  <span className={styles.bigNumber}>67</span>x 6 months </Card.Text>
      <Card.Img variant="top" src="https://www.magfast.com/wp-content/uploads/nsg-inline-open.jpg" />

    </Card.Body>

  </Card>
          </Col>
        </Row>
    )
}

