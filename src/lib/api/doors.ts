
import { supabase } from '../supabase';

export async function getDoors() {
  const { data, error } = await supabase
    .from('doors')
    .select('*')
    .eq('isActive', true);

  if (error) {
    console.error('Error fetching doors:', error);
    throw error;
  }

  return data;
}

export async function getDoorBySlug(slug: string) {
  const { data, error } = await supabase
    .from('doors')
    .select(`
      *,
      collection:collection_id (id, name, slug),
      subcollection:subcollection_id (id, name, slug),
      style:style_id (id, name, slug)
    `)
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(`Error fetching door by slug (${slug}):`, error);
    throw error;
  }

  return data;
}

export async function getDoorImages(doorId: string) {
  const { data, error } = await supabase
    .from('door_images')
    .select('*')
    .eq('door_id', doorId)
    .order('display_order');

  if (error) {
    console.error(`Error fetching images for door (${doorId}):`, error);
    throw error;
  }

  return data;
}

export async function getDoorFeatures(doorId: string) {
  const { data, error } = await supabase
    .from('door_features')
    .select('*')
    .eq('door_id', doorId);

  if (error) {
    console.error(`Error fetching features for door (${doorId}):`, error);
    throw error;
  }

  return data;
}

export async function searchDoors(query: string) {
  const { data, error } = await supabase
    .from('doors')
    .select(`
      *,
      collection:collection_id (id, name, slug),
      subcollection:subcollection_id (id, name, slug)
    `)
    .eq('isActive', true)
    .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
    .limit(20);

  if (error) {
    console.error(`Error searching doors (${query}):`, error);
    throw error;
  }

  return data;
}

export async function filterDoors({
  collectionId,
  subcollectionId,
  styleId,
  material,
  doorType,
  glassType,
}: {
  collectionId?: string;
  subcollectionId?: string;
  styleId?: string;
  material?: string;
  doorType?: string;
  glassType?: string;
}) {
  let query = supabase
    .from('doors')
    .select(`
      *,
      collection:collection_id (id, name, slug),
      subcollection:subcollection_id (id, name, slug),
      style:style_id (id, name, slug)
    `)
    .eq('isActive', true);

  if (collectionId) {
    query = query.eq('collection_id', collectionId);
  }
  
  if (subcollectionId) {
    query = query.eq('subcollection_id', subcollectionId);
  }
  
  if (styleId) {
    query = query.eq('style_id', styleId);
  }
  
  if (material) {
    query = query.eq('material', material);
  }
  
  if (doorType) {
    query = query.eq('doorType', doorType);
  }
  
  if (glassType) {
    query = query.eq('glassType', glassType);
  }

  const { data, error } = await query;

  if (error) {
    console.error(`Error filtering doors:`, error);
    throw error;
  }

  return data;
}
