
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      collections: {
        Row: {
          id: string
          slug: string
          name: string
          description: string | null
          modelPath: string
          display_order: number
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          slug: string
          name: string
          description?: string | null
          modelPath: string
          display_order?: number
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          slug?: string
          name?: string
          description?: string | null
          modelPath?: string
          display_order?: number
          created_at?: string
          updated_at?: string | null
        }
      }
      subcollections: {
        Row: {
          id: string
          collection_id: string
          slug: string
          name: string
          description: string | null
          image: string | null
          modelPath: string | null
          display_order: number
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          collection_id: string
          slug: string
          name: string
          description?: string | null
          image?: string | null
          modelPath?: string | null
          display_order?: number
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          collection_id?: string
          slug?: string
          name?: string
          description?: string | null
          image?: string | null
          modelPath?: string | null
          display_order?: number
          created_at?: string
          updated_at?: string | null
        }
      }
      styles: {
        Row: {
          id: string
          slug: string
          name: string
          icon: string
          description: string | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          slug: string
          name: string
          icon: string
          description?: string | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          slug?: string
          name?: string
          icon?: string
          description?: string | null
          created_at?: string
          updated_at?: string | null
        }
      }
      subcollection_styles: {
        Row: {
          id: string
          subcollection_id: string
          style_id: string
          created_at: string
        }
        Insert: {
          id?: string
          subcollection_id: string
          style_id: string
          created_at?: string
        }
        Update: {
          id?: string
          subcollection_id?: string
          style_id?: string
          created_at?: string
        }
      }
      doors: {
        Row: {
          id: string
          slug: string
          name: string
          collection_id: string
          subcollection_id: string
          style_id: string | null
          description: string | null
          size: string | null
          width: number | null
          height: number | null
          material: string | null
          glassType: string | null
          doorType: string | null
          modelPath: string | null
          thumbnailImage: string | null
          price: number | null
          isActive: boolean
          features: Json | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          slug: string
          name: string
          collection_id: string
          subcollection_id: string
          style_id?: string | null
          description?: string | null
          size?: string | null
          width?: number | null
          height?: number | null
          material?: string | null
          glassType?: string | null
          doorType?: string | null
          modelPath?: string | null
          thumbnailImage?: string | null
          price?: number | null
          isActive?: boolean
          features?: Json | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          slug?: string
          name?: string
          collection_id?: string
          subcollection_id?: string
          style_id?: string | null
          description?: string | null
          size?: string | null
          width?: number | null
          height?: number | null
          material?: string | null
          glassType?: string | null
          doorType?: string | null
          modelPath?: string | null
          thumbnailImage?: string | null
          price?: number | null
          isActive?: boolean
          features?: Json | null
          created_at?: string
          updated_at?: string | null
        }
      }
      door_images: {
        Row: {
          id: string
          door_id: string
          image_url: string
          alt_text: string | null
          display_order: number
          created_at: string
        }
        Insert: {
          id?: string
          door_id: string
          image_url: string
          alt_text?: string | null
          display_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          door_id?: string
          image_url?: string
          alt_text?: string | null
          display_order?: number
          created_at?: string
        }
      }
      door_features: {
        Row: {
          id: string
          door_id: string
          feature_name: string
          feature_value: string
          created_at: string
        }
        Insert: {
          id?: string
          door_id: string
          feature_name: string
          feature_value: string
          created_at?: string
        }
        Update: {
          id?: string
          door_id?: string
          feature_name?: string
          feature_value?: string
          created_at?: string
        }
      }
    }
  }
}

