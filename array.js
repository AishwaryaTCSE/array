
const profile = {
    name: "Charlie",
    age: 29,
    address: {
      city: "San Francisco",
      zipcode: "94101"
    }
  };
  
  const updates = {
    age: 30,
    address: {
      zipcode: "94109",
      country: "USA"
    }
  };
  
  // Merge profile and updates
  const merged = {
    ...profile,
    ...updates,
    address: {
      ...profile.address,
      ...updates.address
    }
  };
  
  console.log(merged);
  