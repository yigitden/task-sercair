import { Box, Grid, Container } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/Card";
function App() {
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllData = async () => {
    try {
      const response = await axios.get(
        "https://landingpage.sercair.com/api/V1/device/all"
      );
      setAllData(response.data.data);
      console.log(response.data.data);
      setIsLoading(true);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <Container fixed>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {allData &&
            allData.map((product, index) => (
              <Grid item xs={4} sm={4} md={4} key={index}>
                <ProductCard product={product} isLoading={isLoading} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
