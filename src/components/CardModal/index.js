import * as React from "react";
import { Box, CardMedia, Button, Typography, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #e2e2e2",
  boxShadow: 24,
  p: 4,
};

const CardModal = ({ product }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        DETAY
      </Button>

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
            image={product.imageUrl}
            alt="Sercair Product"
          />
          <Typography color="primary" id="modal-modal-title" variant="h4">
            Sercair
          </Typography>
          <Typography id="modal-modal-title" variant="h6">
            {product.deviceName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {product.desc}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default CardModal;
