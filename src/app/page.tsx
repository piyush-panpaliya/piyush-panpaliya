import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex grow flex-col items-center justify-center ">
      <div className="flex justify-between gap-24">
        <div className="flex flex-col gap-12 pt-8">
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
        <div className="relative z-0">
          <img className="w-[25vw]" src="bg.png" alt="img" />
          <div className="absolute left-[-150px] top-[-180px] z-[-1] w-[200%]">
            <svg
              width="100%"
              viewBox="0 0 1114 1030"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4" filter="url(#filter0_f_64_1234)">
                <path
                  d="M723.946 855.519L510.032 804.132L420.663 739.469L447.226 568.957L622.649 549.391L621.041 427.647L823.309 373.392L953.602 404.691L871.165 670.797L743.892 703.987L723.946 855.519Z"
                  fill="#4D5BCE"
                />
              </g>
              <g opacity="0.4" filter="url(#filter1_f_64_1234)">
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
