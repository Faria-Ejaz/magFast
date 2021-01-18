import {Container, Row, Col} from 'react-bootstrap';
import ReactPlayer from 'react-player';

import styles from '../styles/LaunchEvent.module.scss'

export default function LaunchEvent() {
    return (
        <>
            <Container fluid
                className={
                    styles.container
            }>
                <Row className={
                    styles.logo
                }>
                    <img src="https://www.magfast.com/wp-content/uploads/magfast_logo_theater.png" width="15%"></img>
                </Row>
                <Row className={
                    styles['player-wrapper']
                }>
                    <ReactPlayer url="https://player.vimeo.com/video/458025535?app_id=122963" controls
                        className={
                            styles['react-player']
                        }
                        width='100%'
                        height='100%'/>
                </Row>
                <Row className={
                    styles.content
                }>
                    <Col className={
                        styles.line1
                    }>
                        While you're waiting...
                    </Col>
                    <Row className={
                        styles.row1
                    }>
                        <Col xs={8}>
                            <h1 className={
                                styles.line2
                            }>Now share for your FREE upgrade:</h1>
                        </Col>
                        <Col className={
                            styles.icon
                        }>
                            <Row>
                                <img src="https://www.magfast.com/wp-content/uploads/2018/06/facebook.png" width="55%"></img>
                                <p>Facebook</p>
                            </Row>
                            <Row>
                                <img src="https://www.magfast.com/wp-content/uploads/2018/06/twitter.png" width="58%"></img>
                                <p>Twitter</p>
                            </Row>
                        </Col>
                    </Row>
                    <Col>
                        <div className={
                            styles.line3
                        }>
                            <p>
                                Get a FREE upgrade for your FREE MAGFAST Wall...

                            </p>
                            <p>Share now and we'll also pay for an upgrade to $40 surge-protected model.</p>
                            <p>Now your friends get a FREE MAGFAST Wall too!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

