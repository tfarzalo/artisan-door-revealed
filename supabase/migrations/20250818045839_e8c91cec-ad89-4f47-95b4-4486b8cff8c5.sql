-- Clear existing door data and rebuild with comprehensive specifications
DELETE FROM door_features;
DELETE FROM door_images;
DELETE FROM doors;

-- Insert comprehensive door data for Signature Collection
INSERT INTO doors (slug, name, description, collection_id, subcollection_id, material, size, glasstype, doortype, price, width, height) VALUES
-- Aberdeen Collection
('aberdeen-burlwood-e17', 'Aberdeen Burlwood E17', 'Premium Aberdeen door featuring rich Burlwood finish with elegant E17 glass design. Hand-stained mahogany construction with decorative glass panel creates a distinguished entrance statement.', '29bfcd7c-6e23-4eee-a976-7fb3c3d510ff', '268b1b82-62eb-4ed3-9a19-13ff5ee95abb', 'Mahogany', '36" x 80"', 'E17 Pattern', 'Entry Door', 3249.00, 36, 80),
('aberdeen-clear-glass', 'Aberdeen Clear Glass', 'Aberdeen door with clear glass insert, showcasing the natural beauty of mahogany grain with maximum light transmission. Perfect for traditional homes seeking classic elegance.', '29bfcd7c-6e23-4eee-a976-7fb3c3d510ff', '268b1b82-62eb-4ed3-9a19-13ff5ee95abb', 'Mahogany', '36" x 80"', 'Clear Glass', 'Entry Door', 2899.00, 36, 80),
('aberdeen-privacy-glass', 'Aberdeen Privacy Glass', 'Aberdeen door featuring privacy glass for homes requiring light while maintaining discretion. Rich mahogany construction with frosted glass panel.', '29bfcd7c-6e23-4eee-a976-7fb3c3d510ff', '268b1b82-62eb-4ed3-9a19-13ff5ee95abb', 'Mahogany', '36" x 80"', 'Privacy Glass', 'Entry Door', 3049.00, 36, 80),

-- Alexandria Classic Collection
('alexandria-classic-6lt', 'Alexandria Classic 6LT', 'Traditional Alexandria design with authentic 6-lite beveled glass configuration. Cherry wood construction features raised panels and colonial-inspired styling perfect for heritage homes.', '29bfcd7c-6e23-4eee-a976-7fb3c3d510ff', 'c3e9fd0f-d5ea-47f9-b40e-aa0d2485f631', 'Cherry', '36" x 80"', '6-Lite Beveled', 'Entry Door', 2899.00, 36, 80),
('alexandria-classic-4lt', 'Alexandria Classic 4LT', 'Alexandria with 4-lite configuration offering larger glass panels while maintaining classic proportions. Cherry construction with traditional mortise and tenon joinery.', '29bfcd7c-6e23-4eee-a976-7fb3c3d510ff', 'c3e9fd0f-d5ea-47f9-b40e-aa0d2485f631', 'Cherry', '36" x 80"', '4-Lite Beveled', 'Entry Door', 2749.00, 36, 80),
('alexandria-classic-2lt', 'Alexandria Classic 2LT', 'Simple elegance with 2-lite design maximizing light while preserving traditional character. Cherry wood with raised panel lower section.', '29bfcd7c-6e23-4eee-a976-7fb3c3d510ff', 'c3e9fd0f-d5ea-47f9-b40e-aa0d2485f631', 'Cherry', '36" x 80"', '2-Lite Beveled', 'Entry Door', 2649.00, 36, 80),

-- Breezeport Collection
('breezeport-9-panel', 'Breezeport 9-Panel', 'Contemporary Breezeport featuring 9-panel geometric glass design. Fiberglass construction perfect for coastal homes with modern architectural elements.', '29bfcd7c-6e23-4eee-a976-7fb3c3d510ff', 'edf3c2bb-59be-4d4f-920d-eae7cba92d3f', 'Fiberglass', '36" x 80"', '9-Panel Clear', 'Entry Door', 2749.00, 36, 80),
('breezeport-6-panel', 'Breezeport 6-Panel', 'Streamlined 6-panel Breezeport design with balanced proportions. Energy-efficient fiberglass core with coastal-inspired glass configuration.', '29bfcd7c-6e23-4eee-a976-7fb3c3d510ff', 'edf3c2bb-59be-4d4f-920d-eae7cba92d3f', 'Fiberglass', '36" x 80"', '6-Panel Clear', 'Entry Door', 2549.00, 36, 80),

