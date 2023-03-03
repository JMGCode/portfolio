const Demo = (props: any) => {
  const { color = "black" } = props;
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.5 20V24H20.5V28H16.5V30H22.5V26H26.5V22H30.5V20H24.5ZM8.5 4H16.5V10C16.5 11.103 17.397 12 18.5 12H24.5V16H26.5V10C26.4999 9.73481 26.3946 9.48049 26.207 9.293L19.207 2.293C19.0195 2.10545 18.7652 2.00006 18.5 2H8.5C7.397 2 6.5 2.897 6.5 4V28C6.5 29.103 7.397 30 8.5 30H12.5V28H8.5V4ZM24.086 10H18.5V4.414L24.086 10Z"
        fill={color}
      />
    </svg>
  );
};

export default Demo;
