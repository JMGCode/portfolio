const HandClick = (props: any) => {
  const { color = "black" } = props;
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6667 17.3333V6C10.6667 5.46957 10.8774 4.96086 11.2524 4.58579C11.6275 4.21071 12.1362 4 12.6667 4C13.1971 4 13.7058 4.21071 14.0809 4.58579C14.4559 4.96086 14.6667 5.46957 14.6667 6V16M14.6667 15.3333V12.6667C14.6667 12.1362 14.8774 11.6275 15.2524 11.2525C15.6275 10.8774 16.1362 10.6667 16.6667 10.6667C17.1971 10.6667 17.7058 10.8774 18.0809 11.2525C18.4559 11.6275 18.6667 12.1362 18.6667 12.6667V16M18.6667 14C18.6667 13.4696 18.8774 12.9609 19.2524 12.5858C19.6275 12.2107 20.1362 12 20.6667 12C21.1971 12 21.7058 12.2107 22.0809 12.5858C22.4559 12.9609 22.6667 13.4696 22.6667 14V16"
        stroke={color}
        strokeWidth="2.66667"
        tsroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.6667 15.3333C22.6667 14.8029 22.8774 14.2942 23.2525 13.9191C23.6275 13.544 24.1362 13.3333 24.6667 13.3333C25.1971 13.3333 25.7058 13.544 26.0809 13.9191C26.456 14.2942 26.6667 14.8029 26.6667 15.3333V21.3333C26.6667 23.4551 25.8238 25.4899 24.3235 26.9902C22.8232 28.4905 20.7884 29.3333 18.6667 29.3333H16H16.2773C14.9524 29.3335 13.6482 29.0047 12.4818 28.3764C11.3154 27.748 10.3234 26.8398 9.59467 25.7333L9.33333 25.3333C8.91733 24.6947 7.45733 22.1493 4.952 17.696C4.6966 17.242 4.62838 16.7063 4.76184 16.2029C4.89531 15.6994 5.21993 15.2678 5.66667 15C6.1425 14.7145 6.7001 14.5961 7.25088 14.6638C7.80166 14.7314 8.31405 14.9812 8.70667 15.3733L10.6667 17.3333M6.66667 3.99999L5.33333 2.66666M5.33333 9.33332H4M18.6667 3.99999L20 2.66666M20 7.99999H21.3333"
        stroke={color}
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HandClick;