import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-88348-default-rtdb.firebaseio.com/",
});

export default instance;
