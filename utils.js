function getFlightOffers(data){
    const flights = [];

    let currentFlight = {};
    index = 0;
    for (let index = 0; index < data.length;) {    
      if (data[index + 1].includes('€')) {
        currentFlight = {
          "outbound flight": data[index],
          "return flight": null,
          "price": data[index + 1]
        };
        index += 2;
      } else {
        currentFlight = {
          "outbound flight": data[index],
          "return flight": data[index + 1],
          "price": data[index + 2]
        };
        index += 3;
      }
    
      flights.push(currentFlight);
    }
    
    console.log(flights);
}

module.exports = {
    getFlightOffers
};