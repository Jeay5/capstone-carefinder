export default function Footer() {
  return (
    <footer className="sm-white  shadow dark:bg-blue-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="" className="flex items-center mb-4 sm:mb-0">
            <img
              src="src/assets/cfwhite.svg"
              className="h-10 mr-4"
              alt="Carefinder Logo"
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-regular text-gray-200 sm:mb-0 dark:text-grey-400">
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-900 sm:text-center dark:text-gray-200">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Carefinder™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
