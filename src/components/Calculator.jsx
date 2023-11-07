import styles from './Calculator.module.css'

const Calculator = () => {
  return (
    <div className={styles.calculator}>
        <div className={styles.completeOperation}>3+3=6</div>
        <div className={styles.display}>6</div>
        <div className={styles.buttons}></div>
        <button>=</button>
    </div>
  )
}

export default Calculator