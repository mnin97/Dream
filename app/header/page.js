import {
  Gnb,
  GnbArea,
  GnbLink,
  GnbList,
  GnbListItem,
  HeaderCenter,
  HeaderMain,
  HeaderMainInner,
  HeaderMainLogo,
  HeaderMainRight,
  HeaderTitle,
  HeaderTop,
  HeaderTopInner,
  HeaderTopLink,
  HeaderToplist,
  HeaderToplistItem,
  HeaderWrapper,
} from "./header.style";

export default function Header() {
  return (
    <HeaderWrapper>
      {/* headerTop */}
      <HeaderTop>
        <HeaderTopInner>
          <HeaderToplist>
            <HeaderToplistItem>
              <HeaderTopLink>회원가입</HeaderTopLink>
            </HeaderToplistItem>
            <HeaderToplistItem>
              <HeaderTopLink>로그인</HeaderTopLink>
            </HeaderToplistItem>
          </HeaderToplist>
        </HeaderTopInner>
      </HeaderTop>
      {/* headerMain */}
      <HeaderMain>
        <HeaderMainInner>
          <HeaderTitle>
            <HeaderMainLogo>Dream</HeaderMainLogo>
          </HeaderTitle>
          <HeaderCenter></HeaderCenter>
          <HeaderMainRight>
            <GnbArea>
              <Gnb>
                <GnbList>
                  <GnbListItem>
                    <GnbLink style={{ fontWeight: "700" }}>HOME</GnbLink>
                  </GnbListItem>
                  <GnbListItem>
                    <GnbLink>STYLE</GnbLink>
                  </GnbListItem>
                  <GnbListItem>
                    <GnbLink>SHOP</GnbLink>
                  </GnbListItem>
                  <GnbListItem>
                    <GnbLink>MY</GnbLink>
                  </GnbListItem>
                </GnbList>
              </Gnb>
            </GnbArea>
          </HeaderMainRight>
        </HeaderMainInner>
      </HeaderMain>
      {/* Portal_target */}
      <div>
        <div></div>
      </div>
    </HeaderWrapper>
  );
}
