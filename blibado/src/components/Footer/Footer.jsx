import s from './Footer.module.scss';

export const Footer = () => {

    return (
        <footer className={s.footerStyle}>
            <div className={s.footerLocationStyle}>
                <h3>Din Lokation:</h3>
                <ul>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8681.433172560925!2d9.903117182101111!3d57.045407010420966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464932f29aa1278b%3A0x6356c3f7e04274e4!2sAalborg%20Centrum%2C%209000%20Aalborg!5e0!3m2!1sda!2sdk!4v1724241380520!5m2!1sda!2sdk"
            />
                </ul>
            </div>
            <div className={s.footerInformationStyle}>
                <h3>Informationer:</h3>
                <ul>
                    <li>Boulevard 29, 9000 Aalborg</li>
                    <li>3344 5566</li>
                    <li>info@blibado.dk</li>
                    <li>CVR: 5533 66 7788</li>
                </ul>
            </div>
        </footer>
    )

}