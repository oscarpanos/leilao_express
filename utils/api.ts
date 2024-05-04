import prisma from "@/prisma/db/db";

export async function getPropertyStateOptions() {
  const states = await prisma.property.findMany({
    select: { state: true },
    distinct: ["state"],
  });
  return states;
}

export async function getPropertyCityOptions(selectedState: string) {
  const cities = await prisma.property.findMany({
    select: { city: true },
    where: { state: selectedState },
    distinct: ["city"],
  });
  return cities;
}

export async function getPropertyDistrictOptions(selectedCity: string) {
  const districts = await prisma.property.findMany({
    select: { district: true },
    where: { city: selectedCity },
    distinct: ["district"],
  });
  return districts;
}

export async function getPropertyModalitiesOptions() {
  const modalities = await prisma.property.findMany({
    select: { modality: true },
    distinct: ["modality"],
  });
  return modalities;
}

export async function getPropertyTypeOptions() {
  const types = await prisma.property.findMany({
    select: { type: true },
    distinct: ["type"],
  });
  return types;
}
