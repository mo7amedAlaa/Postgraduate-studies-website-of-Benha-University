import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainLayout from '../../component/Main/MainLayout';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { ClipLoader } from 'react-spinners';
import { Box } from '@mui/material';
import { URLng } from '../../API/constant';
import emailjs from 'emailjs-com';
import { useDispatch } from 'react-redux';
import {
  accpeting,
  loging,
  registering,
} from '../../Redux/Slices/userStatusSlice';

function AcceptStudent() {
  const [rows, setRows] = useState([]);
  // const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${URLng}/PendingStudent`, {
          headers: {
            Accept: 'application/json',
          },
        });
        console.log(response);
        setRows(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const sendRegEmail = (name, studentEmail) => {
    const templateParams = {
      to_name: name,
      to_email: studentEmail,
    };

    emailjs
      .send(
        'service_uezy399',
        'template_3jxv9bp',
        templateParams,
        'jhDDp8FmE6Tr9F8e5'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
  };
  const sendAcceptEmail = (
    name,
    studentEmail,
    studentAccount,
    studentPassword
  ) => {
    const templateParams = {
      to_name: name,
      to_email: studentEmail,
      account: studentAccount,
      password: studentPassword,
    };
    emailjs
      .send(
        'service_uezy399',
        'template_2nhp9hl',
        templateParams,
        'jhDDp8FmE6Tr9F8e5'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
  };

  const handleAccept = async ({ id, email, name }) => {
    try {
      const res = await axios.post(`${URLng}/addacount/${id}`);
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      console.log(res.data);
      sendAcceptEmail(name, email, res.data.account, res.data.password);
      dispatch(accpeting(true));
      dispatch(registering(false));
    } catch (error) {
      console.error(`Error accepting student with id: ${id}`, error);
    }
  };

  const handleReject = async ({ id, name, email }) => {
    try {
      await axios.post(`${URLng}/rejectstudent/${id}`);
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      sendRegEmail(name, email);
      dispatch(accpeting(false));
      dispatch(registering(false));
    } catch (error) {
      console.error(`Error rejecting student with id: ${id}`, error);
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 110 },
    { field: 'english_name', headerName: 'English Name', width: 110 },
    { field: 'nationality', headerName: 'Nationality', width: 110 },
    { field: 'religion', headerName: 'Religion', width: 110 },
    { field: 'job', headerName: 'Job', width: 110 },
    { field: 'age', headerName: 'Age', width: 110 },
    { field: 'SSN', headerName: 'SSN', width: 110 },
    { field: 'phone', headerName: 'Phone', width: 110 },
    { field: 'address', headerName: 'Address', width: 110 },
    { field: 'department', headerName: 'Department', width: 110 },
    { field: 'gender', headerName: 'Gender', width: 110 },
    { field: 'email', headerName: 'Email', width: 110 },
    {
      field: 'original_bachelors_degree',
      headerName: "Original Bachelor's Degree",
      width: 300,
      renderCell: (params) => (
        <div className="flex items-center justify-center">
          <a
            href={params.value ? params.value : '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            {params.value ? 'file' : 'no file'}
          </a>
        </div>
      ),
    },
    {
      field: 'enrollment_papers',
      headerName: 'Enrollment Papers',
      width: 300,
      renderCell: (params) => (
        <div className="flex items-center justify-around gap-3">
          {Array.isArray(params.value)
            ? params.value.map((file, index) => (
                <a
                  key={index}
                  href={file}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`file${index + 1}`}
                </a>
              ))
            : 'no file'}
        </div>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <div className="flex gap-7">
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginRight: 8 }}
            onClick={() => handleAccept(params.row)}
          >
            قبول
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => handleReject(params.row)}
          >
            رفض
          </Button>
        </div>
      ),
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <ClipLoader size={150} color="#123abc" loading={loading} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="overflow-hidden">
      <MainLayout title={'Accept Student and Make ACC'}>
        <Box sx={{ height: 400, width: '200%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            autoHeight
            getRowId={(row) => row.id}
            sx={{
              '& .MuiDataGrid-root': {
                overflowX: 'auto',
              },
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              },
            }}
          />
          <div className="flex items-center justify-center m-5 p-10">
            <button className="main-btn w-96">Accept All</button>
          </div>
        </Box>
      </MainLayout>
    </div>
  );
}

export default AcceptStudent;