-- Colonial Collection
('colonial-e03', 'Colonial E03', 'Classic Colonial door with E03 decorative glass pattern. Solid wood construction features traditional raised panels with authentic period detailing.', '29bfcd7c-6e23-4eee-a976-7fb3c3d510ff', '05568217-ca50-4385-9830-21c4b06278f8', 'Oak', '36" x 80"', 'E03 Pattern', 'Entry Door', 2999.00, 36, 80),
('colonial-solid-panel', 'Colonial Solid Panel', 'Traditional Colonial door without glass, featuring full raised panel construction. Perfect for homes prioritizing security and classic styling.', '29bfcd7c-6e23-4eee-a976-7fb3c3d510ff', '05568217-ca50-4385-9830-21c4b06278f8', 'Oak', '36" x 80"', 'Solid Panel', 'Entry Door', 2449.00, 36, 80);

-- Insert Modern Door Collection
INSERT INTO doors (slug, name, description, collection_id, subcollection_id, material, size, glasstype, doortype, price, width, height) VALUES
-- Luca Collection
('luca-horizontal-4lt', 'Luca 4LT Horizontal', 'Modern Luca door with horizontal 4-lite configuration. Clean lines and contemporary glass arrangement perfect for modern architectural styles. Steel construction with thermal break technology.', '288565ad-3588-40d0-90ce-78a7e00ef785', '866128a9-0afd-4d94-96ed-45449eb0d13b', 'Steel', '36" x 80"', '4-Lite Horizontal', 'Entry Door', 2199.00, 36, 80),
('luca-vertical-3lt', 'Luca 3LT Vertical', 'Contemporary Luca with vertical glass orientation creating height emphasis. Modern steel frame with energy-efficient glazing system.', '288565ad-3588-40d0-90ce-78a7e00ef785', '866128a9-0afd-4d94-96ed-45449eb0d13b', 'Steel', '36" x 80"', '3-Lite Vertical', 'Entry Door', 2099.00, 36, 80),
('luca-full-glass', 'Luca Full Glass', 'Maximum glass area Luca design with minimal frame interruption. Contemporary styling with superior thermal performance.', '288565ad-3588-40d0-90ce-78a7e00ef785', '866128a9-0afd-4d94-96ed-45449eb0d13b', 'Steel', '36" x 80"', 'Full Glass', 'Entry Door', 2399.00, 36, 80),

-- Carlo Collection  
('carlo-square-7lt', 'Carlo 7LT Square', 'Contemporary Carlo design featuring 7-lite square glass configuration. Geometric precision meets modern functionality with aluminum frame construction.', '288565ad-3588-40d0-90ce-78a7e00ef785', 'f114e68b-6234-45b0-8d81-75f346495d2e', 'Aluminum', '36" x 80"', '7-Lite Square', 'Entry Door', 2399.00, 36, 80),
('carlo-rectangular-5lt', 'Carlo 5LT Rectangular', 'Carlo door with 5-lite rectangular glass layout emphasizing horizontal proportions. Aluminum construction with powder-coated finish options.', '288565ad-3588-40d0-90ce-78a7e00ef785', 'f114e68b-6234-45b0-8d81-75f346495d2e', 'Aluminum', '36" x 80"', '5-Lite Rectangular', 'Entry Door', 2299.00, 36, 80),

-- Milan Collection
('milan-thin-lite', 'Milan Thin Lite', 'Sleek Milan door with ultra-thin lite configuration. Minimalist design maximizes glass area while maintaining structural integrity with steel frame.', '288565ad-3588-40d0-90ce-78a7e00ef785', '664d3491-4166-4447-822d-c8f73b40a6b3', 'Steel', '36" x 80"', 'Thin Lite Clear', 'Entry Door', 2599.00, 36, 80),
('milan-wide-lite', 'Milan Wide Lite', 'Contemporary Milan with wide glass panels creating expansive views. Modern steel construction with thermal break technology for energy efficiency.', '288565ad-3588-40d0-90ce-78a7e00ef785', '664d3491-4166-4447-822d-c8f73b40a6b3', 'Steel', '36" x 80"', 'Wide Lite Clear', 'Entry Door', 2699.00, 36, 80),

-- Urban Collection
('urban-metro', 'Urban Metro', 'Metropolitan-inspired Urban door with industrial styling. Steel and glass construction perfect for city loft and contemporary urban homes.', '288565ad-3588-40d0-90ce-78a7e00ef785', 'e9f9bfcc-1844-440c-88fe-6a281244257d', 'Steel', '36" x 80"', 'Metro Glass', 'Entry Door', 2449.00, 36, 80),
('urban-loft', 'Urban Loft', 'Loft-style Urban door featuring exposed hardware elements and industrial glass patterns. Perfect for modern city living spaces.', '288565ad-3588-40d0-90ce-78a7e00ef785', 'e9f9bfcc-1844-440c-88fe-6a281244257d', 'Steel', '36" x 80"', 'Loft Glass', 'Entry Door', 2549.00, 36, 80);