
import { useQuery } from '@tanstack/react-query';
import { 
  getDoors, 
  getDoorBySlug, 
  getDoorImages, 
  getDoorFeatures,
  searchDoors,
  filterDoors
} from '../lib/api/doors';

export function useDoors() {
  return useQuery({
    queryKey: ['doors'],
    queryFn: getDoors,
  });
}

export function useDoorBySlug(slug: string) {
  return useQuery({
    queryKey: ['door', slug],
    queryFn: () => getDoorBySlug(slug),
    enabled: !!slug,
  });
}

export function useDoorImages(doorId: string | undefined) {
  return useQuery({
    queryKey: ['door', doorId, 'images'],
    queryFn: () => getDoorImages(doorId!),
    enabled: !!doorId,
  });
}

export function useDoorFeatures(doorId: string | undefined) {
  return useQuery({
    queryKey: ['door', doorId, 'features'],
    queryFn: () => getDoorFeatures(doorId!),
    enabled: !!doorId,
  });
}

export function useSearchDoors(query: string) {
  return useQuery({
    queryKey: ['doors', 'search', query],
    queryFn: () => searchDoors(query),
    enabled: query.length > 0,
  });
}

export function useFilterDoors(filters: {
  collectionId?: string;
  subcollectionId?: string;
  styleId?: string;
  material?: string;
  doorType?: string;
  glassType?: string;
}) {
  const filterKeys = Object.entries(filters)
    .filter(([_, value]) => !!value)
    .map(([key, value]) => `${key}:${value}`);

  return useQuery({
    queryKey: ['doors', 'filter', ...filterKeys],
    queryFn: () => filterDoors(filters),
    enabled: Object.values(filters).some(value => !!value),
  });
}
