import styles from "./Section.module.scss";

const Section = ({title, children}) => 
    <section className={styles.section}>
        <h2>{title}</h2>
      {children}
    </section>


export default Section;