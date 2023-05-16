import { connectDB } from "@/util/database";
import { ListBackground, ListItem } from "./list.style";
import DetailLink from "./DetailLink";

export default async function List() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <ListBackground>
      {result.map((a, i) => (
        <ListItem>
          <h4>{result[i].title}</h4>
          <p>1월 1일</p>
          <DetailLink id={result[i]._id}></DetailLink>
        </ListItem>
      ))}
    </ListBackground>
  );
}
