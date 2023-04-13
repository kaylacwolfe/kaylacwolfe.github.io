async function getTime(){
  console.info("calling getTime()");
  const response = await fetch('https://clever-web.fcgov.com/bustime/api/v3/gettime?format=json&key=RYUXmqBLH4By9Xh8THQd9QNRr');
  const myJson = await response.json();
  console.info(myJson);
}
