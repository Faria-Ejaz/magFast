import styles from '../../styles/ProductChoice.module.scss'
import { Container, Col, Row } from 'react-bootstrap';

export default function ProductChoice() {
    return (
        <Container className={styles.container}>
            <Row>
                <h4 className={
                    styles.title
                }>Alpine White or Forest&nbsp;Green?</h4>
            </Row>
            <Row>
                <Col md={5} className={
                    styles.images
                }>
                    <a href="#" data-onclick="alpine"
                    >
                        <img width="100%" height="100%" src="https://www.magfast.com/wp-content/uploads/pro-kit-halloween-style-skyscraper-trs-white-hero-shot-427027364-pkdf3.png" class="attachment-full size-full" alt="" loading="lazy" srcset="https://www.magfast.com/wp-content/uploads/pro-kit-halloween-style-skyscraper-trs-white-hero-shot-427027364-pkdf3.png 1080w, https://www.magfast.com/wp-content/uploads/pro-kit-halloween-style-skyscraper-trs-white-hero-shot-427027364-pkdf3-300x300.png 300w, https://www.magfast.com/wp-content/uploads/pro-kit-halloween-style-skyscraper-trs-white-hero-shot-427027364-pkdf3-1024x1024.png 1024w, https://www.magfast.com/wp-content/uploads/pro-kit-halloween-style-skyscraper-trs-white-hero-shot-427027364-pkdf3-150x150.png 150w, https://www.magfast.com/wp-content/uploads/pro-kit-halloween-style-skyscraper-trs-white-hero-shot-427027364-pkdf3-768x768.png 768w, https://www.magfast.com/wp-content/uploads/pro-kit-halloween-style-skyscraper-trs-white-hero-shot-427027364-pkdf3-600x600.png 600w, https://www.magfast.com/wp-content/uploads/pro-kit-halloween-style-skyscraper-trs-white-hero-shot-427027364-pkdf3-100x100.png 100w, https://www.magfast.com/wp-content/uploads/pro-kit-halloween-style-skyscraper-trs-white-hero-shot-427027364-pkdf3-32x32.png 32w" sizes="(max-width: 1080px) 100vw, 1080px" itemprop="image"></img>
                    </a>
                </Col>
                <Col className={
                    styles.or
                } md={2}>
                  
                        <p className={
                            styles.text
                        }>or</p>
                </Col>
                <Col className={
                    styles.images
                } md={5}>
                    <a href="#" data-onclick="forest"
                    >
                        <img width="100%" height="100%" src="https://www.magfast.com/wp-content/uploads/pro-kit-halloween-style-skyscraper-trs-green-hero-shot-427027364-pkdf-3.png" class="attachment-full size-full" alt="" loading="lazy" srcset="https://www.magfast.com/wp-content/uploads/pro-kit-halloween-style-skyscraper-trs-green-hero-shot-427027364-pkdf-3.png 1080w, https://www.magfast.com/wp-content/uploads/pro-kit-halloween-style-skyscraper-trs-green-hero-shot-427027364-pkdf-3-300x300.png 300w, https://www.magfast.com/wp-content/uploads/pro-kit-halloween-style-skyscraper-trs-green-hero-shot-427027364-pkdf-3-1024x1024.png 1024w, https://www.magfast.com/wp-content/uploads/pro-kit-halloween-style-skyscraper-trs-green-hero-shot-427027364-pkdf-3-150x150.png 150w, https://www.magfast.com/wp-content/uploads/pro-kit-halloween-style-skyscraper-trs-green-hero-shot-427027364-pkdf-3-768x768.png 768w, https://www.magfast.com/wp-content/uploads/pro-kit-halloween-style-skyscraper-trs-green-hero-shot-427027364-pkdf-3-600x600.png 600w, https://www.magfast.com/wp-content/uploads/pro-kit-halloween-style-skyscraper-trs-green-hero-shot-427027364-pkdf-3-100x100.png 100w, https://www.magfast.com/wp-content/uploads/pro-kit-halloween-style-skyscraper-trs-green-hero-shot-427027364-pkdf-3-32x32.png 32w" sizes="(max-width: 1080px) 100vw, 1080px" itemprop="image"></img>
                    </a>
                </Col>

            </Row>
            <Row className={styles.textRow}>
                <p className={
                    styles.text
                }>PRO KIT CONTENTS</p>
                <p className={
                    styles.text
                }>1 MAGFAST Life™, 1 MAGFAST Extreme, 1 MAGFAST Road™, 1 MAGFAST Air™, 2 MAGFAST Wall 2Xs™ with Double-the-Power™, 1 Lightning Adaptor Tip, 1 USB-C Adapter Tip, 1 Micro-USB Adapter Tip, 1 Lightning Family Cable, 1 USB-C Family Cable, 3 Micro-USB Family Cables. You may add MAGFAST Time™ for Apple Watch™ and 12v Jumper Cables below.</p>
            </Row>
        </Container>
    )
}

