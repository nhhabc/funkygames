import HeadingText from '@/components/utils/HeadingText'
import ViewDetect from '@/components/utils/ViewDetect'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import styles from '../css/ContentDisplay.module.css'

const ApiIntegration = () => {
  return (
    <ViewDetect id='api_integration'>
      <div className={styles.section}>
        <Flex>
          <div className={styles.inside_section}>
            <HeadingText my={"0.5em"}>API Integration Information</HeadingText>
          </div>
        </Flex>
        <div className={styles.inside_section}>
          <table>
            <thead>
              <tr><th colSpan={3}>API Integration Information</th></tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>Production</td>
                <td>API Address</td>
                <td>https://cfbb7e4b9e25.funplayfky.com/</td>
              </tr>
              <tr>
                <td>Report API Address</td>
                <td>https://rs5kf13akf3f.funplayfky.com/</td>
              </tr>
              <tr>
                <td rowSpan={2}>UAT</td>
                <td>API Address</td>
                <td>http://trial-gp-api.funkytest.com/</td>
              </tr>
              <tr>
                <td>Report API Address</td>
                <td>http://trial-gp-api-report.funkytest.com/</td>
              </tr>
            </tbody>
            <thead>
              <tr><th colSpan={3}>FunkyGames Authentication & User-Agent</th></tr>
            </thead>
            <tbody>
              <tr><td colSpan={3}>Please always verify the below information attached to every request header when receiving API call from Funky Games API. (For Seamless Wallet only)</td></tr>
              <tr>
                <td rowSpan={2}>Production</td>
                <td>Authentication</td>
                <td>23d828a8-0bba-49e8-90a6-9007bb50de1f/</td>
              </tr>
              <tr>
                <td>User-Agent</td>
                <td>funky</td>
              </tr>
              <tr>
                <td rowSpan={2}>UAT</td>
                <td>Authentication</td>
                <td>23d828a8-0bba-49e8-90a6-9007bb50de1f</td>
              </tr>
              <tr>
                <td>User-Agent</td>
                <td>funky</td>
              </tr>
            </tbody>
            <thead>
              <tr><th colSpan={3}>FunkyGames API IPs to be whitelisted</th></tr>
            </thead>
            <tbody>
              <tr><td colSpan={3}>Please always verify the below information attached to every request header when receiving API call from Funky Games API. (For Seamless Wallet only)</td></tr>
              <tr>
                <td>Production</td>
                <td colSpan={2}>
                  104.155.236.91
                  <br/>
                  35.194.208.47
                  <br/>
                  35.194.212.54
                  <br/>
                  34.80.38.181
                  <br/>
                  34.170.107.143
                </td>
              </tr>
              <tr>
                <td>UAT</td>
                <td colSpan={2}>
                  35.194.208.47
                  <br/>
                  34.80.38.181
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ViewDetect>
  )
}

export default ApiIntegration