/* eslint-disable react/no-unescaped-entities */
import HeadingText from '@/components/utils/HeadingText'
import { Box, Flex, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import styles from '../css/ContentDisplay.module.css'
import React from 'react'
import ViewDetect from '@/components/utils/ViewDetect'
import { currency, errorCode, language } from '@/constants/dummy-data/dummy-data'

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
                {errorCode.map((item, i) => (
                  <tr key={i}>
                    <td>{item.code}</td>
                    <td>{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ViewDetect>
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
      <ViewDetect id='front_end_integration'>
        <div className={styles.section}>
          <Flex>
            <div className={styles.inside_section}>
              <HeadingText my={"0.5em"}>Front-End Integration</HeadingText>
            </div>
          </Flex>
          <div className={styles.inside_section}>
            <Text my={'1em'}>
              Front-end integration is a two-way communication between operator and the game embedded inside the iframe.
              <br/>
              The implementation uses cross-origin communication between "window" objects via the "window.postMessage" function and the "message"
              <br/>
              event.
              <br/>
              As the game is embedded in the iframe, it sends a message to the parent window.
            </Text>
            <Box my={"1.5em"}>
              <h4>Operator sending message example:</h4>
            </Box>
            <Box my={"1.5em"}>
              <code>window.parent.postMessage(message, "*");</code>
            </Box>
            <Box my={"1.5em"}>
              <h4>To receive messages, subscribe to the "message" event:</h4>
            </Box>
            <Box my={"1.5em"}>
              <pre>
                {`window.addEventListener("message", function(event){\n  console.log(event.data); //event.data is message sent from iFrame window.\n});`}
              </pre>
            </Box>
            <Box my={"1.5em"}>
              <h4>Message data is a JavaScript object in the following format:</h4>
            </Box>
            <Box my={"1.5em"}>
              <pre>
              {`{\n  "name": "messageName",\n  "sender":"game",\n}`}
              </pre>
            </Box>
            <Box my={"1.5em"}>
              <h2>The following messages need to be implemented.</h2>
            </Box>
            <Box my={"1.5em"}>
              <h1>Stop Auto Play</h1>
            </Box>
            <Text my={"1em"}>
              This message is sent from operator to the game to stop auto play.
              <br/>
              This kind of message is usually sent by operator when a modal window is about to appear, and the user is not able to interact with the game.
            </Text>
            <Box my={"1em"}>
              <h4>This format indicates that the message is intended to stop autoplay, with the specific name "stopAutoplay" and the sender being any word.</h4>
            </Box>
            <Box my={"1.5em"}>
              <pre>
                {`{\n  "name": "stopAutoplay",\n  "sender": "anyOperator"\n}`}
              </pre>
            </Box>
          </div>
        </div>
      </ViewDetect>
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
    </>
  )
}

export default Preview