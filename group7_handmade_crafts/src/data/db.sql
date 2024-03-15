-- This is just a dumping file for scripts to build the database

--Table structure for table `account`
CREATE TABLE handcrafted.account (
	account_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	account_firstname character varying NOT NULL,
    account_lastname character varying NOT NULL,
    account_email character varying NOT NULL,
    account_password character varying NOT NULL,
    account_image character varying NOT NULL

);

--Table structure for table `category`
--Use INT instead of UUID since there will probably only be a few categories
CREATE TABLE IF NOT EXISTS handcrafted.category (
	category_id INT GENERATED BY DEFAULT AS IDENTITY,
	category_name character varying NOT NULL,
    CONSTRAINT category_pk PRIMARY KEY (category_id)
);

-- Table structure for table `product`
-- Removed the product_thumbnail property since not part of MVP
CREATE TABLE IF NOT EXISTS handcrafted.product
(
	product_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	product_title character varying NOT NULL,
	product_description TEXT NOT NULL,
	product_image character varying NOT NULL,
	product_price numeric(9, 2) NOT NULL,
	category_id INT NOT NULL,
    artist_id UUID NOT NULL
);

-- Create relationship between `category` and `product` tables
ALTER TABLE IF EXISTS handcrafted.product
	ADD CONSTRAINT fk_category FOREIGN KEY (category_id)
	REFERENCES handcrafted.category (category_id) MATCH SIMPLE
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

-- Create relationship between `account` and `product` tables
ALTER TABLE IF EXISTS handcrafted.product
	ADD CONSTRAINT fk_account FOREIGN KEY (artist_id)
	REFERENCES handcrafted.account (account_id) MATCH SIMPLE
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

-- Data for table `category`
-- Category names generated using ChatGPT
INSERT INTO handcrafted.category (category_name)
VALUES ('Artisanal'),
	('Textiles and Fabrics'),
	('Jewerly and Accessories'),
	('Home Decor and Furnishings'),
	('Personal Care'),
	('Stationary and Paper Goods');


-- data for accounts table
-- dummy account
INSERT INTO handcrafted.account (
    account_id,
    account_firstname,
    account_lastname,
    account_email,
    account_password,
    account_image
)
VALUES (
    '538c6f54-a22a-49a3-8815-8938c2f58932',
    'Leonardo',
    'Da Vinci',
    'leodv@mail.com',
    '123456',
    '/images/users/leonardo.jpg'
);

-- data for products table
-- dummy product for dummy account
INSERT INTO handcrafted.product (
	product_title,
	product_description,
	product_image,
	product_price,
	category_id,
	artist_id
)
VALUES (
	'Monalisa',
	'This is the Mona Lisa.',
	'/images/products/mona_lisa.jpg',
	12345.67,
	1,
	'538c6f54-a22a-49a3-8815-8938c2f58932'
);

-- create table 'rating'
CREATE TABLE IF NOT EXISTS handcrafted.rating (
	rating_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	rating_title character varying,
	rating_review_text TEXT,
	rating_value INT NOT NULL CHECK (rating_value BETWEEN 1 AND 5),
	buyer_id UUID NOT NULL,
	product_id UUID NOT NULL
);

-- create relationship between rating and buyer
ALTER TABLE IF EXISTS handcrafted.rating
	ADD CONSTRAINT fk_buyer FOREIGN KEY (buyer_id)
	REFERENCES handcrafted.account (account_id) MATCH SIMPLE
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

-- create relationship between rating and product
ALTER TABLE IF EXISTS handcrafted.rating
	ADD CONSTRAINT fk_product FOREIGN KEY (product_id)
	REFERENCES handcrafted.product (product_id) MATCH SIMPLE
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

-- create table 'story'
CREATE TABLE IF NOT EXISTS handcrafted.story (
	story_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	story_content TEXT NOT NULL,
	story_date DATE NOT NULL,
	artist_id UUID NOT NULL
);

-- create relationship between story and artist
ALTER TABLE IF EXISTS handcrafted.story
	ADD CONSTRAINT fk_artist FOREIGN KEY (artist_id)
	REFERENCES handcrafted.account (account_id) MATCH SIMPLE
	ON UPDATE CASCADE
	ON DELETE NO ACTION;

