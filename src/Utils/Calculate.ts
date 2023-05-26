export function calculateAppointments(services: any) {
  let total = 0;
  let deposit = 0;

  for (const service of services) {
    total += service?.price;
  }

  deposit = (total * 10) / 100;

  return {
    total,
    deposit,
    amount: total - deposit,
  };
}

export function convertDate(timestamp: any) {
  const dateObj = new Date(timestamp);
  const formattedDateTime = dateObj.toLocaleString("en-US");

  return formattedDateTime;
}

export function uppercaseServiceName(serviceName: string) {
  return serviceName.charAt(0).toUpperCase() + serviceName.slice(1);
}

export function combinedDateTime(selectedDate: string, selectedTime: string) {
  const combinedDateTime = new Date(`${selectedDate}T${selectedTime}:00`);

  return combinedDateTime;
}

export function formattedTime(date: string) {
  const time = new Date(date);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");

  const formattedTime = `${hours}:${minutes}`;

  return formattedTime;
}

export function getDate(dateString: string) {
  const date = new Date(dateString);

  const dateOnly = date.toISOString().split("T")[0];

  return dateOnly;
}
