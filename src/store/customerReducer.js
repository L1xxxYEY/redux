const initialState = {
  customer: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const GET_CUSTOMER = "GET_CUSTOMER";

let customerId = 1;

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER: {
      const newCustomer = { id: customerId++, name: action.payload };
      return { ...state, customer: [...state.customer, newCustomer] };
    }

    case GET_CUSTOMER:
      return {
        ...state,
        customer: state.customer.filter(
          (customer) => customer.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
