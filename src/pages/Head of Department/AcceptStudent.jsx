import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainLayout from '../../component/Main/MainLayout';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { ClipLoader } from 'react-spinners';
import { Box } from '@mui/material';
import { URLImage, URLng } from '../../API/constant';
import emailjs from 'emailjs-com';
import { useDispatch } from 'react-redux';
import {
  accpeting,
  loging,
  registering,
} from '../../Redux/Slices/userStatusSlice';

function AcceptStudent() {
  const [rows, setRows] = useState([]);
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
      width: 200,
      renderCell: (params) => (
        <div className="flex items-center justify-center">
          {params && params.row.original_bachelors_degree ? (
            <a
              href={`${URLImage}/${params.row.original_bachelors_degree}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${URLImage}/${params.row.original_bachelors_degree}`}
                alt="Personal"
                style={{ width: '50px', height: '50px' }}
              />
            </a>
          ) : (
            'no file'
          )}
        </div>
      ),
    },
    {
      field: 'master_degree',
      headerName: 'master_degree',
      width: 200,
      renderCell: (params) => (
        <div className="flex items-center justify-center">
          {params && params.row.master_degree ? (
            <a
              href={`${URLImage}/${params.row.master_degree}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${URLImage}/${params.row.master_degree}`}
                alt="Personal"
                style={{ width: '50px', height: '50px' }}
              />
            </a>
          ) : (
            'no file'
          )}
        </div>
      ),
    },
    {
      field: 'four_years_grades',
      headerName: 'four_years_grades',
      width: 200,
      renderCell: (params) => (
        <div className="flex items-center justify-center">
          {params && params.row.four_years_grades ? (
            <a
              href={`${URLImage}/${params.row.four_years_grades}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${URLImage}/${params.row.four_years_grades}`}
                alt="Personal"
                style={{ width: '50px', height: '50px' }}
              />
            </a>
          ) : (
            'no file'
          )}
        </div>
      ),
    },
    {
      field: 'BirthCertificate',
      headerName: 'BirthCertificate',
      width: 200,
      renderCell: (params) => (
        <div className="flex items-center justify-center">
          {params && params.row.BirthCertificate ? (
            <a
              href={`${URLImage}/${params.row.BirthCertificate}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${URLImage}/${params.row.BirthCertificate}`}
                alt="Personal"
                style={{ width: '50px', height: '50px' }}
              />
            </a>
          ) : (
            'no file'
          )}
        </div>
      ),
    },
    {
      field: 'IDCardCopy',
      headerName: 'IDCardCopy',
      width: 200,
      renderCell: (params) => (
        <div className="flex items-center justify-center">
          {params && params.row.IDCardCopy ? (
            <a
              href={`${URLImage}/${params.row.IDCardCopy}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${URLImage}/${params.row.IDCardCopy}`}
                alt="Personal"
                style={{ width: '50px', height: '50px' }}
              />
            </a>
          ) : (
            'no file'
          )}
        </div>
      ),
    },
    {
      field: 'RecruitmentPosition',
      headerName: 'RecruitmentPosition',
      width: 200,
      renderCell: (params) => (
        <div className="flex items-center justify-center">
          {params && params.row.RecruitmentPosition ? (
            <a
              href={`${URLImage}/${params.row.RecruitmentPosition}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${URLImage}/${params.row.RecruitmentPosition}`}
                alt="Personal"
                style={{ width: '50px', height: '50px' }}
              />
            </a>
          ) : (
            'no file'
          )}
        </div>
      ),
    },
    {
      field: 'EmployerApproval',
      headerName: 'EmployerApproval',
      width: 200,
      renderCell: (params) => (
        <div className="flex items-center justify-center">
          {params && params.row.EmployerApproval ? (
            <a
              href={`${URLImage}/${params.row.EmployerApproval}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${URLImage}/${params.row.EmployerApproval}`}
                alt="Personal"
                style={{ width: '50px', height: '50px' }}
              />
            </a>
          ) : (
            'no file'
          )}
        </div>
      ),
    },
    {
      field: 'personalImage',
      headerName: 'personalImage',
      width: 200,
      renderCell: (params) => (
        <div className="flex items-center justify-center">
          {params && params.row.personalImage ? (
            <a
              href={`${URLImage}/${params.row.personalImage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${URLImage}/${params.row.personalImage}`}
                alt="Personal"
                style={{ width: '50px', height: '50px' }}
              />
            </a>
          ) : (
            'no file'
          )}
        </div>
      ),
    },
    {
      field: 'superAccpet',
      headerName: 'superAccpet',
      width: 200,
      renderCell: (params) => (
        <div className="flex items-center justify-center">
          {params && params.row.superAccpet ? (
            <a
              href={`${URLImage}/${params.row.superAccpet}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${URLImage}/${params.row.superAccpet}`}
                alt="Personal"
                style={{ width: '50px', height: '50px' }}
              />
            </a>
          ) : (
            'no file'
          )}
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

  return (
    <div className="overflow-hidden">
      <MainLayout title={'Accept Student and Make ACC'}>
        <Box sx={{ height: 400, width: '500%' }}>
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
