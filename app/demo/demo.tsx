import { useState } from "react";
import { action } from "./action";

const fetchServerAction = async () => {
  return action();
};

const fetchApiRoute = async () => {
  return fetch("/demo/api").then(async (res) => res.text()) as Promise<string>;
};

export function Demo() {
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
        Call API Route
      </button>
      <button
        className="bg-black text-white rounded-md px-4 py-2"
        onClick={async () => {
          setData([]);
          const data = await Promise.all([
            fetchServerAction(),
            fetchServerAction(),
            fetchServerAction(),
          ]);
          setData(data);
        }}
      >
        Call Server Action
      </button>

      {data.map((d) => (
        <p key={d}>{d}</p>
      ))}
    </div>
  );
}
