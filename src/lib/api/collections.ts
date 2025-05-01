
import { supabase } from '../supabase';

export async function getCollections() {
  const { data, error } = await supabase
    .from('collections')
    .select('*')
    .order('display_order');

  if (error) {
    console.error('Error fetching collections:', error);
    throw error;
  }

  return data;
}

export async function getCollectionBySlug(slug: string) {
  const { data, error } = await supabase
    .from('collections')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(`Error fetching collection by slug (${slug}):`, error);
    throw error;
  }

  return data;
}

export async function getSubcollectionsByCollectionId(collectionId: string) {
  const { data, error } = await supabase
    .from('subcollections')
    .select('*')
    .eq('collection_id', collectionId)
    .order('display_order');

  if (error) {
    console.error(`Error fetching subcollections for collection (${collectionId}):`, error);
    throw error;
  }

  return data;
}

export async function getSubcollectionBySlug(slug: string) {
  const { data, error } = await supabase
    .from('subcollections')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(`Error fetching subcollection by slug (${slug}):`, error);
    throw error;
  }

  return data;
}
