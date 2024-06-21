import React from 'react';
import RequestItem from './RequestItem';

const RequestsList = ({ requests }) => {
  return (
    <div className="space-y-4">
      {requests?.length > 0 ? (
        requests?.map((request) => (
          <RequestItem key={request.id} request={request} />
        ))
      ) : (
        <p className="text-center text-gray-600">
          لا توجد طلبات أو تقارير مطابقة.
        </p>
      )}
    </div>
  );
};

export default RequestsList;
