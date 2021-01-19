import styles from '../styles/CheckoutSelector.module.scss'
import Header from '../components/Header/CheckoutSelectorHeader';
import Footer from '../components/Footer/CheckoutSelectorFooter';
import ProductChoice from '../components/ProductChoice/ProductChoice';
import OfferSelection from '../components/OfferSelection/OfferSelection';
import ProdQuantity from '../components/ProdQuantity/ProdQuantity';
import Extras from '../components/Extras/Extras';
import Summary from '../components/Summary/Summary';

import {Container, Row} from 'react-bootstrap';

export default function CheckoutSelector() {
    return (
        <div className={styles.mainContainer}>
            <Header/>
            <br/>
            <Container className={styles.container}>
                <Row className={styles.widgetContainer}>
                    <img width="300" height="107" src="https://www.magfast.com/wp-content/uploads/trustpilot-magfast-vision-rated-excellent.png" class="attachment-full size-full" alt="" loading="lazy" srcset="https://www.magfast.com/wp-content/uploads/trustpilot-magfast-vision-rated-excellent.png 600w, https://www.magfast.com/wp-content/uploads/trustpilot-magfast-vision-rated-excellent-300x104.png 300w" sizes="(max-width: 600px) 100vw, 600px" itemprop="image"></img>
                </Row>
                <Row>
                    <h2 className={styles.headingTitle}>Build your Pro&nbsp;Kit</h2>
                </Row>
                <Row>
                    <p className={styles.line1} >Not going Pro? Please&nbsp;scroll&nbsp;down&nbsp;the&nbsp;page.</p>
                </Row>
                <ProductChoice/>
                <OfferSelection/>
                <ProdQuantity/>
                <Extras/>
                <br></br>
                <Row>
                    <h2 className={styles.headingTitle}>Great Choice</h2>
                </Row>
                <Row>
                    <h2 className={styles.thanks}>Thanks to you:</h2>
                </Row>
                <Row>
                <p className={styles.gct} ><span  className={styles.gctrees}>14</span> Trees will be planted ≈&nbsp;<span className={styles.gctrees}>700</span>&nbsp;lb&nbsp;CO₂&nbsp;cleared/year</p>
                </Row>
                <Row>                    
                    <p className={styles.line1} >(Yup, that’s <span >80</span> blimps-full of&nbsp;fresh&nbsp;clean&nbsp;air!)</p>
                </Row>
                <Summary/>
                <br></br>
                <Row>
                    <p className={styles.lastLine} >Not going Pro? Follow <a href="https://www.magfast.com/trustpilot-freewall-interstitial/">this link</a>.</p>
                </Row>
                <Row>
                <p className={styles.lastLine}> MAGFAST LLC, 1 Grandview Avenue, Cornwall on Hudson, NY 12520 USA</p>

                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

