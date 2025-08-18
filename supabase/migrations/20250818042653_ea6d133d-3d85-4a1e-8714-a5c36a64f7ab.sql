-- Clear existing data
DELETE FROM public.subcollections;
DELETE FROM public.collections;

-- Create collections based on the new structure
INSERT INTO public.collections (slug, name, description, modelPath, display_order) VALUES
('signature-doors', 'Signature Doors', 'Premium signature doors featuring classic and elegant designs', '/models/signature.glb', 1),
('traditional-doors', 'Traditional Doors', 'Timeless traditional door styles perfect for classic homes', '/models/traditional.glb', 2),
('modern-doors', 'Modern Doors', 'Contemporary and sleek door designs for modern architecture', '/models/modern.glb', 3),
('slimline-doors', 'Slimline Doors', 'Sleek slimline door collection with narrow profiles', '/models/slimline.glb', 4),
('luxe-pivot-doors', 'LUXE Pivot Doors', 'Premium pivot door systems for grand entrances', '/models/pivot.glb', 5),
('hurricane-doors', 'Hurricane Doors', 'Impact-rated doors designed for coastal and hurricane zones', '/models/hurricane.glb', 6),
('interior-doors', 'Interior Doors', 'Interior door solutions for residential applications', '/models/interior.glb', 7),
('discontinued-clearance', 'Discontinued & Clearance Doors', 'Special pricing on discontinued models and clearance items', '/models/clearance.glb', 8);

-- Create subcollections organized by the new categories
INSERT INTO public.subcollections (collection_id, slug, name, description, display_order) VALUES
-- Signature Doors (Premium/flagship models)
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'aberdeen', 'Aberdeen', 'Aberdeen BUrlwood E17 elegant signature design', 1),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'alexandria-classic', 'Alexandria Classic', 'Alexandria 6LT classic signature design', 2),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'alexandria-studio', 'Alexandria Studio', 'Alexandria Leaded studio signature variant', 3),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'breezeport', 'Breezeport', 'Breezeport 9 contemporary signature design', 4),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'colonial', 'Colonial', 'Colonial E03 signature traditional styling', 5),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'keowee', 'Keowee', 'Keowee 6LT signature mountain-inspired design', 6),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'louisburg', 'Louisburg', 'Louisburg 4LT signature Southern charm', 7),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'oconee', 'Oconee', 'Oconee 6LT signature refined design', 8),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'pinehurst', 'Pinehurst', 'Pinehurst Solid Panel signature elegance', 9),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'tiffany', 'Tiffany', 'Tiffany 6LT signature art glass inspired', 10),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'trinity', 'Trinity', 'Trinity webcrop signature three-panel design', 11),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'tuscany', 'Tuscany', 'Tuscany 3LT signature Italian craftsmanship', 12),
((SELECT id FROM collections WHERE slug = 'signature-doors'), 'wakefield', 'Wakefield', 'Wakefield Burlwood signature premium finish', 13),

-- Traditional Doors (Classic traditional styles)
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'belle-meade', 'Belle Meade', 'BelleMeade longE-09 Southern mansion style', 1),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'brentwood', 'Brentwood', 'Brentwood 4LT traditional design', 2),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'briarcliff', 'Briarcliff', 'Sophisticated traditional styling', 3),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'decatur-hendersonville', 'Decatur Hendersonville', 'Decatur E01SL mountain traditional', 4),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'hampshire', 'Hampshire', 'English countryside traditional inspiration', 5),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'kenmure', 'Kenmure', 'Traditional speakeasy style', 6),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'lakewood', 'Lakewood', 'Traditional lakeside cabin aesthetic', 7),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'linville', 'Linville', 'Traditional mountain lodge styling', 8),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'porthole', 'Porthole', 'PortHole FIX wider traditional nautical design', 9),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'seville', 'Seville', 'Traditional Spanish colonial influence', 10),
((SELECT id FROM collections WHERE slug = 'traditional-doors'), 'dutch', 'Dutch', 'Classic traditional Dutch door design', 11),

-- Modern Doors (Contemporary designs)
((SELECT id FROM collections WHERE slug = 'modern-doors'), 'carlo', 'Carlo', 'Carlo 7LT Square modern design', 1),
((SELECT id FROM collections WHERE slug = 'modern-doors'), 'flores', 'Flores', 'Contemporary floral-inspired patterns', 2),
((SELECT id FROM collections WHERE slug = 'modern-doors'), 'luca', 'Luca', 'Luca 4LT Horizontal modern configuration', 3),
((SELECT id FROM collections WHERE slug = 'modern-doors'), 'madison', 'Madison', 'Madison Web crop modern styling', 4),
((SELECT id FROM collections WHERE slug = 'modern-doors'), 'meadowlands', 'Meadowlands', 'Meadowlands new modern prairie style', 5),
((SELECT id FROM collections WHERE slug = 'modern-doors'), 'milan', 'Milan', 'Modern thin lite elegance', 6),
((SELECT id FROM collections WHERE slug = 'modern-doors'), 'urban', 'Urban', 'Modern city loft inspired design', 7),

-- Slimline Doors
((SELECT id FROM collections WHERE slug = 'slimline-doors'), 'slimline-collection', 'Slimline Collection', 'Sleek slimline door designs with narrow profiles', 1),

-- LUXE Pivot Doors
((SELECT id FROM collections WHERE slug = 'luxe-pivot-doors'), 'luxe-pivot', 'LUXE Pivot Doors', 'Premium pivot door system for grand entrances', 1),

-- Hurricane Doors (Impact-rated)
((SELECT id FROM collections WHERE slug = 'hurricane-doors'), 'port', 'Port (Impact Rated)', 'Hurricane impact-rated coastal door system', 1),

-- Interior Doors
((SELECT id FROM collections WHERE slug = 'interior-doors'), 'bifold', 'Bifold', 'Space-saving bifold interior door system', 1);