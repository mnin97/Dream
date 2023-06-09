import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <p>{result.price}</p>
      <p>{result.tag}</p>
      <p>{result.summary}</p>
    </div>
  );
}
