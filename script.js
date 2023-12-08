function minDate(dates) {
  //write you code here
	 if (!dates || dates.length === 0) {
    return null;
  }

  // Clone the array to avoid modifying the input array
  const clonedDates = [...dates];

  // Parse the first date as the initial minimum
  let minDateValue = new Date(clonedDates[0]);

  // Loop through the remaining dates and update the minimum if needed
  for (let i = 1; i < clonedDates.length; i++) {
    const currentDate = new Date(clonedDates[i]);

    if (currentDate < minDateValue) {
      minDateValue = currentDate;
    }
  }

  // Format the minimum date as "YYYY/MM/DD"
  const minDateFormatted = `${minDateValue.getFullYear()}/${padZeroes(
    minDateValue.getMonth() + 1
  )}/${padZeroes(minDateValue.getDate())}`;

  return minDateFormatted;
}

// Helper function to pad zeroes for single-digit months and days
function padZeroes(number) {
  return number.toString().padStart(2, '0');
}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];

alert(minDate(dates));
