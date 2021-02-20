import React from "react";
import { createConfirmation } from "react-confirm";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

const AlertDialog = props => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    handleClose();
    props.reject();
  };

  const handleOk = () => {
    handleClose();
    props.resolve();
  };

  const customButtonClick = onClick => {
    handleClose();
    onClick && onClick();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {props.title && (
          <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        )}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.content}
          </DialogContentText>
        </DialogContent>
        {props.buttons ? (
          <DialogActions>
            {props.buttons.map(b => (
              <Button
                key={b.text}
                onClick={() => customButtonClick(b.onClick)}
                color="primary"
              >
                {b.text}
              </Button>
            ))}
          </DialogActions>
        ) : (
          <div >
          <DialogActions>
            <Button  onClick={handleCancel} color="primary">
              {props.cancelButtonText || "Cancel"}
            </Button>
            <Button onClick={handleOk} color="primary" autoFocus>
              {props.okButtonText || "Ok"}
            </Button>
          </DialogActions>
          </div>
        )}
      </Dialog>
    </div>
  );
};

const confirm = createConfirmation(AlertDialog);
export default function alertDialog(content, options = {}) {
  return confirm({ content, ...options });
}
