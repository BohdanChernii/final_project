import * as React from 'react';
import Box from '@mui/material/Box';
import {DataGrid, GridColDef, GridValueGetterParams} from "@mui/x-data-grid";

import './clients.scss'
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

const columns: GridColDef[] = [
  {field: 'id', headerName: 'id', width: 90},
  {
    field: 'name',
    headerName: 'name',
    width: 150,
    editable: true,
  },
  {
    field: 'surname',
    headerName: 'surname',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'email',
    width: 150,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'phone',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'course',
    headerName: 'course',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'course_format',
    headerName: 'course_format',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'course_type',
    headerName: 'course_type',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'status',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'sum',
    headerName: 'sum',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'alreadyPaid',
    headerName: 'alreadyPaid',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'group',
    headerName: 'group',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'created_at',
    headerName: 'created_at',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'manager',
    headerName: 'manager',
    type: 'number',
    width: 110,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    surname: 'Snow',
    email: 'max@gmail.com',
    phone: '097924259601',
    name: 'Jon',
    age: 35,
    course: 'FS',
    course_format: 'static',
    course_type: 'pro',
    status: 'null',
    sum: 'null',
    alreadyPaid: 'null',
    group: 'null',
    created_at: 'Aug 9, 2021',
    manager: 'null'
  },
  {
    id: 2,
    surname: 'Lannister',
    email: 'max@gmail.com',
    phone: '097924259601',
    name: 'Cersei',
    age: 42,
    course: 'FE',
    course_format: 'static',
    course_type: 'nominal',
    status: 'null',
    sum: 'null',
    alreadyPaid: 'null',
    group: 'null',
    created_at: 'Aug 9, 2021',
    manager: 'null'
  },
  {
    id: 3,
    surname: 'Lannister',
    email: 'max@gmail.com',
    phone: '097924259601',
    name: 'Jaime',
    age: 45,
    course: 'JCX',
    course_format: 'static',
    course_type: 'pro',
    status: 'null',
    sum: 'null',
    alreadyPaid: 'null',
    group: 'null',
    created_at: 'Aug 9, 2021',
    manager: 'null'
  },
  {
    id: 4,
    surname: 'Stark',
    email: 'max@gmail.com',
    phone: '097924259601',
    name: 'Arya',
    age: 16,
    course: 'JSCX',
    course_format: 'static',
    course_type: 'premium',
    status: 'null',
    sum: 'null',
    alreadyPaid: 'null',
    group: 'null',
    created_at: 'Aug 9, 2021',
    manager: 'null'
  },
  {
    id: 5,
    surname: 'Targaryen',
    email: 'max@gmail.com',
    phone: '097924259601',
    name: 'Daenerys',
    age: null,
    course: 'PCX',
    course_format: null,
    course_type: 'pro',
    status: 'null',
    sum: 'null',
    alreadyPaid: 'null',
    group: 'null',
    created_at: 'Aug 9, 2021',
    manager: 'null'
  },
  {
    id: 6,
    surname: 'Melisandre',
    email: 'max@gmail.com',
    phone: '097924259601',
    name: null,
    age: 150,
    course: 'QACX',
    course_format: 'static',
    course_type: 'premium',
    status: 'null',
    sum: 'null',
    alreadyPaid: 'null',
    group: 'null',
    created_at: 'Aug 9, 2021',
    manager: 'null'
  },
  {
    id: 7,
    surname: 'Clifford',
    email: 'max@gmail.com',
    phone: '097924259601',
    name: 'Ferrara',
    age: 44,
    course: 'PCX',
    course_format: null,
    course_type: 'minimal',
    status: 'null',
    sum: 'null',
    alreadyPaid: 'null',
    group: 'null',
    created_at: 'Aug 9, 2021',
    manager: 'null'
  },
  {
    id: 8,
    surname: 'Frances',
    email: 'max@gmail.com',
    phone: '097924259601',
    name: 'Rossini',
    age: 36,
    course: 'PCX',
    course_format: null,
    course_type: 'minimal',
    status: 'null',
    sum: 'null',
    alreadyPaid: 'null',
    group: 'null',
    created_at: 'Aug 9, 2021',
    manager: 'null'
  },
  {
    id: 9,
    surname: 'Roxie',
    email: 'max@gmail.com',
    phone: '097924259601',
    name: 'Harvey',
    age: 65,
    course: null,
    course_format: 'static',
    course_type: 'minimal',
    status: 'null',
    sum: 'null',
    alreadyPaid: 'null',
    group: 'null',
    created_at: 'Aug 9, 2021',
    manager: 'null'
  },
];

