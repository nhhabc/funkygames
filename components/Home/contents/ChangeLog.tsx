import HeadingText from '@/components/utils/HeadingText'
import ViewDetect from '@/components/utils/ViewDetect'
import { changeLog } from '@/constants/dummy-data/dummy-data'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../css/ContentDisplay.module.css'

const ChangeLog = () => {
  return (
    <ViewDetect id='change_log' threshold={0.3}>
      <div className={styles.section}>
        <Flex>
          <div className={styles.inside_section}>
            <HeadingText my={"0.5em"}>Change Log</HeadingText>
          </div>
        </Flex>
        <div className={styles.inside_section}>
          <Text my={"1em"}>

          </Text>
          <table>
            <thead>
              <tr>
                <th>Version</th>
                <th>Change Log</th>
                <th>Modify Date</th>
              </tr>
            </thead>
            <tbody>
              {changeLog.map((item, i) => (
                <tr key={i}>
                  <td>{item.version}</td>
                  <td>
                    <Text display={i !== 0 ? "none" : "block"}>First release of the API. Includes bellow functions:
                    </Text>
                    {item.changelog.map((item, i) => (
                      <Text ml={5} key={i}>{`- ${item}`}</Text>

                    ))}
                  </td>
                  <td>{item.modifydate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ViewDetect>
  )
}

export default ChangeLog