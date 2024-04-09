import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "scenes";
import UserWidget from "scenes/widgets/UserWidget";

const HomePage = () => {
  const isNonMoblieScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMoblieScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMoblieScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box flexBasis={isNonMoblieScreens ? "26%" : undefined}></Box>
        {isNonMoblieScreens && <Box flexBasis="26%"></Box>}
      </Box>
    </Box>
  );
};

export default HomePage;
