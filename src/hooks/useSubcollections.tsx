
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getSubcollections, updateSubcollectionModelPath, getSubcollection } from '../lib/api/subcollections';
import { toast } from '@/components/ui/use-toast';

export function useSubcollections() {
  return useQuery({
    queryKey: ['subcollections'],
    queryFn: getSubcollections,
  });
}

export function useSubcollection(id: string | undefined) {
  return useQuery({
    queryKey: ['subcollection', id],
    queryFn: () => getSubcollection(id!),
    enabled: !!id,
  });
}

export function useUpdateSubcollectionModelPath() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, modelPath }: { id: string, modelPath: string }) => 
      updateSubcollectionModelPath(id, modelPath),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['subcollection', data.id] });
      queryClient.invalidateQueries({ queryKey: ['subcollections'] });
      queryClient.invalidateQueries({ queryKey: ['subcollections', data.collection_id] });
      
      toast({
        title: "Model path updated",
        description: `The 3D model for ${data.name} has been updated.`
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Update failed",
        description: `Failed to update model path. ${error}`
      });
    }
  });
}
