import styles from './Calculator.module.css'

const Calculator = () => {

  const keypadNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9',];
  const operations = ['+', '-', '*', '/']

  return (
    <div className={styles.calculator}>
        <div className={styles.completeOperation}></div>
        <div className={styles.display}></div>
        <div className={styles.buttons}>
          <button>AC</button>
          {keypadNumbers.map((num) => (
            <button key={num}>{num}</button>
          ))}
          {operations.map((operation) => (
            <button key={operation}>{operation}</button>
          ))}
          <button>=</button>
        </div>
    </div>
  )
}

export default Calculator