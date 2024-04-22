import MainLayout from '../../component/Main/MainLayout';

function Petition() {
  const currentDate = new Date();

  return (
    <MainLayout title={'الالتماس'}>
      <div className="w-full h-full">
        <form action="" className="w-full h-full  ">
          <div className="inline-block my-2">
            <label htmlFor="Petition" className="lableStyle mx-4">
              العام الاكاديمي
            </label>
            <input
              type="number"
              min={2000}
              max={currentDate.getFullYear()}
              className="inputStyle p-2 "
            />
          </div>
          <div className="inline-block my-2">
            <label htmlFor="studyYear" className="lableStyle mx-4">
              نوع الدراسة
            </label>
            <select name="studytype" className="inputStyle" id="studytype">
              <option selected disabled>
                {'<choose>'}
              </option>
              <option value={null} disabled id="studytype">
                {'<choose>'}
              </option>
              <option value="studyYear" id="studytype">
                سنوات الدراسة
              </option>
              <option value="studyYear" id="studytype">
                ساعات الدراسة
              </option>
            </select>
          </div>
          <div className="md:flex items-center  my-2   md:w-3/4  ">
            <label htmlFor="Regulations" className="lableStyle mx-4">
              اللائحة
            </label>
            <select
              name="Regulations"
              className="inputStyle flex-1 "
              id="Regulations"
            >
              <option selected disabled className="p-2">
                {'<choose>'}
              </option>
              <option value="studyYear">ساعات الدراسة</option>
            </select>
          </div>
          <div className="md:flex items-center  my-2  md:w-3/4  ">
            <label htmlFor="deg" className="lableStyle mx-4">
              الدرجة العلمية
            </label>
            <select name="deg" className="inputStyle flex-1 " id="deg">
              <option selected disabled className="p-2">
                {'<choose>'}
              </option>
              <option value="grad">ساعات الدراسة</option>
            </select>
          </div>
          <div className="md:flex items-center  my-2  md:w-3/4  ">
            <label htmlFor="grad" className="lableStyle mx-4">
              الشهادة المقيد عليها
            </label>
            <select name="grad" className="inputStyle flex-1 " id="grad">
              <option selected disabled className="p-2">
                {'<choose>'}
              </option>
              <option value="studyYear">ساعات الدراسة</option>
            </select>
          </div>
          <div className="inline-block my-2">
            <label htmlFor="depart" className="lableStyle mx-4">
              قسم\شعبة
            </label>
            <select name="depart" className="inputStyle" id="depart">
              <option selected disabled>
                {'<choose>'}
              </option>

              <option value="is">نظم معلومات</option>
              <option value="sc">حسابات علمية</option>
              <option value="ai">ذكاء اصطناعي</option>
              <option value="cs">علوم حاسب</option>
            </select>
          </div>
          <div className="inline-block my-2">
            <label htmlFor="year" className="lableStyle mx-4">
              الفرقة
            </label>
            <select name="year" className="inputStyle" id="year">
              <option value={null} disabled selected>
                {'<choose>'}
              </option>
              <option value="studyYear">سنوات الدراسة</option>
              <option value="studyYear">ساعات الدراسة</option>
            </select>
          </div>
          <div className="inline-block my-2">
            <label htmlFor="term" className="lableStyle mx-4">
              الفصل الدراسي
            </label>
            <select name="term" className="inputStyle" id="term">
              <option value={null} disabled selected>
                {'<choose>'}
              </option>
              <option value="firstTerm">الترم الاول</option>
              <option value="secondTerm">الترم الثاني</option>
            </select>
          </div>
          <div className="inline-block my-2">
            <label htmlFor="re" className="lableStyle mx-4">
              دور الامتحان
            </label>
            <select name="re" className="inputStyle" id="re">
              <option value={null} disabled selected>
                {'<choose>'}
              </option>
              <option value="first"> اول</option>
              <option value="second">ثاني</option>
            </select>
          </div>
          <div className="md:flex items-center my-2   md:w-3/4  ">
            <label htmlFor="select" className="lableStyle mx-4">
              المقرر
            </label>
            <select name="select" className="inputStyle flex-1 " id="select">
              <option selected disabled className="p-2">
                {'<choose>'}
              </option>
              <option value="studyYear">1مثال</option>
              <option value="studyYear">مثال2</option>
              <option value="studyYear">مثال3</option>
            </select>
          </div>
          <div className="inline-block my-2">
            <label htmlFor="reNum" className="lableStyle mx-4">
              عدد السجلات في الصفحة
            </label>
            <select name="reNum" className="inputStyle " id="reNum">
              <option value={null} disabled selected>
                {'<choose>'}
              </option>
              <option value="5"> 5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>
          <div className="my-4 mx-auto  w-fit">
            <input type="submit" value={'Search'} className="main-btn" />
          </div>
        </form>
      </div>
    </MainLayout>
  );
}

export default Petition;
