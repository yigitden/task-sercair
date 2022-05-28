import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Skeleton,
  Box,
} from "@mui/material";
import CardModal from "../CardModal";

const ProductCard = ({ product, isLoading }) => {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 300 }}>
      {isLoading ? (
        <CardMedia
          component="img"
          height="140"
          image={product.imageUrl}
          alt="Sercair Product"
        />
      ) : (
        <Skeleton variant="rectangular" width={345} height={140} />
      )}

      {isLoading ? (
        <>
          <CardContent>
            <Typography
              gutterBottom
              color="primary"
              variant="h5"
              component="div"
            >
              Sercair
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.deviceName}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <CardModal product={product} />
          </CardActions>{" "}
        </>
      ) : (
        <Box sx={{ pt: 2 }}>
          <Skeleton />
          <Skeleton width="345px" />
        </Box>
      )}
    </Card>
  );
};

export default ProductCard;
