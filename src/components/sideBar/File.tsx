import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Education = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div
        className="flex  items-center gap-2 py-1 hover:cursor-pointer"
        onClick={() => setShow((show) => !show)}
      >
        <div
          className={cn(
            'flex items-center justify-center',
            show ? '' : '-rotate-90',
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="9"
            viewBox="0 0 13 9"
            fill="none"
          >
            <path
              d="M6.364 5.27715L11.314 0.327148L12.728 1.74115L6.364 8.10515L0 1.74115L1.414 0.327148L6.364 5.27715Z"
              fill="#607B96"
            />
          </svg>
        </div>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M15.0802 4.30056V12.9672C15.0802 13.1588 15.0041 13.3425 14.8687 13.4779C14.7332 13.6134 14.5495 13.6895 14.358 13.6895H1.35796C1.16642 13.6895 0.982719 13.6134 0.847276 13.4779C0.711833 13.3425 0.635742 13.1588 0.635742 12.9672V3.57834H14.358C14.5495 3.57834 14.7332 3.65443 14.8687 3.78988C15.0041 3.92532 15.0802 4.10902 15.0802 4.30056ZM8.15696 2.1339H0.635742V1.41168C0.635742 1.22013 0.711833 1.03643 0.847276 0.900987C0.982719 0.765544 1.16642 0.689453 1.35796 0.689453H6.71252L8.15696 2.1339Z"
            fill="#3A49A4"
          />
        </svg>
        <p>Education</p>
      </div>
      {show && (
        <div>
          <Link
            href="/about-me/edu/high-school"
            className="flex items-center  gap-2 py-1 pl-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M1.44684 0.832031H16.0466C16.2617 0.832031 16.468 0.917486 16.6201 1.0696C16.7722 1.22171 16.8577 1.42801 16.8577 1.64313V14.6207C16.8577 14.8358 16.7722 15.0421 16.6201 15.1942C16.468 15.3463 16.2617 15.4318 16.0466 15.4318H1.44684C1.23172 15.4318 1.02542 15.3463 0.873307 15.1942C0.721197 15.0421 0.635742 14.8358 0.635742 14.6207V1.64313C0.635742 1.42801 0.721197 1.22171 0.873307 1.0696C1.02542 0.917486 1.23172 0.832031 1.44684 0.832031ZM4.69122 10.9707V7.72635L6.31342 9.34854L7.93561 7.72635V10.9707H9.5578V5.29306H7.93561L6.31342 6.91525L4.69122 5.29306H3.06903V10.9707H4.69122ZM13.6133 8.53745V5.29306H11.9911V8.53745H10.3689L12.8022 10.9707L15.2355 8.53745H13.6133Z"
                fill="#81A1C1"
              />
            </svg>
            <p>high-school</p>
          </Link>
          <Link
            href="/about-me/edu/university"
            className="mb-2 flex items-center gap-2 py-1 pl-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M1.44684 0.832031H16.0466C16.2617 0.832031 16.468 0.917486 16.6201 1.0696C16.7722 1.22171 16.8577 1.42801 16.8577 1.64313V14.6207C16.8577 14.8358 16.7722 15.0421 16.6201 15.1942C16.468 15.3463 16.2617 15.4318 16.0466 15.4318H1.44684C1.23172 15.4318 1.02542 15.3463 0.873307 15.1942C0.721197 15.0421 0.635742 14.8358 0.635742 14.6207V1.64313C0.635742 1.42801 0.721197 1.22171 0.873307 1.0696C1.02542 0.917486 1.23172 0.832031 1.44684 0.832031ZM4.69122 10.9707V7.72635L6.31342 9.34854L7.93561 7.72635V10.9707H9.5578V5.29306H7.93561L6.31342 6.91525L4.69122 5.29306H3.06903V10.9707H4.69122ZM13.6133 8.53745V5.29306H11.9911V8.53745H10.3689L12.8022 10.9707L15.2355 8.53745H13.6133Z"
                fill="#81A1C1"
              />
            </svg>
            <p>university</p>
          </Link>
        </div>
      )}
    </>
  );
};
const Bio = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div
        onClick={() => setShow((show) => !show)}
        className="flex  items-center gap-2 py-1 hover:cursor-pointer"
      >
        <div
          className={cn(
            'flex items-center justify-center',
            show ? 'rotate-90' : '',
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            className="mr-1"
          >
            <path
              d="M5.69658 7.20289L0.746582 2.25289L2.16058 0.838894L8.52458 7.20289L2.16058 13.5669L0.746582 12.1529L5.69658 7.20289Z"
              fill="#607B96"
            />
          </svg>
        </div>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M15.0802 4.30056V12.9672C15.0802 13.1588 15.0041 13.3425 14.8687 13.4779C14.7332 13.6134 14.5495 13.6895 14.358 13.6895H1.35796C1.16642 13.6895 0.982719 13.6134 0.847276 13.4779C0.711833 13.3425 0.635742 13.1588 0.635742 12.9672V3.57834H14.358C14.5495 3.57834 14.7332 3.65443 14.8687 3.78988C15.0041 3.92532 15.0802 4.10902 15.0802 4.30056ZM8.15696 2.1339H0.635742V1.41168C0.635742 1.22013 0.711833 1.03643 0.847276 0.900987C0.982719 0.765544 1.16642 0.689453 1.35796 0.689453H6.71252L8.15696 2.1339Z"
            fill="#E99287"
          />
        </svg>
        <p>Bio</p>
      </div>
      {show && (
        <Link
          href="/about-me/bio"
          className="flex items-center  gap-2 py-1 pl-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M1.44684 0.832031H16.0466C16.2617 0.832031 16.468 0.917486 16.6201 1.0696C16.7722 1.22171 16.8577 1.42801 16.8577 1.64313V14.6207C16.8577 14.8358 16.7722 15.0421 16.6201 15.1942C16.468 15.3463 16.2617 15.4318 16.0466 15.4318H1.44684C1.23172 15.4318 1.02542 15.3463 0.873307 15.1942C0.721197 15.0421 0.635742 14.8358 0.635742 14.6207V1.64313C0.635742 1.42801 0.721197 1.22171 0.873307 1.0696C1.02542 0.917486 1.23172 0.832031 1.44684 0.832031ZM4.69122 10.9707V7.72635L6.31342 9.34854L7.93561 7.72635V10.9707H9.5578V5.29306H7.93561L6.31342 6.91525L4.69122 5.29306H3.06903V10.9707H4.69122ZM13.6133 8.53745V5.29306H11.9911V8.53745H10.3689L12.8022 10.9707L15.2355 8.53745H13.6133Z"
              fill="#81A1C1"
            />
          </svg>
          <div>page</div>
        </Link>
      )}
    </>
  );
};
const Interest = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div
        onClick={() => setShow((show) => !show)}
        className="flex  items-center gap-2 py-1 hover:cursor-pointer"
      >
        <div
          className={cn(
            'flex items-center justify-center',
            show ? 'rotate-90' : '',
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            className="mr-1"
          >
            <path
              d="M5.69658 7.20289L0.746582 2.25289L2.16058 0.838894L8.52458 7.20289L2.16058 13.5669L0.746582 12.1529L5.69658 7.20289Z"
              fill="#607B96"
            />
          </svg>
        </div>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M15.0802 4.30056V12.9672C15.0802 13.1588 15.0041 13.3425 14.8687 13.4779C14.7332 13.6134 14.5495 13.6895 14.358 13.6895H1.35796C1.16642 13.6895 0.982719 13.6134 0.847276 13.4779C0.711833 13.3425 0.635742 13.1588 0.635742 12.9672V3.57834H14.358C14.5495 3.57834 14.7332 3.65443 14.8687 3.78988C15.0041 3.92532 15.0802 4.10902 15.0802 4.30056ZM8.15696 2.1339H0.635742V1.41168C0.635742 1.22013 0.711833 1.03643 0.847276 0.900987C0.982719 0.765544 1.16642 0.689453 1.35796 0.689453H6.71252L8.15696 2.1339Z"
            fill="#43D9AD"
          />
        </svg>
        <p>Interest</p>
      </div>
      {show && (
        <Link
          href="/about-me/interest"
          className="flex items-center  gap-2 py-1 pl-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M1.44684 0.832031H16.0466C16.2617 0.832031 16.468 0.917486 16.6201 1.0696C16.7722 1.22171 16.8577 1.42801 16.8577 1.64313V14.6207C16.8577 14.8358 16.7722 15.0421 16.6201 15.1942C16.468 15.3463 16.2617 15.4318 16.0466 15.4318H1.44684C1.23172 15.4318 1.02542 15.3463 0.873307 15.1942C0.721197 15.0421 0.635742 14.8358 0.635742 14.6207V1.64313C0.635742 1.42801 0.721197 1.22171 0.873307 1.0696C1.02542 0.917486 1.23172 0.832031 1.44684 0.832031ZM4.69122 10.9707V7.72635L6.31342 9.34854L7.93561 7.72635V10.9707H9.5578V5.29306H7.93561L6.31342 6.91525L4.69122 5.29306H3.06903V10.9707H4.69122ZM13.6133 8.53745V5.29306H11.9911V8.53745H10.3689L12.8022 10.9707L15.2355 8.53745H13.6133Z"
              fill="#81A1C1"
            />
          </svg>
          <div>page</div>
        </Link>
      )}
    </>
  );
};
const File = () => {
  const [show, setShow] = useState(true);
  const path = usePathname();
  return (
    <div>
      <div
        onClick={() => setShow((show) => !show)}
        className=" flex h-10 items-center gap-2 border-b-[1px] border-[#607B96]/50 px-4 py-2 hover:cursor-pointer"
      >
        <div
          className={cn(
            ' flex items-center justify-center',
            show ? '' : '-rotate-90',
          )}
        >
          <svg
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M4.74998 6.65186L0.499969 0.651856L9 0.651855L4.74998 6.65186Z"
              fill="white"
            />
          </svg>
        </div>
        <p className="text-white">personal-info</p>
      </div>
      {show && (
        <div className="mb-4 flex flex-col px-4 py-2">
          <Bio />
          <Interest />
          <Education />
        </div>
      )}
    </div>
  );
};

export default File;
