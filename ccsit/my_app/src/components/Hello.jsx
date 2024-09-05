import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Hello = () => {
    const [val, setVal] = useState()

    const submitHandler = () => {
        setVal("Amina")
    }
    const submitHandler1 = () => {
        setVal("Krishna")
    }
    const submitHandler2 = () => {
        setVal("Fathima")
    }
    useEffect(() => {
        submitHandler()
    }, [])
    return (
        <div>
            <Typography variant='h6'>Welcome {val}</Typography>

            <Button variant="contained" onClick={submitHandler}>AMINA</Button>&nbsp;
            <Button variant="contained" onClick={submitHandler1}>KRISHNA</Button>&nbsp;
            <Button variant="contained" onClick={submitHandler2}>FATHIMA</Button>&nbsp;
        </div>
    )
}

export default Hello