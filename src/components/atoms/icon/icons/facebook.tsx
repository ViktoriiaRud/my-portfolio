import React from 'react';

const Facebook = (props: React.PropsWithChildren<React.SVGProps<SVGSVGElement>>) => (
  <svg
    {...props}
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.9991 10.5004C20.9991 4.70069 16.2984 0 10.4995 0C4.70069 0 0 4.70069 0 10.5004C0 15.7401 3.83965 20.0838 8.85886 20.8713V13.535H6.1935V10.4995H8.85886V8.18683C8.85886 5.55472 10.4269 4.10129 12.8245 4.10129C13.9734 4.10129 15.1749 4.30605 15.1749 4.30605V6.89003H13.8518C12.548 6.89003 12.1411 7.69944 12.1411 8.52984V10.5004H15.0532L14.5877 13.5359H12.1411V20.8722C17.1603 20.0847 21 15.741 21 10.5004H20.9991Z"
      fill="black"
    />
  </svg>
);

export default Facebook;
