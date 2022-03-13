const initialState = {
  name: "",
  email: "",
  id: "",
};

const userDetailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGINUSER":
      const { name, email, id } = payload;
      return { ...initialState, name, email, id };

    default:
      return state;
  }
};
export default userDetailsReducer;
