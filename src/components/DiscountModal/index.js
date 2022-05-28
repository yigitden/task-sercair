import { Box, CardMedia, Typography, Modal } from "@mui/material";
import { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  bgcolor: "background.paper",
  border: "1px solid #e2e2e2",
  boxShadow: 24,
  p: 4,
};

const DiscountModal = () => {
  const [open, setOpen] = useState(true);
  const [product, setProduct] = useState([]);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const localData = localStorage.getItem("productData");
    setProduct(JSON.parse(localData));
  }, []);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            component="img"
            height="140"
            image={product?.imageUrl}
            alt="Sercair Product"
          />
          <Typography color="primary" id="modal-modal-title" variant="h4">
            Sercair
          </Typography>
          <Typography id="modal-modal-title" variant="h6">
            {product?.deviceName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {product?.desc}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Typography
              color="primary"
              id="modal-modal-description"
              sx={{ mr: 2, fontSize: 50 }}
            >
              %50
            </Typography>
            <Typography
              color="primary"
              id="modal-modal-description"
              sx={{ fontSize: 35 }}
            >
              İNDİRİM
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default DiscountModal;
