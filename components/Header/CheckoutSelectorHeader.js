import styles from '../../styles/CheckoutSelectorHeader.module.scss';
import {Col, Container, Row} from "react-bootstrap"

export default function CheckoutSelectorHeader() {
    return (
        <Container id="border" className={styles.container}>
            <Col></Col>
            <Col style={{"textAlign": "center"}} >
                    <img src="https://www.magfast.com/wp-content/uploads/magfast-website-logo-green.png" title="magfast-website-logo-green" alt="magfast-website-logo-green" width="72%"></img>
            </Col>
            <Col></Col>
        </Container>
    )
}

