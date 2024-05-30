import HeadingText from '@/components/utils/HeadingText'
import ViewDetect from '@/components/utils/ViewDetect'
import { Flex, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import styles from '../css/ContentDisplay.module.css'

const Overview = () => {
  return (
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
  )
}

export default Overview