import React from "react";
import styles from "./Ball.module.css"

export const Ball = () => {
    return (
        <section className={styles.stage}>
            <figure className={styles.ball}>
                <span className={styles.shadow}></span>
                <span className={styles.eight}></span>
            </figure>
        </section>
    )
}