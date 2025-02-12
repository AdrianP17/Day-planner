export function getTimeUntilMidnight() {
    const now = new Date()
  const midnight = new Date(now)
  midnight.setHours(23, 59, 59, 999);

  const timeDifference = midnight.getTime() - now.getTime();

  let hours = Math.floor(timeDifference / (1000 * 60 * 60));
  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
}