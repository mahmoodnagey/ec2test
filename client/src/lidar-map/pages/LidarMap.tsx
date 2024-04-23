import { Helmet } from "react-helmet";
import { Flex, Paper } from "@mantine/core";
import MainTitle from "../../design-system/components/MainTitle";
import KeyValueCard from "../../design-system/components/KeyValueCard";
import useIsMobile from "../../design-system/hooks/use-is-mobile";

// import RobotPosition from "../../rosbridge/RobotPosition";
// import Teleoperation from "../../rosbridge/Teleoperation";
import RosbridgeConnection from "../../rosbridge/RosbridgeConnection";
// igit mport ImageStream from "../../rosbridge/ImageStream";

export default function LidarMap() {
  const mobile = useIsMobile();
  return (
    <>
      <Helmet>
        <title>LidarMap</title>
      </Helmet>
      <MainTitle title="Lidar Map" />
      <Paper
        shadow="md"
        radius="md"
        // p="md"
        // mb="xl"
      >
        <Flex
          justify="space-between"
          direction={mobile ? "column" : "row"}
          gap="md"
          // my="lg"
        >
          <Flex
          // w={mobile ? "100%" : "48%"}
          >
            <KeyValueCard label="Voltage" value={"16 " + "V"} />
          </Flex>
          <Flex
          // w={mobile ? "100%" : "48%"}
          >
            <KeyValueCard label="Current" value="50 A" />
          </Flex>
        </Flex>
        <RosbridgeConnection />
        {/* <RobotPosition /> */}
        {/* <ImageStream /> */}
        {/* <Teleoperation /> */}
      </Paper>
    </>
  );
}
