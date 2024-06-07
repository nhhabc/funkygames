import HeadingText from '@/components/utils/HeadingText'
import ViewDetect from '@/components/utils/ViewDetect'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../css/ContentDisplay.module.css'
import Link from 'next/link'

const Overview = () => {
  return (
    <ViewDetect id='overview' threshold={0.9}>
      <div className={styles.section}>
        <Flex>
          <div className={styles.inside_section}>
            <HeadingText my={"0.5em"}>Overview</HeadingText>
          </div>
        </Flex>
        <div className={styles.inside_section}>
          <Text my={"1em"}>Your Exclusive Domain:</Text>
          <Text my={"1em"}>
            <Link href='#'>{`https://{{api_domain}}`}</Link>
          </Text>
          <Text my={"1em"}>
            <Link href='#'>{`https://{{data_domain}}`}</Link>
          </Text>
          <Text my={"1em"}>Your Exclusive ApiKey:</Text>
          <Text my={"1em"}>
            <Link href='#'>{`{{api_key}}`}</Link>
          </Text>
          <Text my={"1em"}>Remember your current URL! It’s your exclusive document entry.</Text>
          <Text my={"1em"}>All requests will be made through <i>HTTP POST</i>. Content type is always <i>application/json</i>.</Text>
          <Text my={"1em"}>Authentication token (if required) will be attached to request headers, while API Key and Agent name (if required) will be sent via body payload.</Text>
        </div>
      </div>
    </ViewDetect>
  )
}

export default Overview