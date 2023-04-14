async function getTime(){
  console.info("calling getTime()");
  try{ const response = await fetch('https://clever-web.fcgov.com/bustime/api/v3/gettime?key=RYUXmqBLH4By9Xh8THQd9QNRr&format=json', { 
    method: 'GET', 
    headers: {accept: 'application/json'}, });
  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);}
  const myJson = await response.json();
  console.info(myJson);
}
