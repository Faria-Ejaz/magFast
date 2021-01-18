// import styles from '../../styles/CheckoutSelectorFooter.module.scss';
import {Col, Container, Row} from "react-bootstrap"

export default function CheckoutSelectorFooter() {
    return (
        <footer className="footer">
            <style jsx>
                {`
                .footer {
                    background-color: #e0e0e0;
                    padding: 30px;
                    text-align: center;                
                }
                h2, a {
                    font-size: 19px;
                    color: #808080;
                    padding-bottom: 10px;
                    font-weight: 300;
                }
                b {
                    font-weight: bold;
                }
                `}</style>
            <h2>Copyright © 2020
                <b>&nbsp;MAGFAST LLC.</b>
                All&nbsp;rights&nbsp;reserved</h2>
            <h2>
                <b>MAGFAST®</b>
                is a registered trademark</h2>
            <h2>
                <a href="https://www.magfast.com/pkdf/legal-etc/">Legal etc</a>
            </h2>
        </footer>
    )
}

