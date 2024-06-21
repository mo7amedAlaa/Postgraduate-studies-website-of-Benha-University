import MainLayout from '../../component/Main/MainLayout';
import { useState, useEffect } from 'react';
import RequestsList from '../../component/ٌReport/RequestsList';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { URLng } from '../../API/constant';
import { useSelector } from 'react-redux';

const ShowAllReports = () => {
  const [requests, setRequests] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.user.UserInfo?.token);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${URLng}/showreports`,
          {},
          {
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRequests(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  const filteredRequests = requests.filter(
    (request) =>
      request.type?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.sender?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <ClipLoader size={150} color="#123abc" loading={loading} />
      </div>
    );
  }

  return (
    <MainLayout title={'التقارير '}>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-4">طلبات وتقارير</h1>
        <input
          type="text"
          placeholder="ابحث."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <RequestsList requests={filteredRequests} />
      </div>
    </MainLayout>
  );
};

export default ShowAllReports;
