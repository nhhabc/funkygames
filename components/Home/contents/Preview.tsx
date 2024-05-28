/* eslint-disable react/no-unescaped-entities */
import HeadingText from '@/components/utils/HeadingText'
import { Box, Flex, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import styles from '../css/ContentDisplay.module.css'
import React from 'react'
import ViewDetect from '@/components/utils/ViewDetect'
import { currency } from '@/constants/dummy-data/dummy-data'

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
      <ViewDetect id='overview'>
        <div className={styles.section}>
          <Flex>
            <div className={styles.inside_section}>
              <HeadingText my={"0.5em"}>Overview</HeadingText>
            </div>
          </Flex>
          <div className={styles.inside_section}>
            <Text my={"1em"}>All games transactions must pass by the Funky system to the operator.
              <br/>
              <br/>
              The Funky system is responsible for the following actions:
            </Text>
            <UnorderedList>
              <ListItem>Direct the player to the game – Redirect the player to the game via the URL provided by the game provider.</ListItem>
              <ListItem>Game’s Betting – Place Bet, Bet Settlement, Check Bet, Refund or Void Bet.</ListItem>
              <ListItem>Player’s Bet info – Managing the player’s bet information.</ListItem>
            </UnorderedList>
            <Text my={"1em"}>
              The communication interface between the games and the Funky System is performed as server to server communication via HTTPS (using POST method).
              <br/>
              Requests and responses are sent in JSON format. The structure of the JSON and the element’s information are defined in this document.
            </Text>
            <Text my={"1em"}>Operator needs to implement Seamless API for Funky System to invoke to place a bet or settle a bet.</Text>
            <Image alt='' src='https://storage.googleapis.com/funky-spec/gp_flow.jpg'/>
          </div>
        </div>
      </ViewDetect>
      <ViewDetect id='history'>
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
      <ViewDetect id='statement_date'>
        <div className={styles.section}>
          <Flex>
            <div className={styles.inside_section}>
              <HeadingText my={"0.5em"}>Statement Date</HeadingText>
            </div>
          </Flex>
          <div className={styles.inside_section}>
            <Text my={"1em"}>
              In order to avoid some factors to wrong daily and monthly reconciliation such as time zone or unsynchronized
              <br/>
              server time, Funky Games completely follow the operator's time system so that both sides can completely avoid
              <br/>
              untallied information on reconciliation
            </Text>
            <Text my={"1em"}>
              Statement Date is for abstracting the detail on how Funky System deals with operators from different time zones
              <br/>
              so that game providers can set the time zone to whatever they need for their servers.
            </Text>
            <Box my={"1em"}>
              <h4>DOs:</h4>
            </Box>
            <UnorderedList>
              <ListItem>Record every bet with its statement date attached to settlement response.</ListItem>
            </UnorderedList>
            <Box my={"1em"}>
              <h4>DON’Ts:</h4>
            </Box>
            <UnorderedList>
              <ListItem>Don’t record any bet with server time or any other system level time settings only.</ListItem>
              <ListItem>Don’t convert the statement date to any other time zone.</ListItem>
              <ListItem>Don’t use any bet created time to be a statement date.</ListItem>
            </UnorderedList>
            <Text my={"1em"}>The below examples explain how Statement Date deals with time zones and time:</Text>
            <Box my={"1em"}>
              <h4>Case A: Different time zones</h4>
            </Box>
            <Text>
              When Funky Games is settling a bet at 03/02/2020 01:00:00 (GMT+0) where the time for operator is 03/01/2020
              <br/>
              21:00:00(GMT-4), then operator may consider this bet should be count in 03/01 instead of 03/02. In this case,
              <br/>
              the statement date of the bet is marked 03/01/2020.
            </Text>
            <Box my={"1em"}>
              <h4>Case B: Same time zone but unsynchronized server time in difference of few seconds</h4>
            </Box>
            <Text>
              When Funky Games is settling a bet at 03/01/2020 23:59:59 (GMT+0) and the operator received the settlement
              <br/>
              request at 03/02/2020 00:00:01(GMT+0). This situation may happen due to network latency, unstable connection,
              <br/>
              heavy traffics or re-settlement mechanism, the operator may consider this bet should be count in 03/02.
            </Text>
            <Box my={"1em"}>
              <h4>Case C: Taking bet created time as statement date</h4>
            </Box>
            <Text>
              Assume that Funky Games placed a bet to the operator at 03/01/2020 23:59:59 (GMT+0) and the bet was settled at
              <br/>
              03/02/2020 00:00:10 (GMT+0), some operators may take the created time of the bet as the statement date instead
              <br/>
              of the bet settlement time. This situation may happen due to late settlement.
            </Text>
          </div>
        </div>
      </ViewDetect>
      <ViewDetect id='error_code'>
        <div className={styles.section}>
          <Flex>
            <div className={styles.inside_section}>
              <HeadingText my={"0.5em"}>Error Code List</HeadingText>
            </div>
          </Flex>
          <div className={styles.inside_section}>
            <Text my={"1em"}>
              Following are the error code which should be responded to Funky System properly and vice versa.
            </Text>
            <table>
              <thead>
                <tr>
                  <th>Error Code</th>
                  <th>Error Message</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>Success</td>
                </tr>
                <tr>
                  <td>400</td>
                  <td>Invalid Input</td>
                </tr>
                <tr>
                  <td>401</td>
                  <td>Player Not Login</td>
                </tr>
                <tr>
                  <td>402</td>
                  <td>Insufficient Balance</td>
                </tr>
                <tr>
                  <td>403</td>
                  <td>Bet already exists</td>
                </tr>
                <tr>
                  <td>404</td>
                  <td>Bet Was Not Found</td>
                </tr>
                <tr>
                  <td>405</td>
                  <td>Api Suspended</td>
                </tr>
                <tr>
                  <td>406</td>
                  <td>Over Max Winning</td>
                </tr>
                <tr>
                  <td>407</td>
                  <td>Over Max Lose</td>
                </tr>
                <tr>
                  <td>409</td>
                  <td>Bet Already Settled</td>
                </tr>
                <tr>
                  <td>410</td>
                  <td>Bet Already Cancelled</td>
                </tr>
                <tr>
                  <td>3002</td>
                  <td>Report Invalid Input</td>
                </tr>
                <tr>
                  <td>3003</td>
                  <td>Report Page Not Found</td>
                </tr>
                <tr>
                  <td>3004</td>
                  <td>Report GameCode Not Found</td>
                </tr>
                <tr>
                  <td>9999</td>
                  <td>Internal Server Error</td>
                </tr>
                <tr>
                  <td>503</td>
                  <td>Under Maintenance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ViewDetect>
      <ViewDetect id='supported_currency'>
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
    </>
  )
}

export default Preview