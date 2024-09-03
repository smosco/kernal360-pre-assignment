export function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, '0'); // 날짜를 두 자리로
  const month = date.toLocaleString('en-US', { month: 'short' }); // 월을 약어로
  const year = date.getFullYear(); // 연도
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0'); // 분을 두 자리로

  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = (hours % 12 || 12).toString().padStart(2, '0'); // 12시간제 시간

  return `${day} ${month} ${year}, ${formattedHours}:${minutes} ${ampm}`;
}
