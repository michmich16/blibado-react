import style from './Container.module.scss'

export const Container= (props)=>{

    return(
        <div className={style.containerStyle}>
            {props.children}
        </div>
    )
}