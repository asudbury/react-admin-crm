import * as React from "react";
import { Box } from "@material-ui/core";
import { DealsChart } from "./DealsChart";
import { HotContacts } from "./HotContacts";
import { LatestNotes } from "./LatestNotes";
import { DealsPipeline } from "./DealsPipeline";

export const Dashboard = () => {
  return (
    <>
      <Box display="flex" mt="2em">
        <Box flex="3" mr="1em">
          <DealsChart />
        </Box>
      </Box>
      <Box display="flex" mt="2em">
        <Box flex="1" mr="1em">
          <LatestNotes />
        </Box>
        <Box flex="1" display="flex">
          <Box flex="1" mr="1em">
            <HotContacts />
          </Box>
          <Box flex="1">
            <DealsPipeline />
          </Box>
        </Box>
      </Box>
    </>
  );
};
