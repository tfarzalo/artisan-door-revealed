
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCollectionBySlug, useSubcollectionsByCollectionId } from "@/hooks/useCollections";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CollectionDetail = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
  
  const collection = collectionId || "";
  const { data: collectionData, isLoading: isCollectionLoading } = useCollectionBySlug(collection);
  const { data: subCollections, isLoading: isSubcollectionsLoading } = useSubcollectionsByCollectionId(collectionData?.id);

  const isLoading = isCollectionLoading || isSubcollectionsLoading;

  const getDoorIcon = (subcollectionSlug: string) => {
    return (
      <div className="relative w-20 h-40 bg-white border-2 border-gray-300 rounded-t-lg shadow-md">
        <div className="absolute right-2 top-1/2 w-2 h-5 bg-gray-800 rounded-full"></div>
        {/* Basic door pattern */}
        <div className="absolute inset-3 border border-gray-200 rounded-sm">
          <div className="absolute top-2 left-2 right-2 h-8 border border-gray-200 rounded-sm"></div>
          <div className="absolute bottom-2 left-2 right-2 h-8 border border-gray-200 rounded-sm"></div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-white">
      <main className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            {/* Breadcrumb Navigation */}
            <Breadcrumb className="mb-6 justify-center">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{collectionData?.name || "Collection"}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-5xl md:text-6xl mb-6 tracking-tight text-[#cb7524] font-semibold">
              {collectionData?.name || "Collection"}
            </h1>
            {collectionData?.description && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed px-[20px] py-0">
                {collectionData.description}
              </p>
            )}
          </div>

          
          {/* Subcollections Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Card key={i} className="border-gray-200">
                  <CardContent className="p-6">
                    <Skeleton className="h-64 w-full rounded-lg mb-6" />
                    <Skeleton className="h-6 w-32 mx-auto" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : subCollections && subCollections.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {subCollections.map((subCollection) => (
                <Link to={`/door/${subCollection.slug}`} key={subCollection.id}>
                  <Card className="group border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
                        <div className="transform group-hover:scale-105 transition-transform">
                          {getDoorIcon(subCollection.slug)}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-light text-gray-900 text-center mb-3">
                        {subCollection.name}
                      </h3>
                      {subCollection.description && (
                        <p className="text-sm text-gray-600 text-center leading-relaxed line-clamp-2">
                          {subCollection.description}
                        </p>
                      )}
                    </CardContent>
                    <CardFooter className="px-6 pb-6">
                      <Button 
                        variant="outline" 
                        className="w-full text-gray-900 border-gray-300 hover:bg-gray-50 group-hover:border-gray-400 transition-colors"
                      >
                        View Door Details
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-light text-gray-900 mb-4">No doors found</h3>
              <p className="text-gray-600">This collection doesn't have any door models yet.</p>
            </div>
          )}

          {/* Action Buttons */}
          {!isLoading && subCollections && (
            <div className="flex flex-wrap gap-4 justify-center mt-16 mb-8">
              <Button size="lg" className="px-8 py-6 text-lg font-medium bg-gray-900 hover:bg-gray-800 text-white">
                Find My Door
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-medium border-gray-300 text-gray-900 hover:bg-gray-50">
                <MapPin className="w-5 h-5 mr-2" />
                Find a Dealer
              </Button>
            </div>
          )}

          {/* Results Counter */}
          {!isLoading && subCollections && (
            <div className="text-center mt-12">
              <p className="text-gray-600">
                {subCollections.length} door subcollection{subCollections.length !== 1 ? 's' : ''} available
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CollectionDetail;
