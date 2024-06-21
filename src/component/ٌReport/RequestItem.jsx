import React from 'react';

const RequestItem = ({ request }) => {
  const handleApprove = () => {
    console.log(`تم الموافقة على الطلب: ${request.id}`);
  };

  const handleDelete = () => {
    console.log(`تم حذف الطلب: ${request.id}`);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold">{request.content}</h3>
      <p className="text-gray-600">
        المرسل: {request.sender === 'doctor' ? 'الدكتور' : 'الطالب'}
      </p>
      <div className="mt-2">
        {request.sender === 'student' || request.type !== 'student-report' ? (
          <button
            onClick={handleApprove}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            موافقة
          </button>
        ) : (
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            حذف
          </button>
        )}
      </div>
    </div>
  );
};

export default RequestItem;
