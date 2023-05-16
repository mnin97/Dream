"use client";

import { useRouter } from "next/navigation";
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
  const router = useRouter();

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
            <HeaderMainLogo
              onClick={() => {
                router.push("/");
              }}
            >
              Dream
            </HeaderMainLogo>
          </HeaderTitle>
          <HeaderCenter></HeaderCenter>
          <HeaderMainRight>
            <GnbArea>
              <Gnb>
                <GnbList>
                  <GnbListItem>
                    <GnbLink
                      style={{ fontWeight: "700" }}
                      onClick={() => {
                        router.push("/");
                      }}
                    >
                      HOME
                    </GnbLink>
                  </GnbListItem>
                  <GnbListItem>
                    <GnbLink
                      onClick={() => {
                        router.push("/list");
                      }}
                    >
                      STYLE
                    </GnbLink>
                  </GnbListItem>
                  <GnbListItem>
                    <GnbLink
                      onClick={() => {
                        router.push("/submit");
                      }}
                    >
                      Submit
                    </GnbLink>
                  </GnbListItem>
                </GnbList>
              </Gnb>
            </GnbArea>
          </HeaderMainRight>
        </HeaderMainInner>
      </HeaderMain>
      {/* Portal_target */}
    </HeaderWrapper>
  );
}
