const dateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

export const convertDateToLogFormat = () => {
  return new Intl.DateTimeFormat("ko-KR", dateTimeFormatOptions).format(Date.now());
};

