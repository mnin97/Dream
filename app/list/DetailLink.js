"use client";

import { useRouter } from "next/navigation";
import { ButtonStyle } from "./list.style";

export default function DetailLink({ id }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/detail/${id}`);
  };

  return <ButtonStyle onClick={handleClick}>Detail</ButtonStyle>;
}
