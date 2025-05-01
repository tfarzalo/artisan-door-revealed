
import { supabase } from '../supabase';

export async function getSubcollections() {
  const { data, error } = await supabase
    .from('subcollections')
    .select('*')
    .order('display_order');

  if (error) {
    console.error('Error fetching subcollections:', error);
    throw error;
  }

  return data;
}

export async function updateSubcollectionModelPath(id: string, modelPath: string) {
  const { data, error } = await supabase
    .from('subcollections')
    .update({ modelPath })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(`Error updating subcollection (${id}) model path:`, error);
    throw error;
  }

  return data;
}

export async function getSubcollection(id: string) {
  const { data, error } = await supabase
    .from('subcollections')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error fetching subcollection by ID (${id}):`, error);
    throw error;
  }

  return data;
}
