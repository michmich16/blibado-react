import s from './Location.module.scss'

export const Location = (props) => {

    return (
            <article className={s.locationStyle}>
                <img src={`./${props.img}`} />
                <div>
                    <h3>{props.locationHeader}</h3>
                    <h4>Antal Sovepladser:</h4>
                    <p>Voksne {props.locationAdult}</p>
                    <p>Børn {props.locationChild}</p>
                    <h4>Faciliteter:</h4>
                    <p>Vask: {props.locationWashingMachine}</p>
                    <h4>Reservation:</h4>
                    <p> {props.locationReservationReq}</p>
                    <h4>Pris / Døgn:</h4>
                    <p>Kr.: {props.locationPrice},-</p>
                    <h4>Beskreivelse:</h4>
                    <p>{props.locationDescription}</p>
                </div>
            </article>
    )

}