-- seed users
INSERT INTO handcrafted.account (
    account_id,
    account_firstname,
    account_lastname,
    account_email,
    account_password,
    account_image
)
VALUES
('31a83f3d-1a14-40f9-b7cc-30f9d036f572', 'Emily', 'Parker', 'emily@mail.com', 'password', '/images/users/emily.jpg'),
('e4cf64e7-b569-4149-8897-df9980266cdd', 'Anna', 'Banana', 'anna@mail.com', 'password', '/images/users/anna.jpg'),
('1aa97dfd-5aa0-4f80-afce-8cef34880226', 'Jane', 'Smith', 'jane@mail.com', 'password', '/images/users/jane.jpg'),
('b222d544-c5aa-4558-b4a6-74cd8e088afd', 'John', 'Cenamics', 'john@mail.com', 'password', '/images/users/john.jpg'),
('cea1b76b-d32d-4afc-939f-e306199c9077', 'Kit', 'Kat', 'kitkat@mail.com', 'password', '/images/users/kit.jpg'),
('f65944a4-429b-4cfc-904e-26011ceda9e0', 'Nana', 'Nah', 'nananah@mail.com', 'password', '/images/users/nana.jpg'),
('ad93d122-1058-465e-8720-1ed2f6f8cabb', 'Rose', 'Gillian', 'rose@mail.com', 'password', '/images/users/rose.jpg'),
('aea73477-ff13-41a1-a86a-5c30859494da', 'Susan', 'Davis', 'susan@mail.com', 'password', '/images/users/susan.jpg');

-- seed emily products
INSERT INTO handcrafted.product (
    product_title,
    product_description,
    product_image,
    product_price,
    category_id,
    artist_id
)
VALUES
('Anne of Green Gables Amigurumi', 'This handcrafted amigurumi is based on Anne of Green Gables', '/images/products/emily_amigurumi_anne.jpg', 42.50, 2, '31a83f3d-1a14-40f9-b7cc-30f9d036f572'),
('Dinosaur Amigurumi', 'Perfect gift for dinosaur lovers!', '/images/products/emily_amigurumi_dino.jpg', 32.50, 2, '31a83f3d-1a14-40f9-b7cc-30f9d036f572'),
('Woven Basket with Handle', 'Use this basket for your daily shopping or berry picking.', '/images/products/emily_woven_basket.jpg', 25, 4, '31a83f3d-1a14-40f9-b7cc-30f9d036f572');

-- seed anna products
INSERT INTO handcrafted.product (
    product_title,
    product_description,
    product_image,
    product_price,
    category_id,
    artist_id
)
VALUES
('Blue Cloth Earrings', 'Up your denim collection with this handcrafted blue denim earrings.', '/images/products/anna_blue.jpg', 12, 3, 'e4cf64e7-b569-4149-8897-df9980266cdd'),
('Peach Clay Earrings', 'Try something new with this clay earrings with floral design.', '/images/products/anna_peach.jpg', 5.50, 3, 'e4cf64e7-b569-4149-8897-df9980266cdd');

-- seed jane products
INSERT INTO handcrafted.product (
    product_title,
    product_description,
    product_image,
    product_price,
    category_id,
    artist_id    
)
VALUES
('Green Linen Apron', 'Protect your clothes with this lovely green linen apron.', '/images/products/jane_apron.jpg', 15, 2, '1aa97dfd-5aa0-4f80-afce-8cef34880226'),
('Personalized Eco Bag', 'Print your own design in these canvas bags. Printing service not included.', '/images/products/jane_eco_bag.jpg', 1, 3, '1aa97dfd-5aa0-4f80-afce-8cef34880226'),
('Hand Painted Sneakers Size 10', 'Give some color to your outfit with this hand painted sneakers. Comes in Size 10.', '/images/products/jane_painted_sneakers.jpg', 25, 3, '1aa97dfd-5aa0-4f80-afce-8cef34880226'),
('Lovely Straw Hat with Ribbon', 'Complete your outdoor look with this classic straw hat with ribbon detail.', '/images/products/jane_straw_hat.jpg', 22, 3, '1aa97dfd-5aa0-4f80-afce-8cef34880226');

