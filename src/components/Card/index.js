import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import CardModal from "../CardModal";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 300 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.imageUrl}
        alt="Sercair Product"
      />
      <CardContent>
        <Typography gutterBottom color="primary" variant="h5" component="div">
          Sercair
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.deviceName}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <CardModal product={product} />
      </CardActions>
    </Card>
  );
};

export default ProductCard;
