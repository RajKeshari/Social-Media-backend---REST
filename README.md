# Social Media Platform Backend

This project is the backend implementation of a basic social media platform with the following features:

- User authentication
- User profile management
- Following and unfollowing users
- Viewing posts from followed users
- Creating, liking, and commenting on posts
- Viewing likes and comments on posts
- Scheduling posts

## Features

### User

- **Create a user profile**: Users can register by providing necessary information.
- **Login to the created profile**: Users can log in using their credentials to obtain a JWT for authenticated requests.
- **Find and follow people**: Users can search for other users by name and follow them.
- **View content posted by people you follow**: Users can see a feed of posts from people they follow.
- **Like and comment on content posted by people you follow**: Users can like and comment on posts in their feed.
- **Create content**: Users can create new posts with media and/or text.
- **View likes and comments on your content**: Users can see the likes and comments on their posts.

### Post/Content

- **Create a post**: Posts can be created by users to be displayed in the feed of their followers.
- **Like a post**: Users can like posts from others.
- **Comment on a post**: Users can comment on posts from others.
- **View likes and comments**: The number of likes and comments on each post is visible.

### Content Feed

- **Unique feed**: Each user has a unique feed containing posts from users they follow and their own posts.
- **Likes and comments**: The feed shows the number of likes and comments for each post.

### Like

- **Like and unlike posts**: Users can like or unlike posts.
- **Unique like per user**: Each user can only like a post once.

### Comment

- **Add, edit, and delete comments**: Users can add, edit, and delete their comments on posts.
- **Commenting restrictions**: Users cannot comment on posts where the creator has disabled comments.

## API Endpoints

### 1. Authentication

- **Login**: `POST /api/auth/login`
  - Authenticates a user and returns a JSON Web Token (JWT).

### 2. User

- **Create User**: `POST /api/users`
  - Creates a new user profile.

### 3. Find People

- **Search Users**: `GET /api/users/search`
  - Finds users by their name.
  - Query Parameters:
    - `name`: The name or part of the name to search for.

### 4. Follow People

- **Follow User**: `POST /api/users/:id/follow`
  - Follows a user by their ID.
  - Path Parameters:
    - `id`: The ID of the user to follow.

### 5. Content Feed

- **Get Feed**: `GET /api/feed`
  - Retrieves the posts from users the current user follows.

### 6. Content Details

- **Get Post**: `GET /api/posts/:id`
  - Retrieves the details of a specific post by its ID.
  - Path Parameters:
    - `id`: The ID of the post to retrieve.

### 7. Comment

- **Create Comment**: `POST /api/posts/:postId/comments`
  - Creates a new comment on a post.
  - Path Parameters:
    - `postId`: The ID of the post to comment on.
  - Request Body:
    - `content`: The content of the comment.

- **Edit Comment**: `PUT /api/comments/:commentId`
  - Edits an existing comment.
  - Path Parameters:
    - `commentId`: The ID of the comment to edit.
  - Request Body:
    - `content`: The new content of the comment.

- **Delete Comment**: `DELETE /api/comments/:commentId`
  - Deletes a comment.
  - Path Parameters:
    - `commentId`: The ID of the comment to delete.

### 8. Like

- **Like Post**: `POST /api/posts/:postId/like`
  - Likes a post.
  - Path Parameters:
    - `postId`: The ID of the post to like.

- **Unlike Post**: `DELETE /api/posts/:postId/like`
  - Removes a like from a post.
  - Path Parameters:
    - `postId`: The ID of the post to unlike.

### 9. Create Content

- **Create Post**: `POST /api/posts`
  - Creates a new post.
  - Request Body:
    - `content`: The content of the post (text or media).

### Bonus: Scheduled Action

- **Schedule Post**: `POST /api/schedule`
  - Schedules a post to be created at a specific time.
  - Request Body:
    - `content`: The content of the post (text or media).
    - `scheduledTime`: The time to schedule the post.

## Database Schema

The database schema includes tables for users, posts, comments, and likes. An SQL file to create the required tables and an ER diagram are included in the project.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/RajKeshari/Social-Media-backend-REST
   ```

2. Install dependencies:
   ```sh
   cd BreadcrumbsSocial-Media-backend-REST
   npm install
   ```

3. Set up the database by running the SQL script provided.

4. Configure environment variables for database connection and JWT secret.

5. Start the server:
   ```sh
   nodemon app.js
   ```



