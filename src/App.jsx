import "./App.css";

function App() {
  return (
    <>
      <nav class="hidden lg:flex bg-white rounded-3xl m-4 p-2 mx-16">
        {/* Website Logo  */}
        <div></div>
        {/* Primary Navbar */}
        <ul class="flex items-center space-x-4">
          <img
            src="https://i.ibb.co/vHVJWQv/logo.png"
            class="w-10 h-10"
            alt="img not found"
          />
          <li class="text-slate-800 tracking-wide font-semibold px-3 text-lg hover:text-red-600 border-2 border-white hover:border-gray-300 rounded-2xl cursor-pointer">
            Products
          </li>
          <li class="text-slate-800 tracking-wide font-semibold px-3 text-lg hover:text-red-600 border-2 border-white hover:border-gray-300 rounded-2xl cursor-pointer">
            Features
          </li>
          <li class="text-slate-800 tracking-wide font-semibold px-3 text-lg hover:text-red-600 border-2 border-white hover:border-gray-300 rounded-2xl cursor-pointer">
            Pricing
          </li>
          <li class="text-slate-800 tracking-wide font-semibold px-3 text-lg hover:text-red-600 border-2 border-white hover:border-gray-300 rounded-2xl cursor-pointer">
            Contact Us
          </li>
          <li class="text-slate-800 tracking-wide font-semibold px-3 text-lg hover:text-red-600 border-2 border-white hover:border-gray-300 rounded-2xl cursor-pointer">
            Blog
          </li>
        </ul>
        {/* Secondary Navbar */}
        <ul class="flex items-center space-x-4 mr-0 m-auto">
          <li class="text-slate-800 tracking-wide font-semibold px-3 text-lg hover:text-red-500 hover:border-2 hover:border-gray-300 rounded-2xl cursor-pointer">
            Login
          </li>
          <li class="bg-red-600 text-gray-100 tracking-wide text-lg font-semibold px-6 p-2 rounded-3xl cursor-pointer border-2 border-red-600 hover:bg-white hover:border-gray-200 hover:text-red-600">
            Start Building
          </li>
        </ul>
      </nav>
      <main class="p-2 m-4 my-8">
        <h2 class="text-7xl font-bold text-center">Create a website</h2>
        <h2 class="text-7xl font-bold text-center">within no time</h2>
        <p class="text-center text-slate-800 tracking-wide font-semibold px-3 text-lg my-14">
          Design amazing websites, optimize your time
        </p>
        <div class="flex justify-center">
          <button class="bg-red-600 text-gray-100 tracking-wide text-2xl font-semibold px-6 p-2 rounded-3xl cursor-pointer border-2 hover:bg-white hover:border-gray-200 hover:text-red-600">
            Start Building
          </button>
        </div>
        <section class="flex justify-center my-14">
          <div class="w-[90px] h-[180px] md:w-[150px] md:h-[300px] lg:w-[190px] lg:h-[375px] bg-white rounded-3xl border border-gray-200 mb-0 my-auto relative left-12">
            <div class="w-[80px] h-[165px] md:w-[130px] md:h-[270px] lg:w-[159px] lg:h-[346px] bg-gray-200 ml-4 my-4 rounded-md"></div>
          </div>
          <div class="w-[215px] h-[143px] lg:w-[875px] lg:h-[586px] bg-white rounded-lg border border-gray-200">
            <div class="flex space-x-2 my-2">
              <div class="w-2 h-2 rounded-full bg-gray-200 ml-4"></div>
              <div class="w-2 h-2 rounded-full bg-gray-200"></div>
              <div class="w-2 h-2 rounded-full bg-gray-200"></div>
            </div>
            <div class="flex justify-center">
              <div class="w-[240px] h-[135pxpx] lg:w-[839px] lg:h-[540px] bg-gray-200 rounded-sm"></div>
            </div>
          </div>
        </section>
        <section class="my-14">
          <p class="text-center text-slate-800 tracking-wider font-semibold px-3 text-2xl my-4">
            Trusted by over <span class="text-red-500">2000+</span> Agencies and
            Saas Platforms
          </p>
          <p class="text-center tracking-wider text-md font-normal">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </section>
        <section class="hidden md:flex justify-center my-14 space-x-16">
          <div className="w-[80px] h-[30px] bg-gray-300 rounded-md"></div>
          <div className="w-[80px] h-[30px] bg-gray-300 rounded-md"></div>
          <div className="w-[80px] h-[30px] bg-gray-300 rounded-md"></div>
          <div className="w-[80px] h-[30px] bg-gray-300 rounded-md"></div>
          <div className="w-[80px] h-[30px] bg-gray-300 rounded-md"></div>
          <div className="w-[80px] h-[30px] bg-gray-300 rounded-md"></div>
          <div className="w-[80px] h-[30px] bg-gray-300 rounded-md"></div>
          <div className="w-[80px] h-[30px] bg-gray-300 rounded-md"></div>
        </section>
        <section class="flex justify-center mt-56 my-14">
          <div className="w-[724px] h-[479px] bg-gray-200 rounded-3xl"></div>
          <div className="w-[337px] h-[304px] bg-white rounded-3xl relative top-12 right-16"></div>
        </section>
        <section class="flex flex-row flex-wrap md:justify-start space-x-10 md:ml-16">
          <div className="w-[176px] h-[168px] bg-white rounded-3xl relative lg:bottom-28 lg:left-56"></div>
          <div className="w-[176px] h-[168px] bg-white rounded-3xl relative lg:bottom-28 lg:left-56"></div>
          <div className="w-[176px] h-[168px] bg-white rounded-3xl relative lg:bottom-28 lg:left-56"></div>
        </section>
        <section class="flex flex-row flex-wrap justify-center my-14">
          <div class="w-[270px] p-4 m-2 ml-4">
            <h2 class="text-2xl font-normal text-center">
              Build Websites Twice as Fast
            </h2>
            <p class="text-md font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="w-[270px] p-4 m-2">
            <h2 class="text-2xl font-normal text-center">
              Drive Conversions with Speed
            </h2>
            <p class="text-md font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="w-[270px] p-4 m-2">
            <h2 class="text-2xl font-normal text-center">
              Provide Unmatched Security & Stability
            </h2>
            <p class="text-md font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="w-[270px] p-4 m-2 mr-4">
            <h2 class="text-2xl font-normal text-center">
              Explore Infinite Design Capabiities
            </h2>
            <p class="text-md font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>
        <div class="flex justify-center">
          <button class="bg-red-600 text-gray-100 tracking-wide text-2xl font-semibold px-6 p-2 rounded-3xl cursor-pointer border-2 hover:bg-white hover:border-gray-200 hover:text-red-600">
            Start Building
          </button>
        </div>
        <section class="flex justify-center space-x-10 mt-44 my-14">
          <div class="w-[600px] p-4 m-2 mr-4">
            <h2 class="text-4xl font-normal text-center">
              Fully customizable website templates
            </h2>
            <p class="text-md font-normal mt-9">
              Designer-made templates built to meet your needs. Choose a
              template and edit anything – change colors, fonts, images, and
              more. No coding skills needed.
            </p>
          </div>
        </section>
        <nav>
          <ul class="flex flex-row flex-wrap justify-center space-x-4">
            <li class="text-slate-800 tracking-wide font-normal px-3 text-lg hover:font-semibold hover:text-red-400 hover:underline hover:underline-offset-4 cursor-pointer">
              Popular Templates
            </li>
            <li class="text-slate-800 tracking-wide font-normal px-3 text-lg hover:font-semibold hover:text-red-400 hover:underline hover:underline-offset-4 cursor-pointer">
              Portfolio
            </li>
            <li class="text-slate-800 tracking-wide font-normal px-3 text-lg hover:font-semibold hover:text-red-400 hover:underline hover:underline-offset-4 cursor-pointer">
              eCommerce
            </li>
            <li class="text-slate-800 tracking-wide font-normal px-3 text-lg hover:font-semibold hover:text-red-400 hover:underline hover:underline-offset-4 cursor-pointer">
              Blog
            </li>
            <li class="text-slate-800 tracking-wide font-normal px-3 text-lg hover:font-semibold hover:text-red-400 hover:underline hover:underline-offset-4 cursor-pointer">
              Business
            </li>
            <li class="text-slate-800 tracking-wide font-normal px-3 text-lg hover:font-semibold hover:text-red-400 hover:underline hover:underline-offset-4 cursor-pointer">
              Resume
            </li>
            <li class="text-slate-800 tracking-wide font-normal px-3 text-lg hover:font-semibold hover:text-red-400 hover:underline hover:underline-offset-4 cursor-pointer">
              Events
            </li>
          </ul>
        </nav>
        <section class="flex flex-row flex-wrap justify-center md:space-x-9 my-14">
          <div class="my-2">
            <div className="w-[348px] h-[25px] bg-white rounded-t-lg">
              <div class="flex space-x-2">
                <div class="w-2 h-2 rounded-full bg-gray-200 ml-4 mt-2 "></div>
                <div class="w-2 h-2 rounded-full bg-gray-200 mt-2 "></div>
                <div class="w-2 h-2 rounded-full bg-gray-200 mt-2 "></div>
              </div>
            </div>
            <div className="w-[348px] h-[368px] bg-gray-200 rounded-b-lg"></div>
          </div>
          <div class="my-2">
            <div className="w-[348px] h-[25px] bg-white rounded-t-lg">
              <div class="flex space-x-2">
                <div class="w-2 h-2 rounded-full bg-gray-200 ml-4 mt-2"></div>
                <div class="w-2 h-2 rounded-full bg-gray-200 mt-2"></div>
                <div class="w-2 h-2 rounded-full bg-gray-200 mt-2"></div>
              </div>
            </div>
            <div className="w-[348px] h-[368px] bg-gray-200 rounded-b-lg"></div>
          </div>
          <div class="my-2">
            <div className="w-[348px] h-[25px] bg-white rounded-t-lg">
              <div class="flex space-x-2">
                <div class="w-2 h-2 rounded-full bg-gray-200 ml-4 mt-2"></div>
                <div class="w-2 h-2 rounded-full bg-gray-200 mt-2"></div>
                <div class="w-2 h-2 rounded-full bg-gray-200 mt-2"></div>
              </div>
            </div>
            <div className="w-[348px] h-[368px] bg-gray-200 rounded-b-lg"></div>
          </div>
        </section>
        <div class="flex justify-center">
          <button class="bg-red-600 text-gray-100 tracking-wide text-sm font-extralight px-8 py-3 rounded-3xl cursor-pointer border-2 hover:bg-white hover:border-gray-200 hover:text-red-600">
            EXPLORE TEMPLATES
          </button>
        </div>
        <section class="flex justify-center my-14 mt-36">
          <div class="w-[600px] h-[450px] bg-white rounded-lg flex border border-gray-200 lg:ml-[18vw] mx-auto">
            <div class="flex space-x-2 my-2">
              <div class="w-2 h-2 rounded-full bg-gray-200 ml-2"></div>
              <div class="w-2 h-2 rounded-full bg-gray-200"></div>
              <div class="w-2 h-2 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </section>
        <section class="flex justify-center lg:justify-start my-14 lg:ml-[18vw] mx-auto">
          <div class="w-[270px] p-4 m-2">
            <h2 class="text-2xl font-normal">Lorem ipsum dorar</h2>
            <p class="text-md font-light my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="w-[270px] p-4 m-2">
            <h2 class="text-2xl font-normal">Lorem ipsum</h2>
            <p class="text-md font-light my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="w-[270px] p-4 m-2">
            <h2 class="text-2xl font-normal">Lorem ipsum dolor</h2>
            <p class="text-md font-light my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>
        <section class="flex justify-center mt-28 my-14">
          <div class="w-[750px] p-4 m-2 mr-4">
            <h2 class="text-5xl font-normal text-center">
              Create a website you're proud of in 5 steps
            </h2>
          </div>
        </section>
        <div class="flex justify-center my-14 space-x-10">
          <div className="w-[650px] h-[382px] bg-gray-200 rounded-lg"></div>
          <ul>
            <li class="text-lg tracking-wide">1. Pick a template</li>
            <li class="text-lg tracking-wide my-6">2. Customize anything</li>
            <li class="text-lg tracking-wide my-6">3. Use Plugins</li>
            <li class="text-lg tracking-wide my-6">4. Connect a domain</li>
            <li class="text-lg tracking-wide my-6">5. Publish</li>
          </ul>
        </div>
        <section class="flex justify-center mt-28 my-14">
          <div class="w-[400px] md:w-[700px] p-4 m-2 mr-4">
            <h2 class="text-5xl font-normal text-center">
              Website builder questions? We’ve got answers.
            </h2>
            <div class="w-[400px] md:w-[650px] p-4 m-2 mr-4 mt-14 my-8">
              <h4 class="text-2xl font-normal">What is a website builder?</h4>
              <p class="text-md text-slate-600 font-normal mt-4">
                To create a website, you’d normally need a lot of graphic
                design, programming, and marketing knowledge. Or, you’d need to
                hire experts of those industries, e.g. a web developer, to get
                everything done for you – that can get expensive.
              </p>
            </div>
            <hr />
            <div class="w-[400px] md:w-[650px] p-4 m-2 mr-4 my-8">
              <h4 class="text-2xl font-normal">
                Do I need coding any knowledge to create my website?
              </h4>
            </div>
            <hr />
            <div class="w-[400px] md:w-[650px] p-4 m-2 mr-4 my-8">
              <h4 class="text-2xl font-normal">Can I use custom domain?</h4>
            </div>
            <hr />
            <div class="w-[400px] md:w-[650px] p-4 m-2 mr-4 my-8">
              <h4 class="text-2xl font-normal">
                Is it easy to make a website with Tickel.life website builder?
              </h4>
            </div>
            <hr />
            <div class="w-[400px] md:w-[650px] p-4 m-2 mr-4 my-8">
              <h4 class="text-2xl font-normal">
                Can I host a website I created for free?
              </h4>
            </div>
            <hr />
            <div class="w-[400px] md:w-[650px] p-4 m-2 mr-4 my-8">
              <h4 class="text-2xl font-normal">
                Is Tickel.life website builder SEO friendly?
              </h4>
            </div>
            <hr />
            <div class="w-[400px] md:w-[650px] p-4 m-2 mr-4 my-8">
              <h4 class="text-2xl font-normal">
                Will my Tickel life website be mobile friendly?
              </h4>
            </div>
            <hr />
          </div>
        </section>
      </main>
      <footer class="bg-black text-center w-screen">
        <div class="p-20">
          <h2 class="text-white text-5xl font-normal p-2">
            Got a business idea?
          </h2>
          <h2 class="text-white text-5xl font-normal p-2">
            Build with Tickel.life
          </h2>
        </div>
        <div class="flex justify-center mt-2 pb-16">
          <button class="bg-red-600 text-gray-100 tracking-wide text-2xl font-semibold px-6 p-3 rounded-3xl cursor-pointer border-2 border-black hover:bg-white hover:border-gray-200 hover:text-red-600">
            Start Building
          </button>
        </div>
      </footer>
    </>
  );
}

export default App;
