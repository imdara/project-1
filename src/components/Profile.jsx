import logo from "../images/logo.png";
const Profile = () => {
  return (
    <>
      <nav class="bg-black text-gray-200 pl-[10vw]">
        <ul class="flex justify-start space-x-4">
          <img src={logo} class="w-10 h-10 my-2" alt="img not found" />
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
            <li class="tracking-wide px-3 text-sm py-4 text-gray-700 hover:text-black hover:underline hover:underline-offset-8 cursor-pointer">
              Profile
            </li>
            <li class="tracking-wide px-3 text-sm py-4 text-gray-700 hover:text-black hover:underline hover:underline-offset-8 cursor-pointer">
              Email Settings
            </li>
            <li class="tracking-wide px-3 text-sm py-4 text-gray-700 hover:text-black hover:underline hover:underline-offset-8 cursor-pointer">
              Security
            </li>
          </ul>
        </nav>
        <section class="bg-white border-2 p-4 py-10 border-gray-200">
          <form>
            <h2 class="p-4 text-xl">Change Password</h2>
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
            account. When logging in, we will ask for a special authentication
            code from your device.
          </p>
          <button class="ml-4 p-2 text-white font-light text-sm bg-gradient-to-r from-red-500 to-orange-600 rounded-sm hover:from-[#efefeb] hover:to-gray-200 hover:text-red-500">
            Enable Two-Factor Authentication
          </button>
        </section>
        <section class="bg-white border-x-2 border-b-2 p-4 border-gray-200">
          <h2 class="p-4 text-xl">Account Security Activity</h2>
        </section>
      </main>
    </>
  );
};

export default Profile;
