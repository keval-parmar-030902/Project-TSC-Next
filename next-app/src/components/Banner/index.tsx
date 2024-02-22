import React from 'react'
import styles from './banner.module.css'
import Image from 'next/image'
import task from '@/public/task1.png'

interface Props {

}

const Banner = (props: Props) => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.banner}>
                    <div className={styles.image}>
                        <Image src={task} alt="" height={100} width={100} />
                    </div>
                    <div className={styles.premium}>
                        <h2>Premium Account</h2>
                        <div className={styles.text}>You have a premium account, granting you access to all the remarkable features offered by Resume Done. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover letters in both PDF and Word formats.</div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Banner
