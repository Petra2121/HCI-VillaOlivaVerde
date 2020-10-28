import React from 'react'
 
import TitleImage from '../../components/TitleImage'
import InquiryBlock from '../../components/InquiryBlock'
import styles from './styles.module.css'
 
const TitlePage = () => (
    <section className={styles.titlePage}>
        <TitleImage />
        <InquiryBlock />
    </section>
)
 
export default TitlePage