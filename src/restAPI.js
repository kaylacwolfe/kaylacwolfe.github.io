var APIKey = "RYUXmqBLH4By9Xh8THQd9QNRr";

async function getTime(){
  console.info("calling getTime()");
  const response = await fetch('https://clever-web.fcgov.com/bustime/api/v3/format=json/gettime?key=' + APIKey);
  const myJson = await response.json();
  console.info(myJson);
}
