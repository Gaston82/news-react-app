import React from "react";

export const fetchEvents = async () => {
  const base = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=DxSOpYSZ4nVwPWsGOWdELH14DJA5EIYL&countryCode=ES`;
  const response = fetch(base).then();
  const data = await (await response).json();

  const events = data._embedded.events.map((concert) => {
    return {
      name: concert.name,
      id: concert.id,
      date: concert._embedded.venues[0].city.name,
    };
  });
  console.log(events);
};
fetchEvents();
