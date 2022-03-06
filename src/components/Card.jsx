// import { Box, Text, Image } from "@chakra-ui/react";
import { useTheme } from "../context/ThemeContext";

const Card = ({ date, mintemp, maxtemp, condition, icon }) => {
  const { theme } = useTheme();
  const colorr = theme === "light" ? "rgb(0, 120, 255)" : "aqua";
  const borderr = theme === "light" ? "rgb(50, 50, 50)" : "rgb(190,190,190)";

  return (
    <div
      className="card text-center fw-bold p-3 bg-transparent border-3 rounded-3 ms-3 rounded-3 mt-3 d-flex carddd"
      style={{
        width: "18rem",
        borderColor: borderr,
        boxShadow: "5px 5px 5px #888",
      }}
    >
      <div className="card-body">
        <h5 className="card-title fw-bold ">{date}</h5>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <img
          src={icon}
          style={{ height: "90px", width: "90px", marginTop: "-20px" }}
        />
      </div>
      <span className="mt-3">{condition}</span>
      <span className="mt-3">
        <span style={{ color: "orange" }}>{maxtemp}°C</span> /{" "}
        <span style={{ color: colorr }}>{mintemp}°C</span>
      </span>
    </div>

    // Chakra codes

    // <Box
    //   borderWidth="3px"
    //   borderRadius="lg"
    //   overflow="hidden"
    //   p={"5"}
    //   alignItems="center"
    //   textAlign="center"
    //   minWidth={250}
    //   style={{ borderColor: borderr }}
    // >
    //   <Box p="1">
    //     <Box marginTop="2" fontWeight="semibold">
    //       <Text>{date}</Text>
    //     </Box>
    //     <Box justifyContent="center" display={"flex"} mt="2">
    //       <Image src={icon} />
    //     </Box>
    //     <Box mt="2" fontSize="17px">
    //       <Text fontWeight="semibold">{condition}</Text>
    //       <Text fontWeight="bold" mt={"2"}>
    //         <span style={{ color: "orange" }}>{maxtemp}°C</span> /{" "}
    //         <span style={{ color: colorr }}>{mintemp}°C</span>
    //       </Text>
    //     </Box>
    //   </Box>
    // </Box>
  );
};

export default Card;
