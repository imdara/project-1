import logo from "../images/logo.png";
import userIcon from "../images/user-icon.png";
import uploadIcon from "../images/upload-icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Profile = () => {
  const [current, setCurrent] = useState("security");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [inputs, setInputs] = useState({});

  const navigator = (page) => {
    setCurrent(page);
    setInputs({});
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav class="bg-black text-gray-200 pl-[10vw]">
        <ul class="hidden lg:flex justify-start space-x-4">
          <Link to="/">
            <img src={logo} class="w-10 h-10 my-2" alt="img not found" />
          </Link>
          <li class="tracking-wide font-light px-3 text-sm py-4 text-gray-300 hover:text-white cursor-pointer">
            Dashboard
          </li>
          <li class="tracking-wide font-light px-3 text-sm py-4 text-gray-300 hover:text-white cursor-pointer">
            Made in Tickel Life
          </li>
          <li class="tracking-wide font-light px-3 text-sm py-4 text-gray-300 hover:text-white cursor-pointer">
            Designers
          </li>
          <li class="tracking-wide font-light px-3 text-sm py-4 text-gray-300 hover:text-white cursor-pointer">
            Learn
          </li>
          <li class="tracking-wide font-light px-3 text-sm py-4 text-gray-300 hover:text-white cursor-pointer">
            Resources
          </li>
        </ul>
      </nav>
      {/* Mobile Menu */}
      <nav class="lg:hidden bg-black text-gray-200 p-2">
        <div class="flex items-center">
          <Link to="/">
            <img src={logo} class="w-10 h-10 my-2" alt="img not found" />
          </Link>
          <svg
            onClick={() => setMobileMenu(!mobileMenu)}
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-red-500 mr-4 mx-auto hover:text-white cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        {mobileMenu && (
          <ul class="items-center space-y-4 m-4 text-center">
            <li class="text-red-500 tracking-wide font-light text-sm hover:text-white cursor-pointer">
              Dashboard
            </li>
            <li class="text-red-500 tracking-wide font-light text-sm hover:text-white cursor-pointer">
              Made in Tickel Life
            </li>
            <li class="text-red-500 tracking-wide font-light text-sm hover:text-white cursor-pointer">
              Designers
            </li>
            <li class="text-red-500 tracking-wide font-light text-sm hover:text-white cursor-pointer">
              Learn
            </li>
            <li class="text-red-500 tracking-wide font-light text-sm hover:text-white cursor-pointer">
              Resources
            </li>
          </ul>
        )}
      </nav>
      <main class="mx-14 my-6">
        <h2 class="ml-8 font-semibold tracking-wide">Profile Settings</h2>
        <nav>
          <ul class="flex justify-start ml-8">
            <li
              onClick={() => navigator("profile")}
              class={
                current === "profile"
                  ? "tracking-wide px-3 text-sm py-4 text-gray-700 hover:text-black underline underline-offset-8 cursor-pointer"
                  : "tracking-wide px-3 text-sm py-4 text-gray-700 hover:text-black hover:underline hover:underline-offset-8 cursor-pointer"
              }
            >
              Profile
            </li>
            <li
              onClick={() => navigator("emailSettings")}
              class={
                current === "emailSettings"
                  ? "tracking-wide px-3 text-sm py-4 text-gray-700 hover:text-black underline underline-offset-8 cursor-pointer"
                  : "tracking-wide px-3 text-sm py-4 text-gray-700 hover:text-black hover:underline hover:underline-offset-8 cursor-pointer"
              }
            >
              Email Settings
            </li>
            <li
              onClick={() => navigator("security")}
              class={
                current === "security"
                  ? "tracking-wide px-3 text-sm py-4 text-gray-700 hover:text-black underline underline-offset-8 cursor-pointer"
                  : "tracking-wide px-3 text-sm py-4 text-gray-700 hover:text-black hover:underline hover:underline-offset-8 cursor-pointer"
              }
            >
              Security
            </li>
          </ul>
        </nav>
        {current === "security" && (
          <div id="security" class="mx-8">
            <section class="bg-white border-2 p-4 py-10 border-gray-200">
              <form>
                <div class="flex">
                  <h2 class="ml-3 p-1 text-xl">Change Password</h2>
                  <button class="mr-4 mx-auto p-2 text-white font-light text-sm bg-gradient-to-r from-red-500 to-orange-600 rounded-sm hover:from-[#efefeb] hover:to-gray-200 hover:text-red-500">
                    Update Password
                  </button>
                </div>
                <label class="text-xs p-4" htmlFor="current">
                  Current Password:
                </label>
                <br />
                <input
                  class="bg-[#EFEFEB] mx-4 w-3/5 h-8"
                  type="text"
                  name="current"
                  id="current"
                />
                <br />
                <label class="text-xs p-4" htmlFor="new">
                  New Password:
                </label>
                <br />
                <div class="flex justify-start space-x-4">
                  <input
                    class="bg-[#EFEFEB] mx-4 w-3/5 h-8"
                    type="text"
                    name="new"
                    id="new"
                  />
                  <p class="px-4 text-[10px] w-[12vw] text-[#7e7e7a] border-l-2 border-[#dadad8]">
                    At least ten characters including a number, uppercase and
                    lowercase letter
                  </p>
                </div>
              </form>
            </section>
            <section class="bg-white border-x-2 border-b-2 p-4 border-gray-200">
              <h2 class="p-4 text-xl">Two factor authentication</h2>
              <p class="p-4 w-2/5 text-sm font-light">
                Enabling this will provide an extra layer of security for your
                account. When logging in, we will ask for a special
                authentication code from your device.
              </p>
              <button class="ml-4 my-4 p-2 text-white font-light text-sm bg-gradient-to-r from-red-500 to-orange-600 rounded-sm hover:from-[#efefeb] hover:to-gray-200 hover:text-red-500">
                Enable Two-Factor Authentication
              </button>
            </section>
            <section class="bg-white border-x-2 border-b-2 p-4 border-gray-200">
              <h2 class="p-4 text-xl">Account Security Activity</h2>
              <table class="ml-4 text-sm border border-gray-200 w-4/5 lg:w-11/12">
                <tr class="border-b">
                  <td class="p-2 border-r">Date</td>
                  <td class="p-2 border-r">Event</td>
                </tr>
                <tr class="border-b">
                  <td class="p-2 border-r">28 days ago</td>
                  <td class="p-2 border-r">Login</td>
                </tr>
                <tr class="border-b">
                  <td class="p-2 border-r">29 days ago</td>
                  <td class="p-2 border-r">Logout</td>
                </tr>
                <tr class="border-b">
                  <td class="p-2 border-r">29 days ago</td>
                  <td class="p-2 border-r">Logout</td>
                </tr>
                <tr class="border-b">
                  <td class="p-2 border-r">29 days ago</td>
                  <td class="p-2 border-r">Login</td>
                </tr>
              </table>
            </section>
            <section class="bg-white border-x-2 border-b-2 p-4 border-gray-200">
              <h2 class="p-4 text-xl">Delete Account</h2>
              <p class="p-4 w-2/5 text-sm font-light">
                Delete your account, including all your Tickel Life projects and
                live websites. You'll get a confirmation email first.
              </p>
              <p class="p-4 w-2/5 text-sm font-light">
                Because you own a workspace, you'll need to{" "}
                <span class="text-orange-600">contact support</span> to delete
                your account.
              </p>
            </section>
          </div>
        )}
        {current === "emailSettings" && (
          <div id="emailSettings" class="mx-8">
            <section class="bg-white border-2 p-4 py-10 border-gray-200">
              <form>
                <div class="flex">
                  <h2 class="ml-3 p-1 text-xl">Update Email Address</h2>
                  <button
                    class={
                      inputs.emailSettingsNewEmail &&
                      inputs.emailSettingsCurrentPass
                        ? "mr-4 mx-auto p-2 text-white font-light text-sm bg-gradient-to-r from-red-500 to-orange-600 rounded-sm hover:from-[#efefeb] hover:to-gray-200 hover:text-red-500"
                        : "mr-4 mx-auto p-2 text-gray-400 font-light text-sm bg-[#efefeb] cursor-default"
                    }
                  >
                    Save Changes
                  </button>
                </div>
                <label class="text-xs p-4" htmlFor="current">
                  New Email Address:
                </label>
                <br />
                <input
                  onChange={(e) =>
                    setInputs({
                      ...inputs,
                      emailSettingsNewEmail: e.target.value,
                    })
                  }
                  class="bg-[#EFEFEB] mx-4 w-3/5 h-8"
                  type="text"
                  name="current"
                  id="current"
                />
                <br />
                <label class="text-xs p-4" htmlFor="new">
                  Current Password:
                </label>
                <br />
                <input
                  onChange={(e) =>
                    setInputs({
                      ...inputs,
                      emailSettingsCurrentPass: e.target.value,
                    })
                  }
                  class="bg-[#EFEFEB] mx-4 w-3/5 h-8"
                  type="text"
                  name="new"
                  id="new"
                />
              </form>
            </section>
          </div>
        )}
        {current === "profile" && (
          <div id="profile" class="mx-8">
            <section class="bg-white border-2 p-4 py-10 border-gray-200">
              <h2 class="ml-4 p-2 text-xl">Avatar</h2>
              <div class="flex space-x-6">
                <img
                  src={userIcon}
                  class="w-24 lg:w-32 my-2"
                  alt="img not found"
                />
                <div>
                  <button class="flex space-x-3 ml-10  h-10 w-28 p-2 text-white font-light text-sm bg-gradient-to-r from-red-500 to-orange-600 rounded-sm hover:from-[#efefeb] hover:to-gray-200 hover:text-red-500">
                    <img src={uploadIcon} class="w-6 h-6" alt="img not found" />
                    <span>Upload</span>
                  </button>
                  <p class="p-8 mr-10 w-[100%] lg:w-[50%] text-xs text-gray-500">
                    You can upload images up to 256x256. Your avatar shows up in
                    your public profile and your team notifications.
                  </p>
                </div>
              </div>
            </section>
            <section class="bg-white border-2 p-4 py-10 border-gray-200">
              <form>
                <div class="lg:flex">
                  <h2 class="ml-3 p-1 text-xl">Account Info</h2>
                  <button
                    class={
                      inputs.firstName && inputs.lastName && inputs.userName
                        ? "ml-3 lg:mr-4 lg:mx-auto p-2 text-white font-light text-sm bg-gradient-to-r from-red-500 to-orange-600 rounded-sm hover:from-[#efefeb] hover:to-gray-200 hover:text-red-500"
                        : "mr-4 mx-auto p-2 text-gray-400 font-light text-sm bg-[#efefeb] cursor-default"
                    }
                  >
                    Save Changes
                  </button>
                </div>
                <div class="lg:flex items-center">
                  <div>
                    <label class="text-xs p-4" htmlFor="current">
                      First Name:
                    </label>
                    <br />
                    <input
                      onChange={(e) =>
                        setInputs({
                          ...inputs,
                          firstName: e.target.value,
                        })
                      }
                      class="bg-[#EFEFEB] mx-4 lg:w-96 h-8"
                      type="text"
                      name="current"
                      id="current"
                    />
                  </div>
                  <div>
                    <label class="text-xs p-4" htmlFor="current">
                      Last Name:
                    </label>
                    <br />
                    <input
                      onChange={(e) =>
                        setInputs({
                          ...inputs,
                          lastName: e.target.value,
                        })
                      }
                      class="bg-[#EFEFEB] mx-4 lg:w-96 h-8"
                      type="text"
                      name="current"
                      id="current"
                    />
                  </div>
                  <p class="mx-2 px-4 text-md lg:w-1/5 text-[#7e7e7a] border-l-2 border-[#dadad8]">
                    Displayed on your public profile, notifications and other
                    places.
                  </p>
                </div>
                <br />
                <div class="lg:flex items-center">
                  <div>
                    <label class="text-xs p-4" htmlFor="new">
                      Username:
                    </label>
                    <br />
                    <input
                      onChange={(e) =>
                        setInputs({
                          ...inputs,
                          userName: e.target.value,
                        })
                      }
                      class="bg-[#EFEFEB] mx-4 lg:w-[800px] h-8"
                      type="text"
                      name="new"
                      id="new"
                    />
                  </div>
                  <p class="mx-2 px-4 text-md lg:w-1/5 text-[#7e7e7a] border-l-2 border-[#dadad8]">
                    Username must be between 3 and 20 characters long containing
                    only letters and numbers with no spaces. Used in puclic
                    places like your public profile.
                  </p>
                </div>
              </form>
            </section>
          </div>
        )}
      </main>
    </>
  );
};

export default Profile;
