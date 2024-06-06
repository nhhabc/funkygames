import React, { useState } from 'react'
import styles from "@/components/Home/css/ContentDisplay.module.css"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'
import { TParameter } from '@/constants/type'

type TParamsTableProps = {
  data: TParameter
}

const ParamsTable = ({data}: TParamsTableProps) => {
  const [isShowDataObject, setIsShowDataObject] = useState(false)

  return (
    <>
      <h5>{data.name}{data.description && ":"} <span className={styles.note}>{data.description}</span></h5>
      <table className={styles.parameter_table}>
          {data?.params?.map((item, i) => (
            <tbody key={i}>
              <tr>
                <td className={styles.parameter_text}>
                  <span className={styles.noted_table_item}/>
                  <span style={{cursor: item.type.includes("object") ? "pointer" : ""}} onClick={() => setIsShowDataObject(!isShowDataObject)}>
                    {item.name} {item.type.includes("object") && <ChevronRightIcon transition={".2s"} transform={isShowDataObject ? "rotateZ(90deg)" : "rotateZ(0)"}/>}
                  </span>
                  {item.required && <div className={styles.required}>required</div>}
                </td>
                <td className={styles.parameter_details}>
                <div>
                  <Text color={"rgb(102, 102, 102)"} sx={requirementText}>{item.type}</Text>
                  {item.name !== "errorCode" ? 
                    <Text>{item.description}</Text> : 
                    <Text>{item.description.split(",").map((item, i) => <code key={i}>{item}</code>)}</Text>}
                </div>
                </td>
              </tr>
              {isShowDataObject && item.type.includes("object") && 
              <tr>
                <td colSpan={2}>
                  <Box m={"1em 0em 1em 1em"} p={"1em"} bg={"rgb(250, 250, 250)"}>
                    <table className={styles.table_children}>
                      <tbody>
                        {item.schema?.map((s, i) => (
                          <tr key={i}>
                            <td className={styles.parameter_text}>
                              <span className={styles.noted_table_item}/>
                              <span>{s.name}</span>
                              {s.required && <div className={styles.required}>required</div>}
                            </td>
                            <td className={styles.parameter_details}>
                            <div>
                              <Text color={"rgb(102, 102, 102)"} sx={requirementText}>{s.type}</Text>
                              <Text>{s.description}</Text>
                            </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                </td>
              </tr>}
        </tbody>
          ))}
      </table>
    </>
  )
}

export default ParamsTable

const requirementText = {
  verticalAlign: "middle",
  fontSize: "13px",
  lineHeight: "20px",
}