/* eslint-disable react/no-unescaped-entities */
import HeadingText from '@/components/utils/HeadingText'
import ViewDetect from '@/components/utils/ViewDetect'
import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import styles from '../css/ContentDisplay.module.css'

const StatementDate = () => {
  return (
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
  )
}

export default StatementDate