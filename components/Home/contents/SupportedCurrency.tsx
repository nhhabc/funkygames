import HeadingText from '@/components/utils/HeadingText'
import ViewDetect from '@/components/utils/ViewDetect'
import { currency } from '@/constants/dummy-data/dummy-data'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import styles from '../css/ContentDisplay.module.css'

const SupportedCurrency = () => {
  return (
    <ViewDetect threshold={0.1} id='supported_currency'>
      <div className={styles.section}>
        <Flex>
          <div className={styles.inside_section}>
            <HeadingText my={"0.5em"}>Supported Currency List</HeadingText>
          </div>
        </Flex>
        <div className={styles.inside_section}>
          <table>
            <thead>
              <tr>
                <th>Currency Code</th>
              </tr>
            </thead>
            <tbody>
              {currency.map((item, i) => (
                <tr key={i}>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ViewDetect>
  )
}

export default SupportedCurrency