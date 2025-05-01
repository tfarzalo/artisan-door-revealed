
import { useQuery } from '@tanstack/react-query';
import { getCollections, getCollectionBySlug, getSubcollectionsByCollectionId, getSubcollectionBySlug } from '../lib/api/collections';

export function useCollections() {
  return useQuery({
    queryKey: ['collections'],
    queryFn: getCollections,
  });
}

export function useCollectionBySlug(slug: string) {
  return useQuery({
    queryKey: ['collection', slug],
    queryFn: () => getCollectionBySlug(slug),
    enabled: !!slug,
  });
}

export function useSubcollectionsByCollectionId(collectionId: string | undefined) {
  return useQuery({
    queryKey: ['subcollections', collectionId],
    queryFn: () => getSubcollectionsByCollectionId(collectionId!),
    enabled: !!collectionId,
  });
}

export function useSubcollectionBySlug(slug: string) {
  return useQuery({
    queryKey: ['subcollection', slug],
    queryFn: () => getSubcollectionBySlug(slug),
    enabled: !!slug,
  });
}
