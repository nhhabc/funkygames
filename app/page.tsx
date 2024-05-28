import ContentDisplay from "@/components/Home/ContentDisplay";
import NoteSectionLayout from "@/components/layouts/NoteSectionLayout";
import SideMenu from "@/components/layouts/SideMenu";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex pos={"relative"}>
      <SideMenu/>
      <ContentDisplay/>
      <NoteSectionLayout/>
    </Flex>
  )
}
