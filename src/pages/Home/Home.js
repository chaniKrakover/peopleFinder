import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import InfiniteScroll from "react-infinite-scroll-component";
import * as S from "./style";

const Home = ({ users, isLoading, setPage, page }) => {

  const fetchMoreData = () => {
    if (users)
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
         <div
          id="scrollableDiv"
          style={{
            height: 'calc(100vh - 220px)',
            overflow: 'auto',
            display: 'flex',
            width: "650px",
          }}
        >
           <InfiniteScroll
            dataLength={users.length}
            next={fetchMoreData}
            style={{ display: 'flex', overflow: 'visible', flexDirection: 'column-reverse' }} 
            hasMore={true}
            scrollThreshold="300px"
            scrollableTarget="scrollableDiv"
          >
            <UserList users={users} isLoading={isLoading} />
          </InfiniteScroll>
        </div>
       </S.Content>
    </S.Home>
  );
};

export default Home;
