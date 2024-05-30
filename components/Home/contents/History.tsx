import HeadingText from '@/components/utils/HeadingText'
import ViewDetect from '@/components/utils/ViewDetect'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import styles from '../css/ContentDisplay.module.css'

const History = () => {
  return (
    <ViewDetect threshold={0.6} id='history'>
      <div className={styles.section}>
        <Flex>
          <div className={styles.inside_section}>
            <HeadingText my={"0.5em"}>History</HeadingText>
          </div>
        </Flex>
        <div className={styles.inside_section}>
          <table className={styles.default_table}>
            <thead>
              <tr>
                <th>Version</th>
                <th>Date</th>
                <th>Author</th>
                <th>LogDescription</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.49</td>
                <td>09/27/2022</td>
                <td>Agnes Chou</td>
                <td>
                  Remove API-
                  <br/>
                  GetTransactionListByPlayer
                  <br/>
                  GetConsolidateReport
                  <br/>
                  GetConsolidateByGame.
                </td>
              </tr>
              <tr>
                <td>1.50</td>
                <td>02/16/2024</td>
                <td>Neil Tao</td>
                <td>
                  Add void bets API.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ViewDetect>
  )
}

export default History