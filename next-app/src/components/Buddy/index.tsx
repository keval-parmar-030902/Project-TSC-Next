import Image from 'next/image'
import React from 'react'
import person from '@/public/person.webp'
import styles from './buddy.module.css'

interface Props {
    
}

const Buddy = (props: Props) => {
    return (
        <div className={styles.imagesection}>
            <Image src={person} className={styles.image} alt={'person image'} width={200} height={200}/>
        </div>
    )
}

export default Buddy
