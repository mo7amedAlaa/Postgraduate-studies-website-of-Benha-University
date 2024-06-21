import React from 'react';

const RequestItem = ({ request }) => {
  const { id, content, date, type, status, student } = request;
  const contentData = type === 'researchPlan' ? content : JSON.parse(content);
  const handleApprove = () => {
    console.log(`تم الموافقة على الطلب: ${id}`);
  };

  const handleDelete = () => {
    console.log(`تم حذف الطلب: ${id}`);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        نوع الطلب: {type}
      </h3>
      <p className="text-gray-600 mb-2">التاريخ: {date}</p>
      <p className="text-gray-600 mb-2">
        الحالة:
        <span
          className={`ml-2 px-2 py-1 rounded-full text-sm ${
            status === 'approved'
              ? 'bg-green-200 text-green-800'
              : 'bg-yellow-200 text-yellow-800'
          }`}
        >
          {status}
        </span>
      </p>
      {type === 'Masters' ? (
        <>
          <p className="text-gray-600 mb-2">
            الموضوع بالعربية: {contentData.topicArabic}
          </p>
          <p className="text-gray-600 mb-2">
            الموضوع بالإنجليزية: {contentData.topicEnglish}
          </p>
          <p className="text-gray-600 mb-2">
            اسم المشرف: {contentData.supervisorName}
          </p>
          <p className="text-gray-600 mb-2">
            لقب المشرف: {contentData.supervisorTitle}
          </p>
          <p className="text-gray-600 mb-2">المشرفون:</p>
          <ul className="text-gray-600 list-disc list-inside mb-2">
            {contentData.supervisors.map((supervisor, index) => (
              <li key={index}>
                الاسم: {supervisor.name}، اللقب: {supervisor.title}، القسم:{' '}
                {supervisor.department}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 mb-2">المرسل: {student.name}</p>
        </>
      ) : (
        <p className="text-gray-600 mb-2">المحتوى: {content}</p>
      )}
      <div className="mt-4">
        <button
          onClick={handleApprove}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200 mr-2"
        >
          موافقة
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
        >
          حذف
        </button>
      </div>
    </div>
  );
};

export default RequestItem;