-- seed john products
INSERT INTO handcrafted.product (
    product_title,
    product_description,
    product_image,
    product_price,
    category_id,
    artist_id    
)
VALUES
('Cracked Bowl with Gold Trim', 'Elevate your space with this unique ceramic bowl.', '/images/products/john_bowl.jpg', 75, 4, 'b222d544-c5aa-4558-b4a6-74cd8e088afd'),
('Two-Handled Mug', 'Enjoy a cup of hot drink with this one of a kind double handled creation. Comes in two per set.', '/images/products/john_mug.jpg', 25, 4, 'b222d544-c5aa-4558-b4a6-74cd8e088afd'),
('Dotted Vase', 'For your flowers, or just for display.', '/images/products/john_vase.jpg', 120, 4, 'b222d544-c5aa-4558-b4a6-74cd8e088afd'),
('White Ceramic Plate with Gold Inlay', 'Enjoy your food, and enjoy the beauty of this ceramic plate.', '/images/products/john_plate.jpg', 35, 4, 'b222d544-c5aa-4558-b4a6-74cd8e088afd');

-- seed kit products
INSERT INTO handcrafted.product (
    product_title,
    product_description,
    product_image,
    product_price,
    category_id,
    artist_id    
)
VALUES
('Happy Cat', 'Yes, it is a sticker.', '/images/products/kit_cat.jpg', 1, 6, 'cea1b76b-d32d-4afc-939f-e306199c9077'),
('Cat Heart', 'Yes, it is a sticker.', '/images/products/kit_cat_heart.jpg', 1, 6, 'cea1b76b-d32d-4afc-939f-e306199c9077'),
('Cherry', 'Yes, it is a sticker.', '/images/products/kit_cherry.jpg', 1, 6, 'cea1b76b-d32d-4afc-939f-e306199c9077'),
('Mango', 'Yes, it is a sticker.', '/images/products/kit_mango.jpg', 1, 6, 'cea1b76b-d32d-4afc-939f-e306199c9077'),
('Peace', 'Yes, it is a sticker.', '/images/products/kit_peace.jpg', 1, 6, 'cea1b76b-d32d-4afc-939f-e306199c9077');

-- seed nana products
INSERT INTO handcrafted.product (
    product_title,
    product_description,
    product_image,
    product_price,
    category_id,
    artist_id    
)
VALUES
('Simple Flowers', 'Yes, it is an embroidery.', '/images/products/nana_flowers.jpg', 50, 2, 'f65944a4-429b-4cfc-904e-26011ceda9e0'),
('Woven Fabric with Pattern', 'Yes, it is a fabric.', '/images/products/nana_pattern_fabric.jpg', 145, 2, 'f65944a4-429b-4cfc-904e-26011ceda9e0'),
('Red Flower', 'Yes, it is an embroidery.', '/images/products/nana_red_flower.jpg', 80, 2, 'f65944a4-429b-4cfc-904e-26011ceda9e0');

-- seed rose products
INSERT INTO handcrafted.product (
    product_title,
    product_description,
    product_image,
    product_price,
    category_id,
    artist_id    
)
VALUES
('Rose Candle', 'Relax with this rose-scented candle.', '/images/products/rose_candle.jpg', 20, 5, 'ad93d122-1058-465e-8720-1ed2f6f8cabb'),
('Lemon Fragrance', 'Yes, it is a cream.', '/images/products/rose_fragrance.jpg', 60, 5, 'ad93d122-1058-465e-8720-1ed2f6f8cabb');

-- seed susan products
INSERT INTO handcrafted.product (
    product_title,
    product_description,
    product_image,
    product_price,
    category_id,
    artist_id    
)
VALUES
('Embossed Handmade Soap', 'Relax with this embossed handmade soap.', '/images/products/susan_embossed.jpg', 20, 5, 'aea73477-ff13-41a1-a86a-5c30859494da'),
('Marbled Soap', 'Yes, it is a soap.', '/images/products/susan_marbles.jpg', 30, 5, 'aea73477-ff13-41a1-a86a-5c30859494da'),
('Square Handmade Soap', 'Yes, it is a soap.', '/images/products/susan_squares.jpg', 15, 5, 'aea73477-ff13-41a1-a86a-5c30859494da');
