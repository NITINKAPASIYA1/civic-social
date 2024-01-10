import React from "react"



const signup = () => {
  return (
    <div className='h-[100%] w-[100%]  flex font-lexend text-2xl'>

    {/* section1 half */}
    <div className='h-[100vh] w-[50%] hover:first-letter: bg-[#F8F9FA]'>

        <div className='flex  mt-3'>
            <img  src='../../assets/logo.png' alt='logo' className="h-[45px] mt-2 ml-2"></img>
            <h2 className='text-2xl  *:first-letter:mt-4 font-semi'>Civic</h2>
        </div>

        <div className='flex flex-col  justify-center items-center gap-y-4 mt-20'>
            <h1 className='font-bold text-3xl'>Create an account</h1>
            <p className='font-light text-sm text-center'>By creating an account,you agree to this app's<br></br> 
            <span className="text-[#27782B]">Terms</span> and <span className="text-[#27782B]">Privacy Policy.</span></p>

            <div className="flex items-center justify-center font-light  rounded-full h-[44px] w-[416px] text-[#DE3B40] bg-[#FDF2F2] gap-x-1"><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.6913 8.6365L10.5323 8.6365V11.7045L14.5898 11.7045C13.9398 13.75 12.3398 14.432 10.4998 14.432C9.78694 14.4329 9.08436 14.2619 8.45168 13.9334C7.819 13.6049 7.2749 13.1286 6.86554 12.545C6.45618 11.9614 6.19364 11.2876 6.10021 10.5809C6.00677 9.87417 6.08519 9.15533 6.32882 8.48538C6.57244 7.81542 6.97408 7.21412 7.49965 6.73249C8.02522 6.25086 8.65922 5.90312 9.34785 5.71876C10.0365 5.53441 10.7594 5.51889 11.4553 5.67352C12.1512 5.82815 12.7996 6.14837 13.3453 6.607L15.5748 4.4835C14.677 3.65655 13.5909 3.06122 12.4109 2.74919C11.2308 2.43717 9.99242 2.41788 8.8032 2.693C7.61399 2.96811 6.5099 3.52933 5.58677 4.32792C4.66365 5.12651 3.94938 6.13834 3.50598 7.27558C3.06259 8.41282 2.90346 9.64109 3.04241 10.8538C3.18136 12.0665 3.61419 13.2269 4.30334 14.2344C4.99248 15.2419 5.9171 16.0659 6.99694 16.635C8.07678 17.2041 9.2792 17.501 10.4998 17.5C14.6353 17.5 18.3733 14.7725 17.6913 8.6365Z" fill="#DE3B40"/>
            </svg>
            <a href="">Sign up with google</a></div>

            <div className="flex items-center justify-center font-light  rounded-full h-[44px] w-[416px] text-[#455EA9] bg-[#D9E4FF] gap-x-2"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8C15.9998 6.47121 15.5615 4.9745 14.737 3.68706C13.9126 2.39963 12.7365 1.37537 11.3481 0.735559C9.95962 0.095746 8.4169 -0.132832 6.90257 0.076886C5.38823 0.286604 3.9657 0.925835 2.80337 1.9189C1.64104 2.91197 0.787596 4.21729 0.344069 5.68032C-0.099457 7.14336 -0.114491 8.70285 0.300748 10.1742C0.715987 11.6455 1.54411 12.967 2.68708 13.9823C3.83004 14.9976 5.23999 15.6641 6.75 15.903L6.75 10.3125L4.719 10.3125L4.719 8L6.75 8L6.75 6.2375C6.75 4.2325 7.9445 3.125 9.7715 3.125C10.3715 3.13332 10.9701 3.18546 11.5625 3.281V5.25H10.5535C10.3816 5.22716 10.2067 5.24331 10.0418 5.29725C9.87698 5.35118 9.72638 5.44152 9.60119 5.56158C9.476 5.68163 9.37943 5.82831 9.31864 5.99076C9.25784 6.15321 9.23439 6.32725 9.25 6.5V8L11.469 8L11.114 10.3125H9.25L9.25 15.903C11.1319 15.6053 12.8458 14.6457 14.0832 13.1969C15.3206 11.7481 16.0003 9.90529 16 8Z" fill="#455EA9"/>
            </svg>
            <a href="">Sign up with facebook</a></div>
 
            <div className="flex space-x-2">
            <div className="h-[1px] w-[84px] bg-[#DEE1E6] mt-3.5"/>
            <p className="font-normal text-[14px] mt-1 text-[#9095A1]">OR SIGN UP USING YOUR EMAIL</p>
            <div className="h-[1px] w-[84px] bg-[#DEE1E6] mt-3.5"/>
            </div>

            <label className="flex flex-col mt-4">Email Address <input type="email" placeholder="example.email@gmail.com" className="w-[415px] h-[43px] rounded-md py-[26px]text-1rem px-[10px] bg-[#F3F4F6] text-[#9095A1]"></input></label>
            
            <ButtonComponent buttonText={'Sign up'}  onClick={() => {}}></ButtonComponent>

            <div className="flex mt-40">
              <p className="text-[#6F7787]">Have an account?</p>
              <a href="/login-in" className="text-[#27782B]">Log in</a>

            </div>
        </div>

       

    </div>

    {/* section 2 half */}
    <div className='h-[100vh] w-[50%] bg-[#d5d9e2] flex justify-center items-center flex-col'>

      <p className="font-light text-[32px] text-[#565D6D]">Welcome to Civic!</p>
      <p className="text-[#6F7787] text-[18px] mb-10">First thing first, let's set you up with an account 👋🏼</p>

      <svg width="593" height="450" viewBox="0 0 593 450" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="296.5" cy="381.5" rx="296.5" ry="68.5" fill="#EAECF0"/>
    <g clip-path="url(#clip0_0_1)">
    <path d="M436.286 15.438C425.263 31.974 435.717 52.386 442.142 68.514C443.001 70.674 446.256 69.066 445.397 66.93C439.42 51.606 429.437 33.15 439.335 17.406C440.617 15.474 437.58 13.506 436.286 15.45V15.438Z" fill="#BDC1CA"/>
    <path d="M418.942 39.638C420.188 45.89 423.177 51.734 427.545 56.414C429.13 58.106 431.852 55.73 430.255 54.026C426.298 49.802 423.612 44.594 422.487 38.93C422.039 36.65 418.47 37.358 418.929 39.638H418.942Z" fill="#BDC1CA"/>
    <path d="M304.403 46.828C318.875 62.452 302.915 88.372 285.89 68.62C274.262 71.236 273.536 54.136 283.737 60.688C283.737 60.688 285.056 59.98 284.935 55.828C283.458 46.468 300.798 53.824 291.021 42.436C289.823 41.608 296.272 38.524 298.184 42.436C300.096 46.348 304.391 46.816 304.391 46.816L304.403 46.828Z" fill="#FFD3A5"/>
    <path d="M310.232 38.964C307.51 36.708 313.366 32.088 307.752 31.26C302.137 30.432 300.939 33.036 294.732 29.724C283.346 23.16 279.462 32.352 280.636 38.964C280.636 38.964 281.591 39.792 275.021 40.98C268.451 42.168 267.144 47.256 270.605 49.98C274.065 52.704 268.572 53.148 268.221 57.96C267.918 62.052 272.795 65.232 277.502 65.652C273.872 60.6 280.418 56.844 283.757 60.648C283.757 60.648 285.076 59.94 284.955 55.788C283.479 46.428 300.818 53.784 291.042 42.396C289.844 41.568 296.293 38.484 298.205 42.396C300.117 46.308 304.412 46.776 304.412 46.776C304.412 46.776 305.162 47.724 306.13 49.26C306.13 49.26 312.894 47.244 314.927 44.76C316.96 42.276 312.967 41.208 310.244 38.952L310.232 38.964Z" fill="#38193D"/>
    <path d="M309.313 56.11C300.262 55.906 295.217 69.574 285.863 63.682V68.662C297.068 84.25 314.468 71.098 309.313 56.11Z" fill="#38193D"/>
    <path d="M285.882 68.714C285.882 68.714 288.991 75.938 285.882 82.934C290.298 94.13 307.601 107.942 305.109 82.346C305.109 82.346 303.197 76.19 303.669 74.174C303.669 74.174 293.638 79.982 285.87 68.726L285.882 68.714Z" fill="#FFD3A5"/>
    <path d="M286.791 80.258C290.723 80.798 297.463 80.99 303.937 77.582C303.67 76.214 303.513 74.882 303.695 74.138C303.695 74.138 293.664 79.946 285.896 68.69C285.896 68.69 288.267 74.21 286.791 80.27V80.258Z" fill="#010101"/>
    <path d="M315.407 82.848L305.062 82.572C307.554 108.228 290.203 94.284 285.835 83.16L280.62 84.864C280.62 84.864 305.534 159.096 295.624 207.9C295.624 207.9 317.73 208.848 337.32 202.212C337.32 202.212 336.159 135.588 315.419 82.836L315.407 82.848Z" fill="#010101"/>
    <path d="M280.86 84.878C280.86 84.878 214.285 71.93 190.4 162.434C190.4 162.434 195.809 170.174 202.5 168.278C202.5 168.278 222.356 126.17 257.918 130.838C257.918 130.838 252.183 164.498 238.485 193.238C238.485 193.238 251.868 217.25 292.004 215.666C311.594 173.654 279.698 83.054 280.86 84.89V84.878Z" fill="#FFF4CA"/>
    <path d="M393.047 49.09C390.179 43.402 378.709 46.882 378.709 46.882C378.709 46.882 383.488 82.486 363.656 86.998C331.978 94.186 315.244 82.762 315.244 82.762C337.968 141.586 335.366 200.83 338.585 207.862C358.417 206.722 366.778 199.282 366.778 199.282C363.91 159.958 354.158 125.362 354.158 125.362C401.735 106.882 393.059 49.078 393.059 49.078L393.047 49.09Z" fill="#FFF4CA"/>
    <path d="M190.579 162.526C191.655 161.434 177.45 182.686 184.008 179.698C182.726 185.242 183.682 196.714 188.195 181.954C186.114 191.626 194.475 194.554 192.974 182.662C192.974 182.662 194.886 190.366 196.435 189.538C197.984 188.71 197.984 179.35 197.984 179.35C197.984 179.35 200.138 184.798 202.279 183.022C204.421 181.246 201.88 173.026 202.679 168.37C202.679 168.37 197.028 170.23 190.579 162.526Z" fill="#FFD3A5"/>
    <path d="M378.666 47.09C378.63 46.754 378.605 46.55 378.605 46.55C378.436 46.526 391.589 42.854 393.029 49.478C395.146 44.066 404.874 16.55 394.311 32.642C397.36 19.31 391.722 18.566 388.745 31.478C388.564 11.882 382.78 21.554 382.526 32.642C381.8 24.446 379.598 21.902 378.061 23.354C376.524 24.806 377.77 35.978 377.77 35.978C377.77 35.978 377.117 34.886 376.125 33.218C375.133 31.55 370.825 30.746 372.797 35.39C374.273 38.858 377.25 44.462 378.666 47.09Z" fill="#FFD3A5"/>
    <path d="M409.255 234.644C406.859 192.476 366.772 197.156 366.759 197.156C366.832 198.044 366.905 198.932 366.965 199.82C366.965 199.82 358.604 207.26 338.772 208.4L337.332 202.664C317.742 209.3 295.636 208.352 295.636 208.352C292.804 213.884 291.776 216.092 291.776 216.092C263.752 217.196 248.784 205.82 242.299 198.86C237.519 217.544 252.971 249.44 231.736 264.26C216.441 273.74 197.335 264.26 197.335 264.26C191.128 266.624 192.265 275.468 192.265 275.468C234.398 369.128 322.292 300.284 325.619 261.416C368.332 262.04 380.057 295.4 367.909 329.408C376.028 335.564 388.213 331.544 388.213 331.544C388.213 331.544 411.626 276.812 409.23 234.644H409.255Z" fill="#2C8730"/>
    <path d="M337.184 201.468C337.184 201.072 337.16 200.556 337.136 199.932C337.16 200.556 337.172 201.072 337.184 201.468Z" fill="#2C8730"/>
    <path d="M380.745 332.862C402.259 284.13 367.81 233.43 327.215 234.402C329.707 251.382 325.436 261.486 325.436 261.486C368.149 262.11 379.874 295.47 367.726 329.478C371.731 332.514 376.716 333.066 380.745 332.862Z" fill="#1D5A20"/>
    <path d="M192.693 272.186C192.959 269.414 194.036 265.682 197.763 264.254C197.763 264.254 193.939 259.046 188.688 257.858C183.437 256.67 172.208 273.962 176.031 277.046C179.855 280.13 187.877 265.874 192.705 272.186H192.693Z" fill="#010101"/>
    <path d="M367.631 329.682C367.631 329.682 363.807 342.474 367.631 344.37C371.454 346.266 392.472 348.63 395.34 346.734C398.207 344.838 387.692 340.338 387.934 331.806C387.934 331.806 375.75 335.838 367.631 329.67V329.682Z" fill="#010101"/>
    <path d="M266.371 213.01C265.439 223.966 257.55 244.102 243.441 236.158C257.538 241.69 263.164 223.15 266.371 213.01Z" fill="#309535"/>
    <path d="M325.303 225.372C328.86 236.952 328.969 249.708 325.545 261.336C326.948 249.36 326.864 237.324 325.303 225.372Z" fill="#309535"/>
    <path d="M373.668 332.266C380.65 309.802 385.055 280.114 365.949 262.33C354.659 253.21 342.342 242.086 327.192 240.982C342.535 241.234 355.434 252.238 366.844 261.346C386.591 279.226 382.151 309.874 373.681 332.278L373.668 332.266Z" fill="#309535"/>
    <path d="M251.145 237.74C249.039 274.748 225.977 297.368 194.396 266.744C227.743 294.752 246.05 273.884 251.145 237.74Z" fill="#309535"/>
    <path d="M351.769 117.052L354.092 125.248C401.669 106.768 392.994 48.964 392.994 48.964C387.258 96.82 351.769 117.052 351.769 117.052Z" fill="#FFD641"/>
    <path d="M354.163 125.364C351.235 120.456 349.202 115.104 348.149 109.488C351.102 114.444 353.086 119.7 354.163 125.364Z" fill="#FFD641"/>
    <path d="M169.287 172.93C138.843 224.278 170.715 244.27 153.412 283.03C152.516 285.178 155.941 286.366 156.836 284.23C171.731 254.53 151.125 228.286 162.68 196.834C164.943 189.166 168.149 181.81 172.288 174.958C173.486 172.978 170.497 170.938 169.287 172.93Z" fill="#BDC1CA"/>
    <path d="M145.643 204.866C141.626 221.306 142.122 238.646 147.265 254.798C147.954 256.982 151.536 256.334 150.834 254.126C145.885 238.61 145.208 221.906 149.068 206.078C149.612 203.846 146.2 202.622 145.643 204.878V204.866Z" fill="#BDC1CA"/>
    <path d="M426.808 295.312C426.251 337.552 411.356 379.42 385.002 412.612C383.574 414.412 386.127 416.98 387.567 415.156C408.609 388.672 422.645 356.908 427.981 323.608C428.344 320.5 434.019 285.664 426.82 295.312H426.808Z" fill="#BDC1CA"/>
    <path d="M429.813 357.566C424.404 371.582 419.007 385.598 413.599 399.614C412.764 401.786 416.273 402.722 417.096 400.574C422.504 386.558 427.901 372.542 433.31 358.526C434.144 356.354 430.635 355.418 429.813 357.566Z" fill="#BDC1CA"/>
    </g>
    <defs>
    <clipPath id="clip0_0_1">
    <rect width="287" height="416" fill="white" transform="translate(143)"/>
    </clipPath>
    </defs>
      </svg>


    </div>

    </div>
  )
}

export default signup