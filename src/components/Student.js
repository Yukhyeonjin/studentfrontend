import * as React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/material/styles'
import Button from '@mui/material/Button';
import { Container, Paper } from '@mui/material';




export default function Student() {

    
    const paperStyle = {padding : '50px 20px', width:600, margin: "20px auto"};
    const [name,setName] = React.useState('');
    const [address,setAddress] = React.useState('')
    //const classes = useStyles();

    const handleClick=(e)=>{
        e.preventDefault();
        const student = {name, address};
        console.log(student);
    }
  
    return (
    <Container>
         <Paper elevation={3} style={paperStyle}>
             <h1 style={{color : 'blue'}}>성도 추가</h1>
      <form>
      <TextField id="outlined-basic" label="이름" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="주소" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />

      <Button variant="contained" color="secondary" onClick={handleClick}>제출</Button>

      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      </form>
      {name}
      {address}  
    </Paper>
    </Container>
  );
}
