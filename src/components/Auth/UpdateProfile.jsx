const UpdateProfile = ()=>{
    return(
     <>
     
      <div className="flex min-h-full flex-col justify-center px-6 py-2 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
      Update Profile
    </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-3">
    <div>
      <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
        First Name
      </label>
      <div className="mt-2">
        <input
           type="text"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>

    <div>
      <div className="flex items-center justify-between">
        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
          Last Name
        </label>
      </div>
      <div className="mt-2">
        <input
           type="text"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>

     <div>
      <div className="flex items-center justify-between">
        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
          Age
        </label>
      </div>
      <div className="mt-2">
        <input
           type="number"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>

     <div>
      <div className="flex items-center justify-between">
        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
          Photo URL
        </label>
      </div>
      <div className="mt-2">
        <input
           type="text"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>

    <div>
      <div className="flex items-center justify-between">
        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
          password
        </label>
      </div>
      <div className="mt-2">
        <input
           type="text"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>

    <div>
      <button
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Update Profile
      </button>
    </div>

    {/* <p className="mt-10 text-center text-sm/6 text-gray-500">
      Not a member?{' '}
      <Link className="font-semibold text-indigo-600 hover:text-indigo-500">
        Register Now
      </Link>
    </p> */}
  </div>
</div>

    </>
    )
}

export default UpdateProfile;