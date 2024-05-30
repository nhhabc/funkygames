/* eslint-disable react/no-unescaped-entities */
import HeadingText from '@/components/utils/HeadingText'
import { Flex } from '@chakra-ui/react'
import styles from '../css/ContentDisplay.module.css'
import React from 'react'
import ApiIntegration from './ApiIntegration'
import FrontEndIntegration from './FrontEndIntegration'
import StatementLanguage from './StatementLanguage'
import SupportedCurrency from './SupportedCurrency'
import ErrorCode from './ErrorCode'
import StatementDate from './StatementDate'
import History from './History'
import Overview from './Overview'

const Preview = () => {
  
  return (
    <>
      <div className={styles.section}>
        <Flex>
          <div className={styles.inside_section}>
            <HeadingText mb={"0.5em"}>Funky API Document for GameProvider</HeadingText>
            <p>
              Download OpenAPI specification: <a target='_blank' href='https://funkygames-specs.com/api/swagger/GameProvider/en/swagger.json' className={styles.download_button}>Download</a>
            </p>
          </div>
        </Flex>
      </div>
      <Overview/>
      <History/>
      <StatementDate/>
      <ErrorCode/>
      <SupportedCurrency/>
      <StatementLanguage/>
      <FrontEndIntegration/>
      <ApiIntegration/>
    </>
  )
}

export default Preview