import React from 'react'

import { navs as navTabs } from '../../constants/const'
import styles from './style.module.css'

const NavigationBar = ({ activeTab, useThisStyle }) => (
  <nav className={useThisStyle ? styles.useThisStyle  : styles.navigationBar}>
      {navTabs.map(tab => <li className={tab === activeTab ? styles.active : ''}>
          {tab}</li>
      )}
  </nav>
)

//nav className={styles[useThisStyle || navigationBar]}

export default NavigationBar