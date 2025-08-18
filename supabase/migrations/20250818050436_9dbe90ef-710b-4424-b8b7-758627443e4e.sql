-- Insert comprehensive door features for all doors

-- Aberdeen Burlwood E17 Features
INSERT INTO door_features (door_id, feature_name, feature_value) VALUES
((SELECT id FROM doors WHERE slug = 'aberdeen-burlwood-e17'), 'Wood Species', 'Premium Mahogany'),
((SELECT id FROM doors WHERE slug = 'aberdeen-burlwood-e17'), 'Finish', 'Hand-Applied Burlwood Stain'),
((SELECT id FROM doors WHERE slug = 'aberdeen-burlwood-e17'), 'Glass Type', 'E17 Decorative Pattern'),
((SELECT id FROM doors WHERE slug = 'aberdeen-burlwood-e17'), 'Hardware', 'Antique Bronze Included'),
((SELECT id FROM doors WHERE slug = 'aberdeen-burlwood-e17'), 'Weatherstrip', 'Dual Compression Seal'),
((SELECT id FROM doors WHERE slug = 'aberdeen-burlwood-e17'), 'Threshold', 'Adjustable Oak Sill'),
((SELECT id FROM doors WHERE slug = 'aberdeen-burlwood-e17'), 'Core Material', 'Solid Wood Core'),
((SELECT id FROM doors WHERE slug = 'aberdeen-burlwood-e17'), 'Energy Rating', 'R-Value 5.2'),
((SELECT id FROM doors WHERE slug = 'aberdeen-burlwood-e17'), 'Warranty', '20-Year Limited Warranty');

-- Aberdeen Clear Glass Features  
INSERT INTO door_features (door_id, feature_name, feature_value) VALUES
((SELECT id FROM doors WHERE slug = 'aberdeen-clear-glass'), 'Wood Species', 'Premium Mahogany'),
((SELECT id FROM doors WHERE slug = 'aberdeen-clear-glass'), 'Glass Type', 'Clear Tempered Glass'),
((SELECT id FROM doors WHERE slug = 'aberdeen-clear-glass'), 'Light Transmission', '95% Visible Light'),
((SELECT id FROM doors WHERE slug = 'aberdeen-clear-glass'), 'Security Features', 'Laminated Glass Option'),
((SELECT id FROM doors WHERE slug = 'aberdeen-clear-glass'), 'UV Protection', 'Low-E Coating Available'),
((SELECT id FROM doors WHERE slug = 'aberdeen-clear-glass'), 'Weatherstrip', 'Triple Seal System'),
((SELECT id FROM doors WHERE slug = 'aberdeen-clear-glass'), 'Hardware', 'Brass or Bronze Options'),
((SELECT id FROM doors WHERE slug = 'aberdeen-clear-glass'), 'Energy Rating', 'R-Value 4.8');

-- Alexandria Classic 6LT Features
INSERT INTO door_features (door_id, feature_name, feature_value) VALUES
((SELECT id FROM doors WHERE slug = 'alexandria-classic-6lt'), 'Wood Species', 'Solid Cherry'),
((SELECT id FROM doors WHERE slug = 'alexandria-classic-6lt'), 'Glass Type', '6-Lite Beveled Glass'),
((SELECT id FROM doors WHERE slug = 'alexandria-classic-6lt'), 'Panel Design', 'Raised 2-Panel Lower'),
((SELECT id FROM doors WHERE slug = 'alexandria-classic-6lt'), 'Joinery', 'Traditional Mortise & Tenon'),
((SELECT id FROM doors WHERE slug = 'alexandria-classic-6lt'), 'Stiles & Rails', '5.25" Wide Rails'),
((SELECT id FROM doors WHERE slug = 'alexandria-classic-6lt'), 'Weatherstrip', 'Adjustable Astragal'),
((SELECT id FROM doors WHERE slug = 'alexandria-classic-6lt'), 'Hardware Prep', 'Standard Bore Prep'),
((SELECT id FROM doors WHERE slug = 'alexandria-classic-6lt'), 'Finish Options', '12 Stain Colors Available'),
((SELECT id FROM doors WHERE slug = 'alexandria-classic-6lt'), 'Warranty', '10-Year Limited Warranty');

-- Luca Horizontal 4LT Features
INSERT INTO door_features (door_id, feature_name, feature_value) VALUES
((SELECT id FROM doors WHERE slug = 'luca-horizontal-4lt'), 'Construction', 'Insulated Steel Core'),
((SELECT id FROM doors WHERE slug = 'luca-horizontal-4lt'), 'Glass Configuration', '4-Lite Horizontal Layout'),
((SELECT id FROM doors WHERE slug = 'luca-horizontal-4lt'), 'Frame Material', 'Reinforced Steel Frame'),
((SELECT id FROM doors WHERE slug = 'luca-horizontal-4lt'), 'Thermal Break', 'Polyamide Thermal Break'),
((SELECT id FROM doors WHERE slug = 'luca-horizontal-4lt'), 'Energy Rating', 'ENERGY STAR Certified'),
((SELECT id FROM doors WHERE slug = 'luca-horizontal-4lt'), 'Security', 'Multi-Point Locking System'),
((SELECT id FROM doors WHERE slug = 'luca-horizontal-4lt'), 'Glass Spacer', 'Warm Edge Spacer Technology'),
((SELECT id FROM doors WHERE slug = 'luca-horizontal-4lt'), 'Finish Options', '12 Standard Powder Coat Colors'),
((SELECT id FROM doors WHERE slug = 'luca-horizontal-4lt'), 'Hardware', 'European-Style Handle Set'),
((SELECT id FROM doors WHERE slug = 'luca-horizontal-4lt'), 'Sound Rating', 'STC 32 Noise Reduction');

