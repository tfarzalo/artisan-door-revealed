-- Insert sample doors for each collection
-- Signature Doors
INSERT INTO doors (slug, name, description, collection_id, subcollection_id, material, size, glasstype, doortype, price) VALUES
('aberdeen-burlwood-e17', 'Aberdeen Burlwood E17', 'Premium Aberdeen door featuring rich Burlwood finish with elegant E17 glass design. Crafted for distinguished homes seeking timeless sophistication.', '29bfcd7c-6e23-4eee-a976-7fb3c3d510ff', '268b1b82-62eb-4ed3-9a19-13ff5ee95abb', 'Mahogany', '36" x 80"', 'E17 Pattern', 'Entry Door', 3249.00),
('alexandria-classic-6lt', 'Alexandria Classic 6LT', 'Classic Alexandria design with traditional 6-lite configuration. Features beveled glass and authentic colonial styling for heritage homes.', '29bfcd7c-6e23-4eee-a976-7fb3c3d510ff', 'c3e9fd0f-d5ea-47f9-b40e-aa0d2485f631', 'Cherry', '36" x 80"', '6-Lite Beveled', 'Entry Door', 2899.00),
('breezeport-contemporary', 'Breezeport 9', 'Contemporary Breezeport featuring 9-panel geometric glass design. Perfect for modern homes with coastal or contemporary architecture.', '29bfcd7c-6e23-4eee-a976-7fb3c3d510ff', 'edf3c2bb-59be-4d4f-920d-eae7cba92d3f', 'Fiberglass', '36" x 80"', '9-Panel Clear', 'Entry Door', 2749.00),

-- Modern Doors  
('luca-horizontal-4lt', 'Luca 4LT Horizontal', 'Modern Luca door with horizontal 4-lite configuration. Clean lines and contemporary glass arrangement for modern architectural styles.', '288565ad-3588-40d0-90ce-78a7e00ef785', '866128a9-0afd-4d94-96ed-45449eb0d13b', 'Steel', '36" x 80"', '4-Lite Horizontal', 'Entry Door', 2199.00),
('carlo-square-7lt', 'Carlo 7LT Square', 'Contemporary Carlo design featuring 7-lite square glass configuration. Geometric precision meets modern functionality.', '288565ad-3588-40d0-90ce-78a7e00ef785', 'f114e68b-6234-45b0-8d81-75f346495d2e', 'Aluminum', '36" x 80"', '7-Lite Square', 'Entry Door', 2399.00),
('milan-thin-lite', 'Milan Thin Lite', 'Sleek Milan door with ultra-thin lite configuration. Minimalist design maximizes glass area while maintaining structural integrity.', '288565ad-3588-40d0-90ce-78a7e00ef785', '664d3491-4166-4447-822d-c8f73b40a6b3', 'Steel', '36" x 80"', 'Thin Lite Clear', 'Entry Door', 2599.00);

-- Insert door features for Aberdeen
INSERT INTO door_features (door_id, feature_name, feature_value) VALUES
((SELECT id FROM doors WHERE slug = 'aberdeen-burlwood-e17'), 'Wood Species', 'Premium Mahogany'),
((SELECT id FROM doors WHERE slug = 'aberdeen-burlwood-e17'), 'Finish', 'Hand-Applied Burlwood Stain'),
((SELECT id FROM doors WHERE slug = 'aberdeen-burlwood-e17'), 'Glass Type', 'E17 Decorative Pattern'),
((SELECT id FROM doors WHERE slug = 'aberdeen-burlwood-e17'), 'Hardware', 'Antique Bronze Included'),
((SELECT id FROM doors WHERE slug = 'aberdeen-burlwood-e17'), 'Weatherstrip', 'Dual Compression Seal'),
((SELECT id FROM doors WHERE slug = 'aberdeen-burlwood-e17'), 'Threshold', 'Adjustable Oak Sill');

-- Insert door features for Alexandria
INSERT INTO door_features (door_id, feature_name, feature_value) VALUES
((SELECT id FROM doors WHERE slug = 'alexandria-classic-6lt'), 'Wood Species', 'Solid Cherry'),
((SELECT id FROM doors WHERE slug = 'alexandria-classic-6lt'), 'Glass Type', '6-Lite Beveled Glass'),
((SELECT id FROM doors WHERE slug = 'alexandria-classic-6lt'), 'Panel Design', 'Raised 2-Panel'),
((SELECT id FROM doors WHERE slug = 'alexandria-classic-6lt'), 'Mortise', 'Traditional Mortise & Tenon'),
((SELECT id FROM doors WHERE slug = 'alexandria-classic-6lt'), 'Weatherstrip', 'Triple Seal System'),
((SELECT id FROM doors WHERE slug = 'alexandria-classic-6lt'), 'Warranty', '10-Year Limited');

-- Insert door features for Luca
INSERT INTO door_features (door_id, feature_name, feature_value) VALUES
((SELECT id FROM doors WHERE slug = 'luca-horizontal-4lt'), 'Construction', 'Insulated Steel Core'),
((SELECT id FROM doors WHERE slug = 'luca-horizontal-4lt'), 'Glass Configuration', '4-Lite Horizontal Layout'),
((SELECT id FROM doors WHERE slug = 'luca-horizontal-4lt'), 'Frame Material', 'Reinforced Steel'),
((SELECT id FROM doors WHERE slug = 'luca-horizontal-4lt'), 'Energy Rating', 'ENERGY STAR Certified'),
((SELECT id FROM doors WHERE slug = 'luca-horizontal-4lt'), 'Security', 'Multi-Point Locking System'),
((SELECT id FROM doors WHERE slug = 'luca-horizontal-4lt'), 'Finish Options', '12 Standard Colors Available');