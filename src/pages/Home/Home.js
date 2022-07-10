import React from "react";
import Text from "components/Text";
import UserList from "pages/UserList";
import InfiniteScroll from "react-infinite-scroll-component";
import * as S from "./style";

const Home = ({ users, isLoading, setPage, page }) => {

  const fetchMoreData = () => {
    if(users)
    setPage(page + 1);
  }
  

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <S.Wrapper>
          <InfiniteScroll 
            dataLength={users.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            style={{ overflow: 'visible' }}
          >
            <UserList users={users} isLoading={isLoading} />
          </InfiniteScroll>
        </S.Wrapper>
      </S.Content>
    </S.Home>
  );
};

export default Home;
