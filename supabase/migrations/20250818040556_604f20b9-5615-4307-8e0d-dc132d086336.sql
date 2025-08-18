-- Create collections with real DSA door collections
INSERT INTO public.collections (slug, name, description, modelPath, display_order) VALUES
('signature', 'Signature Collection', 'Our premium signature doors featuring classic and elegant designs', '/models/signature.glb', 1),
('traditional', 'Traditional Collection', 'Timeless traditional door styles perfect for classic homes', '/models/traditional.glb', 2),
('modern', 'Modern Collection', 'Contemporary and sleek door designs for modern architecture', '/models/modern.glb', 3),
('coastal', 'Coastal Collection', 'Impact-rated doors designed for coastal environments', '/models/coastal.glb', 4),
('wynstellar', 'Wynstellar Collection', 'Innovative and unique door designs', '/models/wynstellar.glb', 5);

-- Create subcollections for each main collection
INSERT INTO public.subcollections (collection_id, slug, name, description, display_order) VALUES
-- Signature Collection doors
((SELECT id FROM collections WHERE slug = 'signature'), 'aberdeen', 'Aberdeen', 'Elegant signature door with premium finishing', 1),
((SELECT id FROM collections WHERE slug = 'signature'), 'alexandria-classic', 'Alexandria Classic', 'Classic design with sophisticated glass options', 2),
((SELECT id FROM collections WHERE slug = 'signature'), 'alexandria-studio', 'Alexandria Studio', 'Studio variant with leaded glass details', 3),
((SELECT id FROM collections WHERE slug = 'signature'), 'breezeport', 'Breezeport', 'Contemporary signature door with clean lines', 4),
((SELECT id FROM collections WHERE slug = 'signature'), 'colonial', 'Colonial', 'Traditional colonial styling', 5),
((SELECT id FROM collections WHERE slug = 'signature'), 'dutch', 'Dutch', 'Classic Dutch door design', 6),
((SELECT id FROM collections WHERE slug = 'signature'), 'keowee', 'Keowee', 'Mountain-inspired design', 7),
((SELECT id FROM collections WHERE slug = 'signature'), 'louisburg', 'Louisburg', 'Southern charm meets modern craftsmanship', 8),
((SELECT id FROM collections WHERE slug = 'signature'), 'oconee', 'Oconee', 'Refined design with multiple glass options', 9),
((SELECT id FROM collections WHERE slug = 'signature'), 'pinehurst', 'Pinehurst', 'Golf course inspired elegance', 10),
((SELECT id FROM collections WHERE slug = 'signature'), 'tiffany', 'Tiffany', 'Art glass inspired design', 11),
((SELECT id FROM collections WHERE slug = 'signature'), 'trinity', 'Trinity', 'Three-panel glass configuration', 12),
((SELECT id FROM collections WHERE slug = 'signature'), 'tuscany', 'Tuscany', 'Italian-inspired craftsmanship', 13),
((SELECT id FROM collections WHERE slug = 'signature'), 'wakefield', 'Wakefield', 'Premium wood grain finishes', 14),

-- Traditional Collection doors
((SELECT id FROM collections WHERE slug = 'traditional'), 'belle-meade', 'Belle Meade', 'Classic Southern mansion style', 1),
((SELECT id FROM collections WHERE slug = 'traditional'), 'brentwood', 'Brentwood', 'Traditional four-lite design', 2),
((SELECT id FROM collections WHERE slug = 'traditional'), 'briarcliff', 'Briarcliff', 'Sophisticated traditional styling', 3),
((SELECT id FROM collections WHERE slug = 'traditional'), 'decatur-hendersonville', 'Decatur Hendersonville', 'Mountain traditional design', 4),
((SELECT id FROM collections WHERE slug = 'traditional'), 'hampshire', 'Hampshire', 'English countryside inspiration', 5),
((SELECT id FROM collections WHERE slug = 'traditional'), 'kenmure', 'Kenmure', 'Speakeasy-style traditional door', 6),
((SELECT id FROM collections WHERE slug = 'traditional'), 'lakewood', 'Lakewood', 'Lakeside cabin aesthetic', 7),
((SELECT id FROM collections WHERE slug = 'traditional'), 'linville', 'Linville', 'Mountain lodge styling', 8),
((SELECT id FROM collections WHERE slug = 'traditional'), 'madison', 'Madison', 'Presidential mansion inspired', 9),
((SELECT id FROM collections WHERE slug = 'traditional'), 'porthole', 'Porthole', 'Nautical-inspired round glass', 10),
((SELECT id FROM collections WHERE slug = 'traditional'), 'seville', 'Seville', 'Spanish colonial influence', 11),

-- Modern Collection doors
((SELECT id FROM collections WHERE slug = 'modern'), 'carlo', 'Carlo', 'Seven-lite square modern design', 1),
((SELECT id FROM collections WHERE slug = 'modern'), 'flores', 'Flores', 'Contemporary floral-inspired patterns', 2),
((SELECT id FROM collections WHERE slug = 'modern'), 'luca', 'Luca', 'Horizontal lite configuration', 3),
((SELECT id FROM collections WHERE slug = 'modern'), 'meadowlands', 'Meadowlands', 'Modern prairie style', 4),
((SELECT id FROM collections WHERE slug = 'modern'), 'milan', 'Milan', 'Thin lite modern elegance', 5),

-- Coastal Collection doors
((SELECT id FROM collections WHERE slug = 'coastal'), 'port', 'Port (Impact Rated)', 'Hurricane impact-rated coastal door', 1),

-- Wynstellar Collection doors
((SELECT id FROM collections WHERE slug = 'wynstellar'), 'bifold', 'Bifold', 'Space-saving bifold door system', 1),
((SELECT id FROM collections WHERE slug = 'wynstellar'), 'urban', 'Urban', 'City loft inspired design', 2);