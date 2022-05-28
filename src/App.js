import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import axios from "axios"; 
import ProductCard from "./components/Card";
function App() {
  const [allData, setAllData] = useState([]);

  const getAllData = async () => {
    try {
      const response = await axios.get(
        "https://landingpage.sercair.com/api/V1/device/all"
      );
      setAllData(response.data.data);
      console.log(response.data.data)
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
      getAllData()},[]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box sx={{ flexGrow: 1  }}>
      <Grid 
        container
        spacing={{ xs: 2, md: 8 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {allData.map((product,index)=>(
          <Grid item xs={2} sm={4} md={4} key={index} >
            
              <ProductCard product={product}/>
               
          </Grid>
        ))}
    
      </Grid>
    </Box>
  );
}

export default App;
