import s from './About.module.scss'

export const About = (props) =>{

return(

       
    <section className={s.aboutStyle}>
        <video src={`./${props.video}`} autoPlay loop muted ></video>
        <article>
            <h3>{props.aboutHeader}</h3>
            <p>{props.aboutText}</p>
            <a href="#">Læs mere:</a>
        </article>
    </section>

)

}