import { Input, Box, Button, Grid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { useTheme } from "./context/ThemeContext";
import "./App.css";

function App() {
  const [city, setCity] = useState("Antalya");
  const [weatherData, setWeatherData] = useState([]);
  const { theme, setTheme } = useTheme();

  const borderr = theme === "light" && "rgb(80, 80, 80)";

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    getData("antalya");
  }, []);

  async function getData(value) {
    const data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=5b2f91048bd54740ac361313220103&q=${value}&days=7&aqi=no&alerts=no&lang=en
      `
    );
    const result = await data.json();
    setWeatherData(result.forecast.forecastday);
  }

  return (
    <div className={`body ${theme}`}>
      <Box position="absolute" right={"10px"}>
        <Button
          variant={"none"}
          onClick={() => setTheme("light")}
          fontSize={"30px"}
          marginRight="-75px"
          visibility={() => theme === "light" && "hidden"}
        >
          ☀️
        </Button>
        <Button
          variant={"none"}
          onClick={() => setTheme("dark")}
          fontSize={"30px"}
          marginRight=""
          visibility={() => theme === "dark" && "hidden"}
        >
          🌑
        </Button>
      </Box>

      <Box mt={"130px"}>
        <Text
          display="flex"
          justifyContent="center"
          fontSize="50px"
          fontWeight={"semibold"}
        >
          Weather App
        </Text>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <Box display={"flex"} w={"35%"} mt="5">
            <Input
              ml={"5px"}
              placeholder="Search a city.."
              size={"lg"}
              borderWidth="3px"
              padding={"20px"}
              onChange={(event) => setCity(event.target.value)}
              value={city}
              style={{ borderColor: borderr }}
            />
            <Button
              colorScheme="teal"
              size="lg"
              variant={"outline"}
              borderColor="gray.200"
              borderWidth={"3px"}
              color="dark.100"
              ml={"2"}
              onClick={() => getData(city)}
              style={{ borderColor: borderr }}
            >
              Search
            </Button>
          </Box>
        </div>

        <Box display={"flex"} mt="5" justifyContent={"center"}>
          {weatherData.map((item) => (
            <Grid templateColumns="repeat(1, 1fr)" gap={5} p="2">
              <Card
                key={item.date}
                // date={gunler[tarih.getDay(item.date)]}
                date={days[new Date(item.date).getDay()]}
                mintemp={item.day.mintemp_c}
                maxtemp={item.day.maxtemp_c}
                condition={item.day.condition.text}
                icon={item.day.condition.icon}
              />
            </Grid>
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default App;
