import axios from "axios";
import { useQuery } from "react-query";

const fetchFriend = ({ queryKey }) => {
  const friendId = queryKey[1];
  return axios.get(`${process.env.REACT_APP_API_URL}/friends/${friendId}`);
};

export const useFriendData = (friendId) => {
  return useQuery(["friend", friendId], fetchFriend);
};
