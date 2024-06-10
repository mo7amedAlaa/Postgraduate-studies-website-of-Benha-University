import { Translation, useTranslation } from 'react-i18next';
import Copyrights from './Copyrights';

function Footer() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <div>
        <footer className="bg-white dark:bg-black">
          <div className="mx-auto w-full max-w-screen-xl font-sans">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {t('ImportantLinks')}{' '}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className=" hover:underline">
                      {t('SiteMap')}{' '}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {t('EgyptianUniversities')}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {t('EgyptianKnowledgeBank')}{' '}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {t('EgyptianGovernmentPortal')}{' '}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase dark:text-white">
                  {t('FacultiesAndQualityPrograms')}{' '}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {t('UniversityFaculties')}{' '}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {t('FirstUniversityStagePrograms')}{' '}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {t('GraduatePrograms')}{' '}
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {t('ContactUs')}{' '}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase dark:text-white">
                  {t('Newsletter')}{' '}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {t('RegisterToReceiveLatestNews')}{' '}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase dark:text-white">
                  {t('Visitors')}{' '}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4 text-center">
                    <div className="bg-main rounded-[20rem] text-center p-3 border-main">
                      <h1 className="font-sans text-3xl font-semibold text-white mt-3">
                        {' '}
                        18 {t('Million')}{' '}
                      </h1>
                      <p className="text-white font-sans text-2xl mt-3">
                        {t('Visitors')}{' '}
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
