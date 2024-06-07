import ParamsTable from '@/components/utils/ParamsTable'
import { TResponse } from '@/constants/type'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from '@/components/Home/css/ContentDisplay.module.css'

type TResponseItem = {
  response: TResponse
}

const ResponseItem = ({response}: TResponseItem) => {
  const [isShowResponses, setIsShowResponses] = useState(true)

  return (
    <Box>
      <button className={`${styles.respond_button} ${response.code === 200 ? styles.ok : styles.error}`} onClick={() => setIsShowResponses(!isShowResponses)}>
        <span className={styles.chavron_icon}>
          <ChevronDownIcon transition={".2s"} transform={!isShowResponses ? "rotateZ(-90deg)" : "rotateZ(0)"}/>
        </span>
        <strong>{response.code}</strong>
        <span>
          <Text ml={1}>{response.message}</Text>
        </span>
      </button>
      {response.parameter.length !== 0 && isShowResponses && <Box p={"10px"}>
        {response.parameter.map((para, i) => (
          <ParamsTable key={i} data={para}/>
        ))}
      </Box>}
    </Box>
  )
}

export default ResponseItem