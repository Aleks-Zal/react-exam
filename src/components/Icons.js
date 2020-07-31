import React from 'react';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { red, blue, green } from '@material-ui/core/colors';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import '../App.css';

export function DelIcon(props) {

    const delItem = () => {
        props.deleteCallback(props.id);
    }

    return (
        <div className='delIcon'>
            <DeleteForeverOutlinedIcon onClick={delItem} style={{ color: red[600], fontSize: 30 }} />
        </div>
    )

}

export function EdIcon(props) {

    const { editItem } = props

    return (
        <div onClick={editItem} className='editIcon'>
            <EditOutlinedIcon style={{ color: blue[600], fontSize: 30 }} />
        </div>
    )

}

export function SubmitIcon() {
    return (
        <PublishOutlinedIcon style={{ color: green[500], fontSize: 30 }} />
    )
}
