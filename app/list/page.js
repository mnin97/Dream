"use client";

import { ImageBox, ListBackground, ListItem } from "./list.style";
import DetailLink from "./DetailLink";

export default function List() {
  return (
    <ListBackground>
      <ListItem>
        <h4>글제목</h4>
        <p>1월 1일</p>

        <DetailLink />
      </ListItem>
    </ListBackground>
  );
}
