import { facLogo, uniLogo } from '../../assets';

function RestPassword() {
  return (
    <section className="bg-white">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-gray-100 rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8">
          <div className="text-center flex items-center gap-1 justify-center ">
            <label className="mr-1">جامعة بنها </label>
            <button
              type="button"
              className="mx-1 h-7 w-7 p-1  rounded-full bg-main hover:bg-cyan-400   text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            >
              <img
                src={uniLogo}
                alt="bfcai Image"
                className="flex justify-center items-center h-full  w-full"
              />
            </button>
            <button
              type="button"
              className="inlne-block mx-1 h-7 w-7  p-1 rounded-full bg-main hover:bg-cyan-400 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            >
              <img
                src={facLogo}
                alt=""
                className="flex justify-center items-center h-full w-full"
              />
            </button>
          </div>
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl">
            تغيير كلمة المرور
          </h2>
          <form
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            action="#"
            dir="rtl"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                بريدك الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-white border border-gray-300 text-gray-800 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                كلمة المرور الجديدة
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-white border border-gray-300 text-gray-800 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                تأكيد كلمة المرور
              </label>
              <input
                type="confirm-password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                className="bg-white border border-gray-300 text-gray-800 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                required=""
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="newsletter"
                  aria-describedby="newsletter"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-blue-300 dark:focus:ring-blue-600"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="newsletter"
                  className="font-light text-gray-600"
                >
                  أوافق على{' '}
                  <a
                    className="font-medium text-blue-600 hover:underline"
                    href="#"
                  >
                    الشروط والأحكام
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              إعادة تعيين كلمة المرور
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RestPassword;
