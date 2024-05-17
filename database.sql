-- Create Database
CREATE DATABASE FoodCenter;
USE FoodCenter;

-- Create User Table
CREATE TABLE User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50),
    profile_image VARCHAR(255),
    allergies TEXT,
    height FLOAT,
    weight FLOAT
);

-- Create Diet Table
CREATE TABLE Diet (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    meals TEXT,
    calories INT,
    fat FLOAT,
    carbs FLOAT,
    protein FLOAT
);

-- Create Ingredient Table
CREATE TABLE Ingredient (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    quantity FLOAT NOT NULL,
    unit VARCHAR(50) NOT NULL,
    image VARCHAR(255),
    calories FLOAT,
    fat FLOAT,
    carbs FLOAT,
    protein FLOAT,
    avg_rating FLOAT -- Add AvgRating column to Ingredient table
);

-- Create Recipe Table
CREATE TABLE Recipe (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    instructions TEXT NOT NULL,
    rating FLOAT,
    calories INT,
    region VARCHAR(255),
    ingredient_id INT,
    FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id)
);

-- Create Celebrities Table
CREATE TABLE Celebrities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

-- Create Comment Table
CREATE TABLE Comment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    comment TEXT NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

-- Create Chef Table
CREATE TABLE Chef (
    id INT AUTO_INCREMENT PRIMARY KEY,
    certificate VARCHAR(255) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

-- Create Coach Table
CREATE TABLE Coach (
    id INT AUTO_INCREMENT PRIMARY KEY,
    certificate VARCHAR(255) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

-- Create relation table between Recipe and Ingredient (many-to-many)
CREATE TABLE RecipeIngredient (
    recipe_id INT,
    ingredient_id INT,
    PRIMARY KEY (recipe_id, ingredient_id),
    FOREIGN KEY (recipe_id) REFERENCES Recipe(id),
    FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id)
);

-- Create relation table between User and Recipe for favorite recipes (many-to-many)
CREATE TABLE UserRecipe (
    user_id INT,
    recipe_id INT,
    PRIMARY KEY (user_id, recipe_id),
    FOREIGN KEY (user_id) REFERENCES User(id),
    FOREIGN KEY (recipe_id) REFERENCES Recipe(id)
);

-- Create relation table between Celebrities and Recipe for favorite recipes (many-to-many)
CREATE TABLE CelebrityRecipe (
    celebrity_id INT,
    recipe_id INT,
    PRIMARY KEY (celebrity_id, recipe_id),
    FOREIGN KEY (celebrity_id) REFERENCES Celebrities(id),
    FOREIGN KEY (recipe_id) REFERENCES Recipe(id)
);

DELIMITER $$
CREATE PROCEDURE AddRecipe(
    IN p_title VARCHAR(255),
    IN p_description TEXT,
    IN p_instructions TEXT,
    IN p_rating FLOAT,
    IN p_calories INT,
    IN p_region VARCHAR(255),
    IN p_ingredient_id INT
)
BEGIN
    INSERT INTO Recipe (title, description, instructions, rating, calories, region, ingredient_id)
    VALUES (p_title, p_description, p_instructions, p_rating, p_calories, p_region, p_ingredient_id);
END $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE AddComment(
    IN p_comment TEXT,
    IN p_user_id INT
)
BEGIN
    INSERT INTO Comment (comment, user_id)
    VALUES (p_comment, p_user_id);
END $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER UpdateAverageRating AFTER INSERT ON Recipe
FOR EACH ROW
BEGIN
    DECLARE avg_rating FLOAT;
    SELECT AVG(rating) INTO avg_rating FROM Recipe WHERE ingredient_id = NEW.ingredient_id;
    UPDATE Ingredient SET avg_rating = avg_rating WHERE id = NEW.ingredient_id;
END $$
DELIMITER ;

-- Insert Users
INSERT INTO User (name, email, password, role, profile_image, allergies, height, weight) VALUES ('John Doe', 'john1@example.com', 'password123', 'regular', 'profile.jpg', 'None', 180, 75);
INSERT INTO User (name, email, password, role, profile_image, allergies, height, weight) VALUES ('Jane Smith', 'jane1@example.com', 'password456', 'regular', 'profile2.jpg', 'Peanuts', 165, 60);

-- Insert Ingredients
INSERT INTO Ingredient (name, quantity, unit, image, calories, fat, carbs, protein) VALUES ('Pasta', 200, 'grams', 'pasta.jpg', 300, 1.2, 62, 11);
INSERT INTO Ingredient (name, quantity, unit, image, calories, fat, carbs, protein) VALUES ('Pancetta', 100, 'grams', 'pancetta.jpg', 450, 37, 0, 28);
INSERT INTO Ingredient (name, quantity, unit, image, calories, fat, carbs, protein) VALUES ('Chicken', 150, 'grams', 'chicken.jpg', 330, 7, 0, 63);
INSERT INTO Ingredient (name, quantity, unit, image, calories, fat, carbs, protein) VALUES ('Vegetables', 100, 'grams', 'vegetables.jpg', 50, 0.5, 10, 2);

-- Insert Recipes
CALL AddRecipe('Spaghetti Carbonara', 'A classic Italian dish', 'Boil pasta, cook pancetta, mix with eggs and cheese', 4.5, 500, 'Italy', 1);
CALL AddRecipe('Chicken Salad', 'A healthy and delicious salad', 'Mix chicken with vegetables and dressing', 4.0, 300, 'USA', 3);

-- Insert Celebrities
INSERT INTO Celebrities (name, description) VALUES ('Gordon Ramsay', 'Famous chef and TV personality');
INSERT INTO Celebrities (name, description) VALUES ('Jamie Oliver', 'Celebrity chef known for healthy eating');

-- Associate Celebrities with Favorite Recipes
INSERT INTO CelebrityRecipe (celebrity_id, recipe_id) VALUES (1, 1);
INSERT INTO CelebrityRecipe (celebrity_id, recipe_id) VALUES (2, 2);
