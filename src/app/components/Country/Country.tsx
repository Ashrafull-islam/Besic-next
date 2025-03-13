import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
interface CountryProps {
  count: {
    name: { common: string };
    flags?: { svg?: string };
    capital?: string[];
    region: string;
    population: number;
    languages?: Record<string, string>;
  };
}
export default function Country({ count }:CountryProps) {
  const { name, flags, capital, region, population, languages } = count;
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all hover:scale-105 duration-300">
      {flags?.svg && (
  <Image className="w-full h-50 object-cover" src={flags.svg} alt={name.common} width={500} height={300} />
)}
        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-800">{name.common}</h2>
          <p className="text-gray-600"><span className="font-semibold">Capital:</span> {capital || 'N/A'}</p>
          <p className="text-gray-600"><span className="font-semibold">Region:</span> {region}</p>
          <p className="text-gray-600"><span className="font-semibold">Population:</span> {population.toLocaleString()}</p>
          <p className="text-gray-600">
            <span className="font-semibold">Languages:</span> {languages ? Object.values(languages).join(', ') : 'N/A'}
          </p>
          <Link href='' className="btn my-3">Show Details</Link>
        </div>
      </div>
    </div>
  )
}
