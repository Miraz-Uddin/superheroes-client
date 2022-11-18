import React from "react";
import { useParams } from "react-router-dom";
import { useFriendData } from "../hook/useFriendData";

export default function RqFriend() {
  const { friendId } = useParams();
  const { isLoading, data, isError, error } = useFriendData(friendId);
  if (isLoading) {
    return <h6>Friend Data Loading ...</h6>;
  }
  if (isError) {
    return <h6>{error?.message}</h6>;
  }
  return (
    <div>
      <h4>Friend: {data?.data?.name}</h4>
    </div>
  );
}
