-- Update Aberdeen door images with actual configurations from dsadoors.com
DELETE FROM door_images WHERE door_id = 'b0c009fa-7ced-4a74-8ce2-51d31860471d';

INSERT INTO door_images (door_id, image_url, alt_text, display_order) VALUES
(
  'b0c009fa-7ced-4a74-8ce2-51d31860471d',
  'https://dsadoors.com/wp-content/uploads/2023/01/Aberdeen-thumbnails4.png',
  'Aberdeen with Burlwood Iron',
  1
),
(
  'b0c009fa-7ced-4a74-8ce2-51d31860471d',
  'https://dsadoors.com/wp-content/uploads/2023/01/Aberdeen-thumbnails5.png',
  'Aberdeen with Redwood Iron',
  2
),
(
  'b0c009fa-7ced-4a74-8ce2-51d31860471d',
  'https://dsadoors.com/wp-content/uploads/2023/01/Aberdeen-thumbnails.png',
  'Aberdeen Solid Panel',
  3
),
(
  'b0c009fa-7ced-4a74-8ce2-51d31860471d',
  'https://dsadoors.com/wp-content/uploads/2023/01/Aberdeen-thumbnails2.png',
  'Aberdeen 6LT',
  4
),
(
  'b0c009fa-7ced-4a74-8ce2-51d31860471d',
  'https://dsadoors.com/wp-content/uploads/2023/01/Aberdeen-thumbnails3.png',
  'Aberdeen Leaded 6LT',
  5
),
(
  'b0c009fa-7ced-4a74-8ce2-51d31860471d',
  'https://dsadoors.com/wp-content/uploads/2024/02/aberdeen-1LT4-1024x1024.png',
  'Aberdeen 1LT',
  6
),
(
  'b0c009fa-7ced-4a74-8ce2-51d31860471d',
  'https://dsadoors.com/wp-content/uploads/2023/01/Aberdeen-thumbnails6.png',
  'Aberdeen 3LT SDL',
  7
);