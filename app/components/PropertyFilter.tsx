"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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
    fetch("api/states")
      .then((res) => res.json())
      .then((data) => {
        setStates(data);
      });
  }, []);

  useEffect(() => {
    setCities([]);
    setSelectedCity("");
    fetch(`api/${selectedState}/cities`)
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
      });
  }, [selectedState]);

  useEffect(() => {
    setModalities([]);
    setSelectedModality("");
    fetch(`api/${selectedState}/${selectedCity}/modalities`)
      .then((res) => res.json())
      .then((data) => {
        setModalities(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (selectedOrderBy) {
      updatedSearchParams.set("orderBy", selectedOrderBy);
    }
    console.log(updatedSearchParams);
    router.push(`${pathname}?${updatedSearchParams.toString()}`);
  }

  const handleStateChange = (value: string) => {
    setSelectedState(value);
  };
  const handleCityChange = (value: string) => {
    setSelectedCity(value);
  };
  const handleModalityChange = (value: string) => {
    setSelectedModality(value);
  };
  const handleOrderByChange = (value: string) => {
    setSelectedOrderBy(value);
  };

  return (
    <Sheet>
      <SheetTrigger className="float-left ml-auto rounded bg-slate-900 px-4 py-2 text-white">
        Filtrar
      </SheetTrigger>
      <SheetContent className="mr-10 flex flex-col gap-4 p-12 md:mr-0">
        <SheetHeader>
          <SheetTitle>Filtros</SheetTitle>
          <SheetDescription>
            Selecionando filtros, você irá direcionar a sua busca.
          </SheetDescription>
        </SheetHeader>
        <Select name="state" onValueChange={handleStateChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Estados" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os estados</SelectItem>
            {states.map(({ state }, i) => (
              <SelectItem key={i} value={state}>
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select name="city" onValueChange={handleCityChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Cidades" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos as cidades</SelectItem>
            {cities.map(({ city }, i) => (
              <SelectItem key={i} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select name="modality" onValueChange={handleModalityChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Modalidades" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as modalidades</SelectItem>
            {modalities.map(({ modality }, i) => (
              <SelectItem key={i} value={modality}>
                {modality}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select name="orderBy" onValueChange={handleOrderByChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Ordenar por valor" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="desc">Maior preço</SelectItem>
            <SelectItem value="asc">Menor preço</SelectItem>
          </SelectContent>
        </Select>
        <SheetClose asChild>
          <Button onClick={filter}>Aplicar filtros</Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
