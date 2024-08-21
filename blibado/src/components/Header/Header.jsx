import style from './Header.module.scss'

export const Header = () =>{

return(
    <header className={style.headerStyle}>
        <h1>bli<span>ba</span><span>do</span><span>&#169;</span></h1>
        <h2>Vi ved hvor du bor!</h2>
    </header>
)

}