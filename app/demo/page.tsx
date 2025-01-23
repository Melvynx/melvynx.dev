"use client";

import { useState } from "react";
import { action } from "./action";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      <button
        className="bg-black text-white rounded-md px-4 py-2"
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
      </button>
      {data.map((d) => (
        <p key={d}>{d}</p>
      ))}
    </div>
  );
}
