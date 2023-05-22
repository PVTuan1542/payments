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
