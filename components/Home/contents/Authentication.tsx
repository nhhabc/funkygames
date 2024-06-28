import HeadingText from '@/components/utils/HeadingText'
import ViewDetect from '@/components/utils/ViewDetect'
import { Flex, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import styles from '../css/ContentDisplay.module.css'

const Authentication = () => {
  return (
    <ViewDetect id='authentication' threshold={0.6}>
      <div className={styles.section}>
        <Flex>
          <div className={styles.inside_section}>
            <HeadingText my={"0.5em"}>3. Authentication</HeadingText>
          </div>
        </Flex>
          <div className={styles.inside_section}>
            <Text my={"1em"}>API Key and Agent name are predefined values, so client should secure those values. If client wants to get data of agent, client should send these values in body payload. If client wants to get data of certain player, then authorization token of that player is required in request headers. To get that authorization token, consider using Login or RefreshToken functions.
           <br/>
            </Text>
            <Text my={"1em"}>Authorization token mentioned above actually is used as “Bearer authentication”. The client must send this token when making requests to protected resources like this:
            </Text>
            <Text my={"1em"}>Authorization: Bearer {`<token>`}
            </Text>
        </div>
      </div>
    </ViewDetect>
  )
}

export default Authentication