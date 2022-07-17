import React from 'react'
import styles from '../../css/ScoringAreaAdd.module.scss'

const ScoringAreaAdd = () => {
  return (
    <div>
      <div >
        <div className={styles.first}>
          <input />
          <input />
        </div>
        <div className={styles.second}>
          <input type='number' />
          <select></select>
        </div>
        <div>
          {/* 캘린더 */}
        </div>
        <div className={styles.btn}>
          <button value='다음' />
        </div>
      </div>
    </div>
  )
}

export default ScoringAreaAdd