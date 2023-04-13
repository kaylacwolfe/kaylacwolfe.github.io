async function getTime(){
  console.info("calling getTime()");
  const response = await fetch('https://clever-web.fcgov.com/bustime/api/v3/gettime?key=RYUXmqBLH4By9Xh8THQd9QNRr&format=json');
  const myJson = await response.json();
  console.info(myJson);
}
