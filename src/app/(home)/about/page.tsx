
'use client';

import Country from "@/app/components/Country/Country";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Failed to load data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center"><span className="loading loading-spinner text-error"></span></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="grid grid-cols-4 gap-3 w-10/12 mx-auto">
      {data.map((count) => (
        <Country key={count.cca3} count={count} />  // Pass the `count` prop correctly
      ))}
      </div>
    </>
  );
}
