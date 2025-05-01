
import { useQuery } from '@tanstack/react-query';
import { getStyles, getStyleBySlug, getStylesForSubcollection } from '../lib/api/styles';

export function useStyles() {
  return useQuery({
    queryKey: ['styles'],
    queryFn: getStyles,
  });
}

export function useStyleBySlug(slug: string) {
  return useQuery({
    queryKey: ['style', slug],
    queryFn: () => getStyleBySlug(slug),
    enabled: !!slug,
  });
}

export function useStylesForSubcollection(subcollectionId: string | undefined) {
  return useQuery({
    queryKey: ['styles', 'subcollection', subcollectionId],
    queryFn: () => getStylesForSubcollection(subcollectionId!),
    enabled: !!subcollectionId,
  });
}
