import { Box, Text, Image } from "@chakra-ui/react";
import { useTheme } from "../context/ThemeContext";

const Card = ({ date, mintemp, maxtemp, condition, icon }) => {
  const { theme } = useTheme();
  const colorr = theme === "light" ? "rgb(0, 120, 255)" : "aqua";
  const borderr = theme === "light" && "rgb(80, 80, 80)";

  return (
    <Box
      borderWidth="3px"
      borderRadius="lg"
      overflow="hidden"
      p={"5"}
      alignItems="center"
      textAlign="center"
      minWidth={250}
      style={{ borderColor: borderr }}
    >
      <Box p="1">
        <Box marginTop="2" fontWeight="semibold">
          <Text>{date}</Text>
        </Box>
        <Box justifyContent="center" display={"flex"} mt="2">
          <Image src={icon} />
        </Box>
        <Box mt="2" fontSize="17px">
          <Text fontWeight="semibold">{condition}</Text>
          <Text fontWeight="bold" mt={"2"}>
            <span style={{ color: "orange" }}>{maxtemp}°C</span> /{" "}
            <span style={{ color: colorr }}>{mintemp}°C</span>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
