export const filterData = (searchInput, restaurants) => {
    const data = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return data;
  };
  