import React, { useState } from "react";
import Text from "components/Text";
import UserList from "pages/UserList";
import * as S from "./style";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Favorite = ({ users, isLoading }) => {
  const favoriteUsers = useSelector(state => state.favorite)

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorite users
          </Text>
        </S.Header>
        <UserList users={users.filter(user => favoriteUsers.includes(user.email))} isLoading={isLoading} />
      </S.Content>
    </S.Home>
  );
};

export default Favorite;
