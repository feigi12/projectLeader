import React, { useState } from 'react'
import alertDialog from './alertDaialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
export default function EditPost(props) {
    const [title, setTitle] = useState(props.title)
    const [body, setbody] = useState(props.body)
    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit Post</DialogTitle>
            <DialogContent>
              
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="title for post"
                    type="text"
                    fullWidth
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <TextField
                value={body}
                    id="body"
                    label="body......"
                    multiline
                    rows={6}
                    variant="filled"
                    fullWidth
                    onChange={(e) => setbody(e.target.value)}

                />

            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
          </Button>
                <Button onClick={() => props.updateP(props.id, { title: title, body: body })} color="primary">
                    Submit
          </Button>
            </DialogActions>
        </Dialog>
    )
}