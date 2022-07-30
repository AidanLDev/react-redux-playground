export const depositMoney = (amount) => {
  console.log('depsoitMoney action');
  return (dispatch) => {
    dispatch({
      type: 'DEPOSIT',
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount) => {
  console.log('withdrawMoney action');
  return (dispatch) => {
    dispatch({
      type: 'WITHDRAW',
      payload: amount,
    });
  };
};
