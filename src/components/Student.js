import * as React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/material/styles'
import Button from '@mui/material/Button';
import { Container, Paper } from '@mui/material';




export default function Student() {

    
    const paperStyle = {padding : '50px 20px', width:600, margin: "20px auto"};
    const [name,setName] = React.useState('');
    const [address,setAddress] = React.useState('')
    const [students,setStudents] = React.useState([])
    //const classes = useStyles();

    const handleClick=(e)=>{
        e.preventDefault();
        const student = {name, address};
        console.log(student);
        fetch("http://localhost:8080/student/add",{
          method:"POST",
          headers:{"Content-Type" : "application/json"},
          body:JSON.stringify(student)
        }).then(()=>{
          alert('성도가 추가되었습니다.');
        });
    }

    React.useEffect(()=>{
      fetch("http://localhost:8080/student/getAll")
      .then(res=>res.json())
      .then((result)=>{
        setStudents(result);
      }
    )
    },[]);
  
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

    </Paper>
      <h1>성도들</h1>

        <Paper elevation={3} style={paperStyle}>

      {students.map(student=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
         Id:{student.id}<br/>
         Name:{student.name}<br/>
         Address:{student.address}

        </Paper>
      ))
}


    </Paper>
    </Container>
  );
}
