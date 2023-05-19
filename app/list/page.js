import { ListBackground, ListItem } from "./list.style";
import DetailLink from "./DetailLink";
import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().sort({ _id: -1 }).toArray();

  const currentDate = new Date(); // 현재 날짜 가져옴

  return (
    <ListBackground>
      {result.map((post, i) => (
        <ListItem key={i}>
          <h4>{post.title}</h4>
          <p>{formatDate(currentDate)}</p>
          <Link href={"/detail/" + post._id}>
            <DetailLink />
          </Link>
        </ListItem>
      ))}
    </ListBackground>
  );
}

function formatDate(date) {
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