-- Carlo Square 7LT Features
INSERT INTO door_features (door_id, feature_name, feature_value) VALUES
((SELECT id FROM doors WHERE slug = 'carlo-square-7lt'), 'Frame Material', 'Extruded Aluminum'),
((SELECT id FROM doors WHERE slug = 'carlo-square-7lt'), 'Glass Pattern', '7-Lite Square Grid'),
((SELECT id FROM doors WHERE slug = 'carlo-square-7lt'), 'Glazing', 'Double Glazed Units'),
((SELECT id FROM doors WHERE slug = 'carlo-square-7lt'), 'Thermal Performance', 'U-Value 0.35'),
((SELECT id FROM doors WHERE slug = 'carlo-square-7lt'), 'Finish', 'Anodized Aluminum Standard'),
((SELECT id FROM doors WHERE slug = 'carlo-square-7lt'), 'Color Options', '8 Powder Coat Colors'),
((SELECT id FROM doors WHERE slug = 'carlo-square-7lt'), 'Hardware', 'Concealed Hinges'),
((SELECT id FROM doors WHERE slug = 'carlo-square-7lt'), 'Weather Resistance', 'Marine Grade Seals'),
((SELECT id FROM doors WHERE slug = 'carlo-square-7lt'), 'Maintenance', 'Low Maintenance Finish');

-- Milan Thin Lite Features
INSERT INTO door_features (door_id, feature_name, feature_value) VALUES
((SELECT id FROM doors WHERE slug = 'milan-thin-lite'), 'Glass Design', 'Ultra-Thin Profile Glazing'),
((SELECT id FROM doors WHERE slug = 'milan-thin-lite'), 'Frame Material', 'Steel with Thermal Break'),
((SELECT id FROM doors WHERE slug = 'milan-thin-lite'), 'Glass Area', '75% Glass Coverage'),
((SELECT id FROM doors WHERE slug = 'milan-thin-lite'), 'Sight Lines', 'Minimal Frame Visibility'),
((SELECT id FROM doors WHERE slug = 'milan-thin-lite'), 'Energy Efficiency', 'Triple Glazed Option'),
((SELECT id FROM doors WHERE slug = 'milan-thin-lite'), 'Security Glass', 'Laminated Safety Glass'),
((SELECT id FROM doors WHERE slug = 'milan-thin-lite'), 'Hardware', 'Flush Mount Handle System'),
((SELECT id FROM doors WHERE slug = 'milan-thin-lite'), 'Weatherstrip', 'Magnetic Seal System'),
((SELECT id FROM doors WHERE slug = 'milan-thin-lite'), 'Finish Durability', '25-Year Finish Warranty');

-- Breezeport 9-Panel Features
INSERT INTO door_features (door_id, feature_name, feature_value) VALUES
((SELECT id FROM doors WHERE slug = 'breezeport-9-panel'), 'Core Material', 'Polyurethane Foam Core'),
((SELECT id FROM doors WHERE slug = 'breezeport-9-panel'), 'Surface Material', 'Fiberglass Composite'),
((SELECT id FROM doors WHERE slug = 'breezeport-9-panel'), 'Glass Pattern', '9-Panel Geometric Design'),
((SELECT id FROM doors WHERE slug = 'breezeport-9-panel'), 'Coastal Rating', 'Hurricane Zone Approved'),
((SELECT id FROM doors WHERE slug = 'breezeport-9-panel'), 'Salt Air Resistance', 'Corrosion Resistant Hardware'),
((SELECT id FROM doors WHERE slug = 'breezeport-9-panel'), 'Impact Rating', 'Large Missile Impact Tested'),
((SELECT id FROM doors WHERE slug = 'breezeport-9-panel'), 'Water Infiltration', 'Zero Water Penetration'),
((SELECT id FROM doors WHERE slug = 'breezeport-9-panel'), 'Finish Options', 'Gel Coat Exterior Finish'),
((SELECT id FROM doors WHERE slug = 'breezeport-9-panel'), 'Maintenance', 'No Painting Required');

-- Colonial E03 Features
INSERT INTO door_features (door_id, feature_name, feature_value) VALUES
((SELECT id FROM doors WHERE slug = 'colonial-e03'), 'Wood Species', 'Solid White Oak'),
((SELECT id FROM doors WHERE slug = 'colonial-e03'), 'Panel Style', 'Traditional Raised Panels'),
((SELECT id FROM doors WHERE slug = 'colonial-e03'), 'Glass Pattern', 'E03 Period Correct Design'),
((SELECT id FROM doors WHERE slug = 'colonial-e03'), 'Historical Accuracy', 'Colonial Williamsburg Inspired'),
((SELECT id FROM doors WHERE slug = 'colonial-e03'), 'Joinery Method', 'Pegged Mortise & Tenon'),
((SELECT id FROM doors WHERE slug = 'colonial-e03'), 'Hardware Style', 'Hand-Forged Iron Available'),
((SELECT id FROM doors WHERE slug = 'colonial-e03'), 'Finish Options', 'Period Appropriate Stains'),
((SELECT id FROM doors WHERE slug = 'colonial-e03'), 'Threshold', 'Solid Oak Sill'),
((SELECT id FROM doors WHERE slug = 'colonial-e03'), 'Restoration Grade', 'Museum Quality Construction');