-- Add features for Traditional, Slimline, LUXE Pivot, and Hurricane doors

-- Belle Meade Classic Features
INSERT INTO door_features (door_id, feature_name, feature_value) VALUES
((SELECT id FROM doors WHERE slug = 'belle-meade-classic'), 'Wood Species', 'Solid Cherry'),
((SELECT id FROM doors WHERE slug = 'belle-meade-classic'), 'Panel Style', 'Raised Panel Construction'),
((SELECT id FROM doors WHERE slug = 'belle-meade-classic'), 'Glass Type', 'Southern Belle Decorative'),
((SELECT id FROM doors WHERE slug = 'belle-meade-classic'), 'Hardware Style', 'Plantation Bronze'),
((SELECT id FROM doors WHERE slug = 'belle-meade-classic'), 'Joinery', 'Mortise & Tenon'),
((SELECT id FROM doors WHERE slug = 'belle-meade-classic'), 'Finish Options', 'Traditional Southern Stains'),
((SELECT id FROM doors WHERE slug = 'belle-meade-classic'), 'Threshold', 'Solid Cherry Sill'),
((SELECT id FROM doors WHERE slug = 'belle-meade-classic'), 'Energy Rating', 'R-Value 4.5'),
((SELECT id FROM doors WHERE slug = 'belle-meade-classic'), 'Warranty', '15-Year Limited');

-- Slimline Contemporary Features
INSERT INTO door_features (door_id, feature_name, feature_value) VALUES
((SELECT id FROM doors WHERE slug = 'slimline-contemporary'), 'Frame Profile', '1.5" Slim Frame'),
((SELECT id FROM doors WHERE slug = 'slimline-contemporary'), 'Glass Coverage', '85% Glass Area'),
((SELECT id FROM doors WHERE slug = 'slimline-contemporary'), 'Thermal Break', 'Multi-Chamber Design'),
((SELECT id FROM doors WHERE slug = 'slimline-contemporary'), 'Glazing System', 'Triple Glazed Standard'),
((SELECT id FROM doors WHERE slug = 'slimline-contemporary'), 'Hardware', 'Concealed European Hinges'),
((SELECT id FROM doors WHERE slug = 'slimline-contemporary'), 'Weather Seal', 'Compression Gasket System'),
((SELECT id FROM doors WHERE slug = 'slimline-contemporary'), 'Energy Efficiency', 'Passive House Certified'),
((SELECT id FROM doors WHERE slug = 'slimline-contemporary'), 'U-Value', '0.25 W/m²K'),
((SELECT id FROM doors WHERE slug = 'slimline-contemporary'), 'Finish Warranty', '20-Year Anodized Finish');

-- LUXE Pivot Grand Features
INSERT INTO door_features (door_id, feature_name, feature_value) VALUES
((SELECT id FROM doors WHERE slug = 'luxe-pivot-grand'), 'Pivot System', 'Floor Spring Mechanism'),
((SELECT id FROM doors WHERE slug = 'luxe-pivot-grand'), 'Maximum Size', '12 feet x 8 feet'),
((SELECT id FROM doors WHERE slug = 'luxe-pivot-grand'), 'Weight Capacity', 'Up to 1200 lbs'),
((SELECT id FROM doors WHERE slug = 'luxe-pivot-grand'), 'Hardware', 'Concealed Pivot System'),
((SELECT id FROM doors WHERE slug = 'luxe-pivot-grand'), 'Frame Material', 'Steel & Timber Hybrid'),
((SELECT id FROM doors WHERE slug = 'luxe-pivot-grand'), 'Glass Options', 'Architectural Glazing'),
((SELECT id FROM doors WHERE slug = 'luxe-pivot-grand'), 'Custom Options', 'Unlimited Customization'),
((SELECT id FROM doors WHERE slug = 'luxe-pivot-grand'), 'Installation', 'Professional Required'),
((SELECT id FROM doors WHERE slug = 'luxe-pivot-grand'), 'Warranty', '25-Year Structural');

-- Port Impact Rated Features
INSERT INTO door_features (door_id, feature_name, feature_value) VALUES
((SELECT id FROM doors WHERE slug = 'port-impact-rated'), 'Impact Rating', 'Large Missile Impact'),
((SELECT id FROM doors WHERE slug = 'port-impact-rated'), 'Wind Rating', '200+ mph Design Pressure'),
((SELECT id FROM doors WHERE slug = 'port-impact-rated'), 'Certification', 'Miami-Dade Approved'),
((SELECT id FROM doors WHERE slug = 'port-impact-rated'), 'Glass Type', 'Laminated Impact Glass'),
((SELECT id FROM doors WHERE slug = 'port-impact-rated'), 'Core Material', 'Reinforced Foam Core'),
((SELECT id FROM doors WHERE slug = 'port-impact-rated'), 'Water Infiltration', 'Zero Penetration Rating'),
((SELECT id FROM doors WHERE slug = 'port-impact-rated'), 'Hardware', 'Stainless Steel Marine Grade'),
((SELECT id FROM doors WHERE slug = 'port-impact-rated'), 'Salt Air Resistance', 'Coastal Environment Rated'),
((SELECT id FROM doors WHERE slug = 'port-impact-rated'), 'Warranty', '10-Year Hurricane Warranty');

-- Add Aberdeen door for route matching
INSERT INTO doors (slug, name, description, collection_id, subcollection_id, material, size, glasstype, doortype, price, width, height) VALUES
('aberdeen', 'Aberdeen Collection', 'Premium Aberdeen door collection featuring rich wood finishes and elegant glass designs. Multiple glass and finish options available.', '29bfcd7c-6e23-4eee-a976-7fb3c3d510ff', '268b1b82-62eb-4ed3-9a19-13ff5ee95abb', 'Mahogany', '36" x 80"', 'Various Options', 'Entry Door', 2999.00, 36, 80);

-- Aberdeen Collection Overview Features
INSERT INTO door_features (door_id, feature_name, feature_value) VALUES
((SELECT id FROM doors WHERE slug = 'aberdeen'), 'Collection Type', 'Premium Signature Series'),
((SELECT id FROM doors WHERE slug = 'aberdeen'), 'Wood Species', 'Premium Mahogany'),
((SELECT id FROM doors WHERE slug = 'aberdeen'), 'Glass Options', 'E17, Clear, Privacy Glass'),
((SELECT id FROM doors WHERE slug = 'aberdeen'), 'Finish Options', 'Burlwood, Natural, Custom Stains'),
((SELECT id FROM doors WHERE slug = 'aberdeen'), 'Hardware Included', 'Premium Bronze or Brass'),
((SELECT id FROM doors WHERE slug = 'aberdeen'), 'Construction', 'Solid Wood Core'),
((SELECT id FROM doors WHERE slug = 'aberdeen'), 'Weatherstrip', 'Multi-Point Seal System'),
((SELECT id FROM doors WHERE slug = 'aberdeen'), 'Energy Rating', 'R-Value up to 5.2'),
((SELECT id FROM doors WHERE slug = 'aberdeen'), 'Warranty', 'Up to 20-Year Limited'),
((SELECT id FROM doors WHERE slug = 'aberdeen'), 'Customization', 'Size and Finish Variations');