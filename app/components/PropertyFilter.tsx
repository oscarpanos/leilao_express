"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type ChangeEvent, useTransition } from "react";

interface State {
  state: string;
}
interface City {
  city: string;
}

interface Filters {
  state: string;
  city?: string;
}
export default function PropertyFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  const [filters, setFilters] = useState<Filters>({});
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/states")
      .then((res) => res.json())
      .then((data) => {
        setStates(data);
      });
  }, []);

  useEffect(() => {
    setCities([]);
    setSelectedCity("");
    fetch(`http://localhost:3000/api/${selectedState}/cities`)
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
      });
  }, [selectedState]);

  function go() {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set("state", selectedState);
    selectedCity !== "" ? updatedSearchParams.set("city", selectedCity) : null;
    router.push(`${pathname}?${updatedSearchParams.toString()}`);
  }

  const handleChange = async (event: ChangeEvent<HTMLSelectElement>) => {
    const eventName = event.target.name;
    const eventValue = event.target.value;
    eventName === "state"
      ? setSelectedState(eventValue)
      : eventName === "city"
        ? setSelectedCity(eventValue)
        : null;
  };

  return (
    <div className="mt-4 flex gap-4 rounded border p-2">
      <select name="state" onChange={handleChange}>
        {states.map(({ state }, i) => (
          <option key={i} value={state}>
            {state}
          </option>
        ))}
      </select>
      {selectedState && (
        <select name="city" onChange={handleChange}>
          {cities.map(({ city }, i) => (
            <option key={i} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}
      <div className="font-bold" onClick={go}>
        Filtrar
      </div>
    </div>
  );
}
