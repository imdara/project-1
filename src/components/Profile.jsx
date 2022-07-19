import logo from "../images/logo.png";
import userIcon from "../images/user-icon.png";
import uploadIcon from "../images/upload-icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Profile = () => {
  const [current, setCurrent] = useState("security");
  return (
    <>
      <nav class="bg-black text-gray-200 pl-[10vw]">
        <ul class="flex justify-start space-x-4">
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
      <main class="mx-14 my-6">
        <h2 class="ml-8 font-semibold tracking-wide">Profile Settings</h2>
        <nav>
          <ul class="flex justify-start ml-8">
            <li
              onClick={() => setCurrent("profile")}
              class="tracking-wide px-3 text-sm py-4 text-gray-700 hover:text-black hover:underline hover:underline-offset-8 cursor-pointer"
            >
              Profile
            </li>
            <li
              onClick={() => setCurrent("emailSettings")}
              class="tracking-wide px-3 text-sm py-4 text-gray-700 hover:text-black hover:underline hover:underline-offset-8 cursor-pointer"
            >
              Email Settings
            </li>
            <li
              onClick={() => setCurrent("security")}
              class="tracking-wide px-3 text-sm py-4 text-gray-700 hover:text-black hover:underline hover:underline-offset-8 cursor-pointer"
            >
              Security
            </li>
          </ul>
        </nav>
        {current === "security" && (
          <div id="emailSettings">
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
                  <p class="text-xl font-semibold text-[#7e7e7a]">|</p>
                  <p class="text-[10px] w-[12vw] text-[#7e7e7a]">
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
              <table class="ml-4 text-sm border border-gray-200 w-[90vw]">
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
          <div id="emailSettings">
            <section class="bg-white border-2 p-4 py-10 border-gray-200">
              <form>
                <div class="flex">
                  <h2 class="ml-3 p-1 text-xl">Change Password</h2>
                  <button class="mr-4 mx-auto p-2 text-white font-light text-sm bg-gradient-to-r from-red-500 to-orange-600 rounded-sm hover:from-[#efefeb] hover:to-gray-200 hover:text-red-500">
                    Save Changes
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
                <input
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
          <div id="profile">
            <section class="bg-white border-2 p-4 py-10 border-gray-200">
              <h2 class="ml-3 p-1 text-xl">Avatar</h2>
              <div class="flex">
                <img src={userIcon} class="w-24 my-2" alt="img not found" />
                <div>
                  <button class="flex space-x-3 ml-10  h-10 w-28 p-2 text-white font-light text-sm bg-gradient-to-r from-red-500 to-orange-600 rounded-sm hover:from-[#efefeb] hover:to-gray-200 hover:text-red-500">
                    <img src={uploadIcon} class="w-6 h-6" alt="img not found" />
                    <span>Upload</span>
                  </button>
                  <p class="p-8 mr-10 w-2/5 text-xs font-light">
                    You can upload images up to 256x256. Your avatar shows up in
                    your public profile and your team notifications.
                  </p>
                </div>
              </div>
            </section>
            <section class="bg-white border-2 p-4 py-10 border-gray-200">
              <form>
                <div class="flex">
                  <h2 class="ml-3 p-1 text-xl">Account Info</h2>
                  <button class="mr-4 mx-auto p-2 text-white font-light text-sm bg-gradient-to-r from-red-500 to-orange-600 rounded-sm hover:from-[#efefeb] hover:to-gray-200 hover:text-red-500">
                    Save Changes
                  </button>
                </div>
                <label class="text-xs p-4" htmlFor="current">
                  First Name:
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
                  Username:
                </label>
                <br />
                <input
                  class="bg-[#EFEFEB] mx-4 w-3/5 h-8"
                  type="text"
                  name="new"
                  id="new"
                />
              </form>
            </section>
          </div>
        )}
      </main>
    </>
  );
};

export default Profile;
