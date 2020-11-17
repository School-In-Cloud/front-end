import axios from "axios";
export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";

export const registerUser = (user) => {
  axios
    .post(
      "https://school-in-cloud-lambda.herokuapp.com/api/auth/register",
      user
    )
    .then((res) => {
      alert(`Thank you for registering ${res.data.username}. Please sign in.`);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const userSignIn = (userLogin) => {
    return (dispatch) => {
        dispatch({type: FETCH_USER_START})
        axios.post(
            "https://school-in-cloud-lambda.herokuapp.com/api/auth/login",
            userLogin
          ).then(res => {
              localStorage.setItem('token', res.data.token)
              dispatch({type: FETCH_USER_SUCCESS, payload: res.data.usertype})
          })
    }
};
