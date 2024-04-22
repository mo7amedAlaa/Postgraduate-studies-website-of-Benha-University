import Copyrights from './Copyrights';

function Footer() {
  return (
    <>
      <div>
        <footer className="bg-white dark:bg-black">
          <div className="mx-auto w-full max-w-screen-xl font-sans">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  روابط تهمك
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className=" hover:underline">
                      خريطة الموقع
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {' '}
                      الجامعات المصرية{' '}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      بنك المعرفة المصرى{' '}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      بوابة االحكومة المصرية
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase dark:text-white">
                  لكليات و البرامج النوعية{' '}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      كليات الجامعة{' '}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      برامج المرحلة الجامعية الاولى
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      برامج الدراسات العليا
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      تواصل معنا
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase dark:text-white">
                  النشرة الإخبارية
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      سجل ليصلك اخر الاخبار{' '}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase dark:text-white">
                  الزائرون
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4 text-center">
                    <div className="bg-main rounded-[20rem] text-center p-3 border-main">
                      <h1 className="font-sans text-3xl font-semibold text-white mt-3">
                        {' '}
                        18 مليون{' '}
                      </h1>
                      <p className="text-white font-sans text-2xl mt-3">
                        الزائرون
                      </p>
                    </div>
                  </li>
                  {/* <li className="mb-4">
                    <a href="#" className="hover:underline">Android</a>
                </li> */}
                </ul>
              </div>
            </div>
            <div className="px-4 py-6 bg-gray-100 dark:bg-main md:flex md:items-center md:justify-between shadow-lg rounded-md text-white">
              <Copyrights />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
