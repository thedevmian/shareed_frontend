export function formatDate(date: string): string {
  // Format the date
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  // Return the formatted date
  return `${day}/${month}/${year}`;
}
