/* eslint-disable react/no-unescaped-entities */
import HeadingText from '@/components/utils/HeadingText'
import ViewDetect from '@/components/utils/ViewDetect'
import { Box, Flex, Text } from '@chakra-ui/react'
import styles from '../css/ContentDisplay.module.css'
import React from 'react'

const FrontEndIntegration = () => {
  return (
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
  )
}

export default FrontEndIntegration