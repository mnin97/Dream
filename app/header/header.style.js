"use client";

import { styled } from "styled-components";

export const HeaderWrapper = styled.div`
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 130px;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const HeaderTop = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
`;

export const HeaderTopInner = styled.div`
  display: flex;
  padding: 8px 40px 0;
  height: 22px;
`;

export const HeaderToplist = styled.ul`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top: 20px;
`;

export const HeaderToplistItem = styled.li`
  list-style: none;
  display: list-item;
  margin-left: 24px;
`;

export const HeaderTopLink = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  letter-spacing: -0.06px;
  color: rgba(34, 34, 34, 0.8);
`;

export const HeaderMain = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
`;

export const HeaderMainInner = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 40px;
  height: 64px;
  min-width: 320px;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

export const HeaderMainLogo = styled.span`
  display: flex;
  width: 120px;
  height: 24px;
`;

export const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderMainRight = styled.div`
  display: flex;
  min-width: 120px;
  flex-shrink: 0;
  justify-content: flex-end;
`;

export const GnbArea = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Gnb = styled.div`
  box-sizing: border-box;
`;

export const GnbList = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 35px;
`;

export const GnbListItem = styled.li`
  margin-right: 40px;
`;

export const GnbLink = styled.span`
  display: flex;
  font-size: 18px;
  letter-spacing: -0.27px;
`;
