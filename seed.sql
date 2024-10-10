CREATE TABLE posts (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    clerk_id TEXT,
    content TEXT
);

CREATE TABLE profiles (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    clerk_id TEXT,
    username TEXT,
    bio TEXT
);

SELECT
        posts.id,
        profiles.username,
        posts.content
        FROM posts
    INNER JOIN profiles ON posts.clerk_id = profiles.clerk_id;