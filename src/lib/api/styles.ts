
import { supabase } from '../supabase';

export async function getStyles() {
  const { data, error } = await supabase
    .from('styles')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching styles:', error);
    throw error;
  }

  return data;
}

export async function getStyleBySlug(slug: string) {
  const { data, error } = await supabase
    .from('styles')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(`Error fetching style by slug (${slug}):`, error);
    throw error;
  }

  return data;
}

export async function getStylesForSubcollection(subcollectionId: string) {
  const { data, error } = await supabase
    .from('subcollection_styles')
    .select(`
      style_id,
      style:style_id (*)
    `)
    .eq('subcollection_id', subcollectionId);

  if (error) {
    console.error(`Error fetching styles for subcollection (${subcollectionId}):`, error);
    throw error;
  }

  // Transform the data to return just the styles
  return data.map(item => item.style);
}
