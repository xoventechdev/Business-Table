import mongoose from "mongoose";

function generateBusinesses() {
  const businesses = [];
  const companyNames = [
    "Acme Inc.",
    "TechTronics",
    "Global Solutions",
    "Creative Labs",
    "North Star Industries",
    "GreenTech Solutions",
    "MegaCorp",
    "FutureTech",
    "SkyNet",
    "Meta Solutions",
  ];
  const adjectives = [
    "Reliable",
    "Innovative",
    "Efficient",
    "Sustainable",
    "Profitable",
    "Fast-Growing",
    "Customer-Centric",
    "Award-Winning",
  ];
  const suffixes = ["Ltd.", "Co.", "Corp.", "LLC", "PLC"];

  for (let i = 0; i < 100; i++) {
    const name = `${
      companyNames[Math.floor(Math.random() * companyNames.length)]
    } ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${
      suffixes[Math.floor(Math.random() * suffixes.length)]
    }`;
    const address = `Fake Street ${
      Math.floor(Math.random() * 1000) + 1
    }, Doha, Qatar`;
    const capital = Math.floor(Math.random() * 1000000) + 100000;
    const isProfitable = Math.random() > 0.5;
    const profit = isProfitable ? Math.floor(Math.random() * 1000000) : 0;
    const loss = !isProfitable ? Math.floor(Math.random() * 1000000) : 0;
    const owner = `John Doe ${i + 1}`;

    businesses.push({
      name,
      address,
      capital,
      isProfitable,
      profit,
      loss,
      owner,
    });
  }

  return businesses;
}

const businesses = generateBusinesses(100);
console.log(businesses);
