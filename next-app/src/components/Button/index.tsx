import React from 'react'
import style from './button.module.css'
interface Props {
    
}

const Button = (props: Props) => {
    return (
        <>
            <button className={style.button}> Save</button>
        </>
    )
}

export default Button
