import styled from "./contents.module.css";
import reactPic from "./../../assets/icons-react.png";
import jsPic from "./../../assets/icons-js.png";
import tailwindPic from "./../../assets/icons-tailwind.png";
import Header from "../../components/header/Header";

function Contnets() {
  return (
    <div className="bg-gray-400 min-h-lvh">
      <Header />
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-12 gap-7 w-4xl">
          <a
            href="https://react.dev/"
            class="cursor-pointer col-span-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <img src={reactPic} alt="" />
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                react
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Whether you work on your own or with thousands of other
              developers, using React feels the same. It is designed to let you
              seamlessly combine components written by independent people,
              teams, and organizations.
            </p>
          </a>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            class="col-span-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <img src={jsPic} alt="" />
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                JavaScript
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              JavaScript is a scripting language that enables you to create
              dynamically updating content, control multimedia, animate images,
              and pretty much everything else
            </p>
          </a>

          <a
            href="https://tailwindcss.com/"
            class="col-span-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <img src={tailwindPic} alt="" className="py-3" />
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                tailwind css
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Tailwind CSS is a utility-first CSS framework that simplifies web
              development by providing a set of pre-designed utility classes.
              These utility classes enable you to build custom designs without
              writing any custom CSS, promoting consistency, scalability, and
              efficiency.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contnets;
