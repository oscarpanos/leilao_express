"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type ChangeEvent } from "react";

interface State {
  state: string;
}
interface City {
  city: string;
}

interface Modality {
  modality: string;
}

export default function PropertyFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedModality, setSelectedModality] = useState("");
  const [selectedOrderBy, setSelectedOrderBy] = useState("");
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [modalities, setModalities] = useState<Modality[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/modalities")
      .then((res) => res.json())
      .then((data) => {
        setModalities(data);
      });
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

  useEffect(() => {
    setModalities([]);
    setSelectedModality("");
    fetch(
      `http://localhost:3000/api/${selectedState}/${selectedCity}/modalities`
    )
      .then((res) => res.json())
      .then((data) => {
        setModalities(data);
      });
  }, [selectedCity]);

  function filter() {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.delete("state");
    updatedSearchParams.delete("city");
    updatedSearchParams.delete("modality");
    updatedSearchParams.delete("orderBy");
    if (selectedState !== "" && selectedState !== "all") {
      updatedSearchParams.set("state", selectedState);
    }
    if (selectedCity !== "" && selectedCity !== "all") {
      updatedSearchParams.set("city", selectedCity);
    }
    if (selectedModality && selectedModality !== "all") {
      updatedSearchParams.set("modality", selectedModality);
    }
    if (selectedOrderBy && selectedOrderBy !== "order") {
      updatedSearchParams.set("orderBy", selectedOrderBy);
    }
    router.push(`${pathname}?${updatedSearchParams.toString()}`);
  }

  const handleChange = async (event: ChangeEvent<HTMLSelectElement>) => {
    const eventName = event.target.name;
    const eventValue = event.target.value;
    eventName === "state"
      ? setSelectedState(eventValue)
      : eventName === "city"
        ? setSelectedCity(eventValue)
        : eventName === "modality"
          ? setSelectedModality(eventValue)
          : eventName === "orderBy"
            ? setSelectedOrderBy(eventValue)
            : null;
  };

  return (
    <div className="mt-4 flex gap-4 rounded bg-orange-400 p-2">
      <select
        className="rounded border bg-slate-100"
        name="state"
        onChange={handleChange}
      >
        <option value="all">Todos os estados</option>
        {states.map(({ state }, i) => (
          <option key={i} value={state}>
            {state}
          </option>
        ))}
      </select>
      {selectedState && (
        <select
          className="rounded border bg-slate-100"
          name="city"
          onChange={handleChange}
        >
          <option value="all">Todas as cidades</option>
          {cities.map(({ city }, i) => (
            <option key={i} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}

      <select
        className="rounded border bg-slate-100"
        name="modality"
        onChange={handleChange}
      >
        <option value="all">Todas as modalidades</option>
        {modalities.map(({ modality }, i) => (
          <option key={i} value={modality}>
            {modality}
          </option>
        ))}
      </select>

      <select
        className="rounded border bg-slate-100"
        name="orderBy"
        onChange={handleChange}
      >
        <option value="order">Ordenar por</option>
        <option value="desc">Maior preço</option>
        <option value="asc">Menor preço</option>
      </select>

      <div
        className=" cursor-pointer rounded bg-slate-700 px-2 py-1 font-bold text-white transition-all hover:bg-slate-900"
        onClick={filter}
      >
        Filtrar
      </div>
    </div>
  );
}
