export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      collections: {
        Row: {
          created_at: string
          description: string | null
          display_order: number
          id: string
          modelpath: string
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          modelpath: string
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          modelpath?: string
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      door_features: {
        Row: {
          created_at: string
          door_id: string
          feature_name: string
          feature_value: string
          id: string
        }
        Insert: {
          created_at?: string
          door_id: string
          feature_name: string
          feature_value: string
          id?: string
        }
        Update: {
          created_at?: string
          door_id?: string
          feature_name?: string
          feature_value?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "door_features_door_id_fkey"
            columns: ["door_id"]
            isOneToOne: false
            referencedRelation: "doors"
            referencedColumns: ["id"]
          },
        ]
      }
      door_images: {
        Row: {
          alt_text: string | null
          created_at: string
          display_order: number
          door_id: string
          id: string
          image_url: string
        }
        Insert: {
          alt_text?: string | null
          created_at?: string
          display_order?: number
          door_id: string
          id?: string
          image_url: string
        }
        Update: {
          alt_text?: string | null
          created_at?: string
          display_order?: number
          door_id?: string
          id?: string
          image_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "door_images_door_id_fkey"
            columns: ["door_id"]
            isOneToOne: false
            referencedRelation: "doors"
            referencedColumns: ["id"]
          },
        ]
      }
      doors: {
        Row: {
          collection_id: string
          created_at: string
          description: string | null
          doortype: string | null
          features: Json | null
          glasstype: string | null
          height: number | null
          id: string
          isactive: boolean
          material: string | null
          modelpath: string | null
          name: string
          price: number | null
          size: string | null
          slug: string
          style_id: string | null
          subcollection_id: string
          thumbnailimage: string | null
          updated_at: string | null
          width: number | null
        }
        Insert: {
          collection_id: string
          created_at?: string
          description?: string | null
          doortype?: string | null
          features?: Json | null
          glasstype?: string | null
          height?: number | null
          id?: string
          isactive?: boolean
          material?: string | null
          modelpath?: string | null
          name: string
          price?: number | null
          size?: string | null
          slug: string
          style_id?: string | null
          subcollection_id: string
          thumbnailimage?: string | null
          updated_at?: string | null
          width?: number | null
        }
        Update: {
          collection_id?: string
          created_at?: string
          description?: string | null
          doortype?: string | null
          features?: Json | null
          glasstype?: string | null
          height?: number | null
          id?: string
          isactive?: boolean
          material?: string | null
          modelpath?: string | null
          name?: string
          price?: number | null
          size?: string | null
          slug?: string
          style_id?: string | null
          subcollection_id?: string
          thumbnailimage?: string | null
          updated_at?: string | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "doors_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "doors_style_id_fkey"
            columns: ["style_id"]
            isOneToOne: false
            referencedRelation: "styles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "doors_subcollection_id_fkey"
            columns: ["subcollection_id"]
            isOneToOne: false
            referencedRelation: "subcollections"
            referencedColumns: ["id"]
          },
        ]
      }
      styles: {
        Row: {
          created_at: string
          description: string | null
          icon: string
          id: string
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon: string
          id?: string
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string
          id?: string
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      subcollection_styles: {
        Row: {
          created_at: string
          id: string
          style_id: string
          subcollection_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          style_id: string
          subcollection_id: string
        }
        Update: {
          created_at?: string
          id?: string
          style_id?: string
          subcollection_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subcollection_styles_style_id_fkey"
            columns: ["style_id"]
            isOneToOne: false
            referencedRelation: "styles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subcollection_styles_subcollection_id_fkey"
            columns: ["subcollection_id"]
            isOneToOne: false
            referencedRelation: "subcollections"
            referencedColumns: ["id"]
          },
        ]
      }
      subcollections: {
        Row: {
          collection_id: string
          created_at: string
          description: string | null
          display_order: number
          id: string
          image: string | null
          modelpath: string | null
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          collection_id: string
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          image?: string | null
          modelpath?: string | null
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          collection_id?: string
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          image?: string | null
          modelpath?: string | null
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subcollections_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
