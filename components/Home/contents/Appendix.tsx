import HeadingText from '@/components/utils/HeadingText'
import ViewDetect from '@/components/utils/ViewDetect'
import { erorcodes, providergametype, language, timezone } from '@/constants/dummy-data/dummy-data'
import { Flex, Text, Image, Box } from '@chakra-ui/react'
import React from 'react'
import styles from '../css/ContentDisplay.module.css'

const Appendix = () => {
  return (
      <div className={styles.section}>
        <ViewDetect id={"appendix"}>
          <div className={styles.inside_section}>
            <HeadingText my={"0.5em"}>Appendix</HeadingText>
          </div>
        </ViewDetect>
        <ViewDetect id='error_codes_reference'>
          <div className={styles.inside_section}>
            <Text my={"1em"} fontWeight="bold"> 1. Error codes reference</Text>
            <table>
              <thead>
                <tr>
                  <th>Error</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {erorcodes.map((item, i) => (
                  <tr key={i}>
                    <td>{item.error}</td>
                    <td><>
                      {item.description.map((item, i) => (
                        <Text ml={5} key={i}>{`- ${item}`}</Text>

                      ))}
                    </></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ViewDetect>
        <ViewDetect id='provider_game_types'>
          <div className={styles.inside_section}>
            <Text my={"1em"} fontWeight="bold"> 2.  Provider and game types</Text>
            <Text my={"1em"}>Currently these providers are supported (with available game types)</Text>
            <table>
              <thead>
                <tr>
                  <th>Provider ID</th>
                  <th>Provider Name</th>
                  <th>Game Types</th>
                </tr>
              </thead>
              <tbody>
                {providergametype.map((item, i) => (
                  <tr key={i}>
                    <td >{item.providerid}</td>
                    <td><>
                      {item.providername.map((item, i) => (
                        <Text key={i}>{item}</Text>
                      ))}
                    </></td>
                    <td>{item.gametypes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Text my={"1em"} color={["red"]}>Note: you can only use those providers that you have already registered with us beforehand. For more information about game id, please refer to the data in the attached excel file.</Text>
          </div>
        </ViewDetect>
        <ViewDetect id='pagination'>
          <div className={styles.inside_section}>
            <Text my={"1em"} fontWeight="bold">3. Pagination</Text>
            <Text my={"1em"}> Some functions return data in list format such as list of transactions, list of bets… Normally there are many records, they cannot be sent at once. So, we separate them into pages (you may remember the param “pageIndex”, “pageSize”). PageSize is optional, its default value is 100. </Text>
          </div>
        </ViewDetect>
        <ViewDetect id='language'>
          <div className={styles.inside_section}>
            <Text my={"1em"} fontWeight="bold">4. Language</Text>
            <Text my={"1em"}> The table below lists out the languages supported in our system:</Text>
            <table>
              <thead>
                <tr>
                  <th>Value</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {language.map((item, i) => (
                  <tr key={i}>
                    <td>{item.value}</td>
                    <td><>
                      {item.description.map((item, i) => (
                        <Text ml={5} key={i}>{item}</Text>
                      ))}
                    </></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ViewDetect>
        <ViewDetect id='date_time_input_output'>
          <div className={styles.inside_section}>
            <Text my={"1em"} fontWeight="bold">5. Date time in input and output</Text>
            <Text my={"1em"}> As mentioned at the top of this document. All datetime (date that has time) will be based on GMT+0, </Text>
            <Text my={"1em"}> Format: ”yyyy-MM-ddTHH:mm:ss.fffZ”.</Text>
            <Text my={"1em"}> Beside, some functions need clients to send datetime (such as `FromDate`, `ToDate` in these functions: <i>“/data/betlist”</i>,<i> “/data/transaction”</i>, <i>“/data/betlistby”</i>, <i>“/data/winlose”</i>,<i>“/data/winloseall”</i>), in those cases, all datetime in request body should be based on GMT+0 too.</Text>
          </div>
        </ViewDetect>
        <ViewDetect id='supported_timezone'>
          <div className={styles.inside_section} >
            <Text my={"1em"} fontWeight="bold">6. Supported timezone</Text>
            <Text my={"1em"} >Supported Timezone for functions link to this appendix</Text>
              <Box style={{ backgroundColor: 'WhiteSmoke', width: '100%' }}>
                {timezone.map((item, i) => {
                  return Object.entries(item.json).map((value, i) => (
                    <Text key={i}>{`${value[0]} => ${value[1]}`}</Text>
                  ));
                })}
              </Box>
          </div>
        </ViewDetect>
        <ViewDetect id='mimi_seamless_diagram'>
          <div className={styles.inside_section}>
            <Text my={"1em"} fontWeight="bold">7. Mimi seamless diagram</Text>
            <Text my={"1em"}>Diagram:</Text>
            <Image alt='' src='/images/Diagram.png' />
            <Text my={"1em"}>Player balance change: </Text>
            <Image alt='' src='/images/Player_balance_change.png' />
          </div>
        </ViewDetect>
      </div>
  )
}

export default Appendix