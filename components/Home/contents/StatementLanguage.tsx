import HeadingText from '@/components/utils/HeadingText'
import ViewDetect from '@/components/utils/ViewDetect'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../css/ContentDisplay.module.css'
import { language } from '@/constants/dummy-data/dummy-data'

const StatementLanguage = () => {
  return (
    <ViewDetect id='statement_language'>
      <div className={styles.section}>
        <Flex>
          <div className={styles.inside_section}>
            <HeadingText my={"0.5em"}>Supported Language List</HeadingText>
          </div>
        </Flex>
        <div className={styles.inside_section}>
          <table>
            <thead>
              <tr>
                <th>Language</th>
                <th>Language Code</th>
                <th>ISO Language</th>
              </tr>
            </thead>
            <tbody>
              {language.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.code}</td>
                  <td>{item.iso}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Text mt={"1em"}>If the operator delivers “ZH_TW”, we will return “ZH_CN</Text>
        </div>
      </div>
      </ViewDetect>
  )
}

export default StatementLanguage