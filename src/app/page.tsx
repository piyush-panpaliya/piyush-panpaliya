import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex grow flex-col items-center justify-center ">
      <div className="flex justify-between gap-24">
        <div className=" flex flex-col gap-12 pt-8">
          <div className="flex flex-col items-start">
            <p className="ml-1 text-lg text-[#E5E9F0]">Hi all. I am</p>
            <p className="mb-2 text-5xl  text-[#E5E9F0]">Piyush Panpaliya</p>
            <p className="text-3xl text-[#4D5BCE]"> &gt; Front-end developer</p>
          </div>
          <div>
            {/* <p>{'// complete the game to continue'}</p> */}
            <p>{'// you can check out my Github page'}</p>
            <Link
              target="_blank"
              href="https://github.com/piyush-panpaliya"
              className="space-x-2 text-white"
            >
              <span className="text-[#4D5BCE]"> const </span>
              <span className="text-[#43D9AD]"> githubLink </span>
              <span>=</span>
              <span className="text-[#E99287]">
                “https://github.com/piyush-panpaliya”
              </span>
            </Link>
          </div>
        </div>
        <div className="relative z-0  w-[25vw] ">
          {/* <img className="w-[25vw]" src="bg.png" alt="img" /> */}
          <div
            style={{
              boxShadow: '0px 2px 0px 0px rgba(255, 255, 255, 0.30) inset',
              backdropFilter: 'blur(32px)',
              background:
                'linear-gradient(150deg, rgba(23, 85, 83, 0.70) 1.7%, rgba(67, 217, 173, 0.09) 81.82%)',
            }}
            className="relative flex h-[380px] w-[400px] justify-between gap-4 rounded-lg border-[1px] border-[#0C1616] bg-gray-700/30 px-6 py-7 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 22 22"
              fill="none"
              className="absolute left-2 top-2.5"
            >
              <g filter="url(#filter0_di_64_1310)">
                <circle
                  cx="8.73047"
                  cy="9.27106"
                  r="6.5"
                  fill="url(#paint0_radial_64_1310)"
                />
              </g>
              <path
                d="M5.96094 11.5657L11.4995 6.97635M5.96094 6.97635L11.4995 11.5657"
                stroke="#114944"
              />
              <defs>
                <filter
                  id="filter0_di_64_1310"
                  x="0.230469"
                  y="0.771057"
                  width="21"
                  height="21"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0525 0 0 0 0 0.2625 0 0 0 0 0.255726 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_64_1310"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_64_1310"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.12184 0 0 0 0 0.504167 0 0 0 0 0.464752 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_64_1310"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_64_1310"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(8.73047 6.27106) rotate(90) scale(9.5)"
                >
                  <stop offset="0.151042" stop-color="#217D7A" />
                  <stop offset="1" stop-color="#114B4A" />
                </radialGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 22 22"
              fill="none"
              className="absolute right-2 top-2.5"
            >
              <g filter="url(#filter0_di_64_1310)">
                <circle
                  cx="8.73047"
                  cy="9.27106"
                  r="6.5"
                  fill="url(#paint0_radial_64_1310)"
                />
              </g>
              <path
                d="M5.96094 11.5657L11.4995 6.97635M5.96094 6.97635L11.4995 11.5657"
                stroke="#114944"
              />
              <defs>
                <filter
                  id="filter0_di_64_1310"
                  x="0.230469"
                  y="0.771057"
                  width="21"
                  height="21"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0525 0 0 0 0 0.2625 0 0 0 0 0.255726 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_64_1310"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_64_1310"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.12184 0 0 0 0 0.504167 0 0 0 0 0.464752 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_64_1310"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_64_1310"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(8.73047 6.27106) rotate(90) scale(9.5)"
                >
                  <stop offset="0.151042" stop-color="#217D7A" />
                  <stop offset="1" stop-color="#114B4A" />
                </radialGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 22 22"
              fill="none"
              className="absolute bottom-1.5 left-2"
            >
              <g filter="url(#filter0_di_64_1310)">
                <circle
                  cx="8.73047"
                  cy="9.27106"
                  r="6.5"
                  fill="url(#paint0_radial_64_1310)"
                />
              </g>
              <path
                d="M5.96094 11.5657L11.4995 6.97635M5.96094 6.97635L11.4995 11.5657"
                stroke="#114944"
              />
              <defs>
                <filter
                  id="filter0_di_64_1310"
                  x="0.230469"
                  y="0.771057"
                  width="21"
                  height="21"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0525 0 0 0 0 0.2625 0 0 0 0 0.255726 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_64_1310"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_64_1310"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.12184 0 0 0 0 0.504167 0 0 0 0 0.464752 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_64_1310"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_64_1310"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(8.73047 6.27106) rotate(90) scale(9.5)"
                >
                  <stop offset="0.151042" stop-color="#217D7A" />
                  <stop offset="1" stop-color="#114B4A" />
                </radialGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 22 22"
              fill="none"
              className="absolute bottom-1.5 right-2"
            >
              <g filter="url(#filter0_di_64_1310)">
                <circle
                  cx="8.73047"
                  cy="9.27106"
                  r="6.5"
                  fill="url(#paint0_radial_64_1310)"
                />
              </g>
              <path
                d="M5.96094 11.5657L11.4995 6.97635M5.96094 6.97635L11.4995 11.5657"
                stroke="#114944"
              />
              <defs>
                <filter
                  id="filter0_di_64_1310"
                  x="0.230469"
                  y="0.771057"
                  width="21"
                  height="21"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0525 0 0 0 0 0.2625 0 0 0 0 0.255726 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_64_1310"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_64_1310"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.12184 0 0 0 0 0.504167 0 0 0 0 0.464752 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_64_1310"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_64_1310"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(8.73047 6.27106) rotate(90) scale(9.5)"
                >
                  <stop offset="0.151042" stop-color="#217D7A" />
                  <stop offset="1" stop-color="#114B4A" />
                </radialGradient>
              </defs>
            </svg>
            <div
              style={{
                background: 'rgba(1, 22, 39, 0.84)',
                boxShadow: '1px 5px 11px 0px rgba(2, 18, 27, 0.71) inset',
              }}
              className="h-full grow  rounded-md "
            ></div>
            <div className="flex h-full w-[42%] flex-col ">
              <div
                style={{ background: 'rgba(1, 20, 35, 0.19)' }}
                className=" w-full flex-col rounded-md px-3 pb-2 pt-4 text-[11px] font-light leading-[14px]  text-white"
              >
                <p>// use keyboard</p>
                <p>// arrows to play</p>
                <div className="mt-3 grid w-full grid-cols-3 gap-x-0.5 gap-y-[3px] align-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 51 30"
                    fill="none"
                    className=" col-span-3 mx-auto w-1/3"
                  >
                    <rect
                      x="1.46094"
                      y="1.46356"
                      width="48.0787"
                      height="27.6912"
                      rx="7.5"
                      fill="#010C15"
                      stroke="#1E2D3D"
                    />
                    <path
                      d="M25.5 12.3091L29.75 18.3091H21.25L25.5 12.3091Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 30"
                    fill="none"
                  >
                    <rect
                      x="49.0786"
                      y="28.6547"
                      width="48.0787"
                      height="27.6912"
                      rx="7.5"
                      transform="rotate(-180 49.0786 28.6547)"
                      fill="#010C15"
                      stroke="#1E2D3D"
                    />
                    <path
                      d="M22.0391 14.8091L28.0391 10.5591L28.0391 19.0592L22.0391 14.8091Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 51 30"
                    fill="none"
                  >
                    <rect
                      x="49.5391"
                      y="28.6547"
                      width="48.0787"
                      height="27.6912"
                      rx="7.5"
                      transform="rotate(-180 49.5391 28.6547)"
                      fill="#010C15"
                      stroke="#1E2D3D"
                    />
                    <path
                      d="M25.5 17.8091L21.25 11.8091L29.75 11.8091L25.5 17.8091Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 30"
                    fill="none"
                  >
                    <rect
                      x="49"
                      y="28.6547"
                      width="48.0787"
                      height="27.6912"
                      rx="7.5"
                      transform="rotate(-180 49 28.6547)"
                      fill="#010C15"
                      stroke="#1E2D3D"
                    />
                    <path
                      d="M27.9604 14.8091L21.9604 19.0592L21.9604 10.5591L27.9604 14.8091Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex w-full flex-col gap-2 px-2">
                <p className="text-[11px] font-light leading-[14px] text-white">
                  {'// food left'}
                </p>
                <div className="flex flex-wrap gap-0.5">
                  {Array(10)
                    .fill(0)
                    .map((_, n) =>
                      n <= 6 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <circle
                            opacity="0.1"
                            cx="10.8456"
                            cy="11.0379"
                            r="10.3456"
                            fill="#43D9AD"
                          />
                          <circle
                            opacity="0.2"
                            cx="10.8456"
                            cy="11.0379"
                            r="7.34558"
                            fill="#43D9AD"
                          />
                          <circle
                            cx="10.8457"
                            cy="11.0379"
                            r="4"
                            fill="#43D9AD"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <g opacity="0.3">
                            <circle
                              opacity="0.1"
                              cx="11.2303"
                              cy="11.0379"
                              r="10.3456"
                              fill="#43D9AD"
                            />
                            <circle
                              opacity="0.2"
                              cx="11.2303"
                              cy="11.0379"
                              r="7.34558"
                              fill="#43D9AD"
                            />
                            <circle
                              cx="11.2305"
                              cy="11.0379"
                              r="4"
                              fill="#43D9AD"
                            />
                          </g>
                        </svg>
                      ),
                    )}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-[-100px] top-[-120px] z-[-1] w-[160%]  ">
            <svg
              width="100%"
              viewBox="0 0 1114 1030"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.6" filter="url(#filter0_f_64_1234)">
                <path
                  d="M723.946 855.519L510.032 804.132L420.663 739.469L447.226 568.957L622.649 549.391L621.041 427.647L823.309 373.392L953.602 404.691L871.165 670.797L743.892 703.987L723.946 855.519Z"
                  fill="#4D5BCE"
                />
              </g>
              <g opacity="0.6" filter="url(#filter1_f_64_1234)">
                <path
                  d="M673.469 258.482L689.984 477.861L655.759 582.726L485.295 609.598L413.003 448.57L297.588 487.343L184.059 311.368L174 177.746L452.567 174.828L523.099 285.846L673.469 258.482Z"
                  fill="#43D9AD"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_64_1234"
                  x="246.664"
                  y="199.392"
                  width="880.938"
                  height="830.128"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="87"
                    result="effect1_foregroundBlur_64_1234"
                  />
                </filter>
                <filter
                  id="filter1_f_64_1234"
                  x="0"
                  y="0.827728"
                  width="863.983"
                  height="782.77"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="87"
                    result="effect1_foregroundBlur_64_1234"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </main>
  )
}