const DataGridDemo = () => {
  return (
    <div className={'clients'}>
      <div className="form">


      <TextField id="standard-basic" label="Name" variant="standard" />
      <TextField id="standard-basic" label="Surname" variant="standard" />
      <TextField id="standard-basic" label="Email" variant="standard" />
      <TextField id="standard-basic" label="Phone" variant="standard" />
      <TextField id="standard-basic" label="Age" variant="standard" />
      <TextField id="standard-basic" label="Course" variant="standard" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={'FE'}
          label="Course"
          // onChange={handleChange}
        >
          <MenuItem value={'FE'} >FE</MenuItem>
          <MenuItem value={'FS'}>FS</MenuItem>
          <MenuItem value={'JCX'}>JCX</MenuItem>
          <MenuItem value={'JSCX'}>JSCX</MenuItem>
          <MenuItem value={'PCX'}>PCX</MenuItem>
          <MenuItem value={'QACX'}>QACX</MenuItem>
        </Select>
      </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={'FE'}
            label="Course"
            // onChange={handleChange}
          >
            <MenuItem value={'FE'}>FE</MenuItem>
            <MenuItem value={'FS'}>FS</MenuItem>
            <MenuItem value={'JCX'}>JCX</MenuItem>
            <MenuItem value={'JSCX'}>JSCX</MenuItem>
            <MenuItem value={'PCX'}>PCX</MenuItem>
            <MenuItem value={'QACX'}>QACX</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={'FE'}
            label="Course"
            // onChange={handleChange}
          >
            <MenuItem value={'FE'}>FE</MenuItem>
            <MenuItem value={'FS'}>FS</MenuItem>
            <MenuItem value={'JCX'}>JCX</MenuItem>
            <MenuItem value={'JSCX'}>JSCX</MenuItem>
            <MenuItem value={'PCX'}>PCX</MenuItem>
            <MenuItem value={'QACX'}>QACX</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={'FE'}
            label="Course"
            // onChange={handleChange}
          >
            <MenuItem value={'FE'}>FE</MenuItem>
            <MenuItem value={'FS'}>FS</MenuItem>
            <MenuItem value={'JCX'}>JCX</MenuItem>
            <MenuItem value={'JSCX'}>JSCX</MenuItem>
            <MenuItem value={'PCX'}>PCX</MenuItem>
            <MenuItem value={'QACX'}>QACX</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={'FE'}
            label="Course"
            // onChange={handleChange}
          >
            <MenuItem value={'FE'}>FE</MenuItem>
            <MenuItem value={'FS'}>FS</MenuItem>
            <MenuItem value={'JCX'}>JCX</MenuItem>
            <MenuItem value={'JSCX'}>JSCX</MenuItem>
            <MenuItem value={'PCX'}>PCX</MenuItem>
            <MenuItem value={'QACX'}>QACX</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Box sx={{height: '800px'}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
          experimentalFeatures={{newEditingApi: true}}
          sx={{
            // '.MuiDataGrid-columnSeparator': {
            //   display: 'none',
            // },
            // 'MuiDataGrid-columnHeader':{
            //   width:'60px !important',
            //   minWidth:'50px !important',
            //   maxWidth:'100px !important'
            // },
            // 'MuiDataGrid-columnHeaderDraggableContainer':{
            //   // boxSizing:'content-box',
            //   width:'60px !important',
            //   minWidth:'50px !important',
            //   maxWidth:'100px !important'
            // },
            // '.MuiDataGrid-cell':{
            //   boxSizing:'content-box',
            //   width:'60px',
            //   minWidth:'50px !important',
            //   maxWidth:'100px !important'
            // }
          }}
        />
      </Box>
    </div>
  );
}
export default DataGridDemo
