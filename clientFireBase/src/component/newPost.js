import React, { useState } from 'react'
import alertDialog from './alertDaialog'
export default function NewPost(props) {
    const [title, setTitle] = useState('')
    const [body, setbody] = useState('')
    const save = () => {
         props.setShow(false)
        alertDialog("Sure you want to add this post?").then(() => { 
        console.log(title,body)
        props.newPost({title:title,body:body},props.idUser)
        });      
    }
    const { } = props
    return (
        <div  style={{border:'blue 4px solid' ,width:'50%',margin:'auto'}}>
            <div classNameName="form-group row " >
                <label className="col-sm-2 col-form-label ">title</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
            </div>
            <div classNameName="form-group row">
                <label className="col-sm-2 col-form-label ">  body </label>
                <div className="col-sm-10">
                    <textarea 
                        onChange={(e) => setbody(e.target.value)}
                    rows='10'
                    cols='30'
                    ></textarea>
                  
                </div>
            </div>
            <button
                type="button" className="btn btn-primary mt-5 mb-5"
                onClick={(e) => save(e.target.value)}
            >  שמור</button>
        </div>
    )
}