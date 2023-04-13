var APIKey = "RYUXmqBLH4By9Xh8THQd9QNRr";

const getTime = async () => {
  const response = await fetch('https://clever-web.fcgov.com/bustime/api/v3/gettime?key=' + APIKey);
  const myJson = await response.json();
}
