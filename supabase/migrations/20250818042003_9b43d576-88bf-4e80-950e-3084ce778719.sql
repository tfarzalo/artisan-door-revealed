-- Clear existing data
DELETE FROM public.subcollections;
DELETE FROM public.collections;

-- Create main collections organized by style categories
INSERT INTO public.collections (slug, name, description, modelPath, display_order) VALUES
('signature-doors', 'Signature Doors', 'Premium signature doors featuring classic and elegant designs', '/models/signature.glb', 1),
('traditional-doors', 'Traditional Doors', 'Timeless traditional door styles perfect for classic homes', '/models/traditional.glb', 2),
('modern-doors', 'Modern Doors', 'Contemporary and sleek door designs for modern architecture', '/models/modern.glb', 3),
('specialty-doors', 'Specialty Doors', 'Unique and specialized door designs', '/models/specialty.glb', 4);

-- Create subcollections for individual door models
INSERT INTO public.subcollections (collection_id, slug, name, description, display_order) VALUES
-- Signature Doors
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'aberdeen', 'Aberdeen', 'Aberdeen BUrlwood E17 elegant design', 1),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'alexandria-classic', 'Alexandria Classic', 'Alexandria 6LT classic design', 2),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'alexandria-studio', 'Alexandria Studio', 'Alexandria Leaded studio variant', 3),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'breezeport', 'Breezeport', 'Breezeport 9 contemporary design', 4),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'colonial', 'Colonial', 'Colonial E03 traditional styling', 5),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'keowee', 'Keowee', 'Keowee 6LT mountain-inspired design', 6),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'louisburg', 'Louisburg', 'Louisburg 4LT Southern charm', 7),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'oconee', 'Oconee', 'Oconee 6LT refined design', 8),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'pinehurst', 'Pinehurst', 'Pinehurst Solid Panel elegance', 9),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'tiffany', 'Tiffany', 'Tiffany 6LT art glass inspired', 10),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'trinity', 'Trinity', 'Trinity webcrop three-panel design', 11),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'tuscany', 'Tuscany', 'Tuscany 3LT Italian craftsmanship', 12),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'wakefield', 'Wakefield', 'Wakefield Burlwood premium finish', 13),

-- Traditional Doors
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'belle-meade', 'Belle Meade', 'BelleMeade longE-09 Southern mansion style', 1),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'brentwood', 'Brentwood', 'Brentwood 4LT traditional design', 2),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'briarcliff', 'Briarcliff', 'Sophisticated traditional styling', 3),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'decatur-hendersonville', 'Decatur Hendersonville', 'Decatur E01SL mountain traditional', 4),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'hampshire', 'Hampshire', 'English countryside inspiration', 5),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'kenmure', 'Kenmure', 'Traditional speakeasy style', 6),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'lakewood', 'Lakewood', 'Lakeside cabin aesthetic', 7),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'linville', 'Linville', 'Mountain lodge styling', 8),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'porthole', 'Porthole', 'PortHole FIX wider nautical design', 9),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'seville', 'Seville', 'Spanish colonial influence', 10),

-- Modern Doors
((SELECT id FROM collections WHERE slug = 'modern-doors'), 'carlo', 'Carlo', 'Carlo 7LT Square modern design', 1),
((SELECT id FROM collections WHERE slug = 'modern-doors'), 'flores', 'Flores', 'Contemporary floral-inspired patterns', 2),
((SELECT id FROM collections WHERE slug = 'modern-doors'), 'luca', 'Luca', 'Luca 4LT Horizontal configuration', 3),
((SELECT id FROM collections WHERE slug = 'modern-doors'), 'madison', 'Madison', 'Madison Web crop modern styling', 4),
((SELECT id FROM collections WHERE slug = 'modern-doors'), 'meadowlands', 'Meadowlands', 'Meadowlands new prairie style', 5),
((SELECT id FROM collections WHERE slug = 'modern-doors'), 'milan', 'Milan', 'Thin lite modern elegance', 6),
((SELECT id FROM collections WHERE slug = 'modern-doors'), 'urban', 'Urban', 'City loft inspired design', 7),

-- Specialty Doors
((SELECT id FROM collections WHERE slug = 'specialty-doors'), 'bifold', 'Bifold', 'Space-saving bifold door system', 1),
((SELECT id FROM collections WHERE slug = 'specialty-doors'), 'dutch', 'Dutch', 'Classic Dutch door design', 2),
((SELECT id FROM collections WHERE slug = 'specialty-doors'), 'port', 'Port (Impact Rated)', 'Hurricane impact-rated coastal door', 3),
((SELECT id FROM collections WHERE slug = 'specialty-doors'), 'luxe-pivot', 'LUXE Pivot Doors', 'Premium pivot door system', 4),
((SELECT id FROM collections WHERE slug = 'specialty-doors'), 'slimline', 'Slimline Collection', 'Sleek slimline door designs', 5);