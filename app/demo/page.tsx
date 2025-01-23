"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { action } from "./action";

const fetchServerAction = async () => {
  return action();
};
const fetchApiRoute = async () => {
  return fetch("/demo/api").then(async (res) => res.text()) as Promise<string>;
};

export default function Page() {
  const [data, setData] = useState<string[]>([]);
  return (
    <div className="m-auto flex max-w-xl flex-col gap-4 p-8">
      <Button
        onClick={async () => {
          setData([]);
          const data = await Promise.all([
            fetchApiRoute(),
            fetchApiRoute(),
            fetchApiRoute(),
          ]);
          setData(data);
        }}
      >
        Click me
      </Button>
      {data.map((d) => (
        <p key={d}>{d}</p>
      ))}
    </div>
  );
}
