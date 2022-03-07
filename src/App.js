import { useEffect, useState } from "react";
import Card from "./components/Card";
import { useTheme } from "./context/ThemeContext";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [city, setCity] = useState("İstanbul");
  const [weatherData, setWeatherData] = useState([]);
  const { theme, setTheme } = useTheme();

  const borderr = theme === "light" ? "rgb(50, 50, 50)" : "rgb(190, 190, 190)";
  const colorr = theme === "light" ? "rgb(50, 50, 50)" : "rgb(190, 190, 190)";

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
    getData("İstanbul");
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
      <div className="text-end fs-2">
        <button
          type="button"
          className="bg-transparent border-0"
          onClick={() => setTheme("light")}
          style={{
            visibility: theme === "light" && "hidden",
            marginRight: "-56px",
          }}
        >
          ☀️
        </button>
        <button
          className="bg-transparent border-0"
          type="button"
          onClick={() => setTheme("dark")}
          style={{ visibility: theme === "dark" && "hidden" }}
        >
          🌙
        </button>
      </div>

      <div className="mt-5">
        <p className="text-center fw-bold fs-1" style={{ color: colorr }}>
          Weather App
        </p>
      </div>

      <div className="justify-content-center d-flex ">
        <div style={{ display: "flex" }}>
          <input
            type="text"
            className="form-control bg-transparent border-3 fw-bold   "
            placeholder="Search a city.."
            onChange={(event) => setCity(event.target.value)}
            value={city}
            style={{ borderColor: borderr, color: colorr }}
          />
          <button
            type="button"
            className="bg-none border-3  ms-2 rounded-3 ps-3 pe-3 fw-bold"
            onClick={() => getData(city)}
            style={{ borderColor: borderr }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-2 bg-transparent mt-3 fw-bold row">
        {weatherData.map((item, i) => (
          <Card
            key={i}
            // date={gunler[tarih.getDay(item.date)]}
            date={days[new Date(item.date).getDay()]}
            mintemp={item.day.mintemp_c}
            maxtemp={item.day.maxtemp_c}
            condition={item.day.condition.text}
            icon={item.day.condition.icon}
          />
        ))}
      </div>

      {/* Chakra Codes */}

      {/* <Box position="absolute" right={"10px"}>
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
          🌙
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
              fontWeight="bold"
            />
            <Button
              colorScheme="teal"
              size="lg"
              _hover={{ bg: "rgb(192, 192, 192)" }}
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
            <Grid
              key={item.date}
              templateColumns="repeat(1, 1fr)"
              gap={5}
              p="2"
            >
              <Card
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
      </Box> */}
      <br />
      <Footer />
    </div>
  );
}

export default App;
