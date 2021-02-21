import React from 'react';
import Menu from './menu';
import { useState } from 'react';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import EditPost from './editPost';

import './style.css'
export default function OnPost(props) {
    const { index } = props
    // const [title, setTitle] = useState(props.index.title)
    // const [body, setBody] = useState(props.index.body)
    const [open, setOpen] = useState(false);

    const handleClickOpen = (index) => {
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };
    const updateP = (id, post) => {
          props.updatePost(id, post)
        setOpen(false);
    }
    return (
        <>
            <div className="m-3 ">
            <EditPost updateP={updateP} title={index.title} body={index.body} id={index._id} open={open} handleClose={handleClose}></EditPost>

                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <DeleteForeverRoundedIcon className="btnIcon" onClick={() => props.deleteP(index._id)}></DeleteForeverRoundedIcon>

                        <Typography >
                            <h3>{index.title}</h3>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {index.body}

                            <p id="editp">
                                <EditOutlinedIcon onClick={() => handleClickOpen()} className="btnIcon" ></EditOutlinedIcon>
                                                .............edit the post
                                                </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>



        </>

    )
}
