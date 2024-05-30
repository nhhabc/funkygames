import HeadingText from '@/components/utils/HeadingText';
import ViewDetect from '@/components/utils/ViewDetect';
import { Box, Flex, Text } from '@chakra-ui/react';
import styles from '@/components/Home/css/ContentDisplay.module.css'
import React, { useState } from 'react'
import { TApiData } from '@/constants/type';
import ApiBrand from '@/components/utils/ApiBrand';
import ParamsTable from '@/components/utils/ParamsTable';
import { ChevronDownIcon } from '@chakra-ui/icons';

type TApiContainerProps = {
  data: TApiData;
}

const ApiContainer = ({data}: TApiContainerProps) => {
  const [isShowResponses, setIsShowResponses] = useState(true)

  return (
    <>
      <ViewDetect threshold={0.7} id={data.id}>
        <div className={styles.section}>
          <Flex>
            <div className={styles.inside_section}>
              <HeadingText my={"0.5em"}>{data.title}</HeadingText>
            </div>
          </Flex>
        </div>
      </ViewDetect>
      {data.api.map((api, i) => (
        <ViewDetect threshold={0.4} id={api.id} key={i}>
          <div className={styles.section}>
            <Flex>
              <div className={styles.inside_section}>
                <Box mb={"20px"}>
                  <h2>{api.title}</h2>
                </Box>
                <Box mb={"5px"}>
                  <button className={styles.api_button}>
                    <ApiBrand type={api.type} />
                    <p className={styles.api_text}>{api.endpoint}</p>
                  </button>
                </Box>
                <Box mb={"30px"} mt={"10px"}>
                  <Text>{api.description}</Text>
                </Box>
                {api.parameter.map((item, i) => (
                  <ParamsTable key={i} data={item}/>
                ))}
                <Box mt={"55px"} mb={"20px"} w={"100%"}>
                  <h3>
                    Responses
                  </h3>
                  {api.responses.map((response, i) => (
                    <Box key={i}>
                      <button className={styles.respond_button} onClick={() => setIsShowResponses(!isShowResponses)}>
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
                  ))}
                </Box>
              </div>
              <div className={styles.next_section}>
                <Box>
                  {api.sample.map((sample, i) => (
                    <>
                      <Text color='#fff' fontSize={"18px"} fontWeight={"bold"} my={"16px"}>{sample.name}</Text>
                      <Box>
                        <Box>
                          <div className={styles.response_button} style={{color: sample.payload === "200" ? "rgb(29, 129, 39)" : ""}}>
                            {sample.payload}
                          </div>
                        </Box>
                        <Box bg={"rgb(17, 23, 26)"} p={"20px"}>
                          <Box pos={"relative"}>
                            <span className={styles.content_type_text}>Content type</span>
                            <div className={styles.content_type_container}>{sample.contentType}</div>
                          </Box>
                          <Box mt={"15px"}>
                            <div className={styles.button_container}>
                              <button>Copy</button>
                            </div>
                            <div className={styles.code_container}>
                              <div>{JSON.stringify(sample.json, null, 2)}</div>
                            </div>
                          </Box>
                        </Box>
                      </Box>
                    </>
                  ))}
                </Box>
              </div>
            </Flex>
          </div>
        </ViewDetect>
      ))}
    </>
  )
}

export default ApiContainer