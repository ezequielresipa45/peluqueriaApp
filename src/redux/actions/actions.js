
export const add_client = (client) => {
  return {
    type: "ADD_CLIENT",
    payload: client,
  };
};

export const setAccess = (value) => {
  return {
    type: "SET_ACCESS",
    payload:value,
  };
};
