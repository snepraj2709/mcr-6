export const DataReducer = (state, { type, payload }) => {
  switch (type) {
    case "InitialDataFetch": {
      if (payload) {
        return {
          ...state,
          cuisineTypes: payload.cuisineTypes,
          restaurants: payload.restaurants,
        };
      }
      break;
    }

    case "specialCuisineData": {
      if (payload) {
        return {
          ...state,
          restaurants: payload,
        };
      }
      break;
    }

    case "AddReview": {
      if (payload) {
        console.log("AddReview", payload);

        const updatedRestaurants = state.restaurants.map((restaurant) => {
          if (restaurant.id === payload.id) {
            return payload;
          }
          return restaurant;
        });

        return {
          ...state,
          restaurants: updatedRestaurants,
        };
      }
      break;
    }

    default:
      return state;
  }
};
