**Team Members** 
Mina Salah Zaki Wassi  
Mostafa Badr Mohamed
Mahmoud Shehata Gaber
Al Shaimaa Gamal Dahy  

# Weekend Movie - Movie Discovery Web Application

## 📖 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [API Integration](#api-integration)
- [File Documentation](#file-documentation)
- [Usage Guide](#usage-guide)
- [Features Breakdown](#features-breakdown)
- [Contributing](#contributing)

## 🎬 Overview

Weekend Movie is a modern, responsive web application that allows users to discover and explore movies and TV shows. The application integrates with The Movie Database (TMDB) API to provide real-time movie data, ratings, and information. Users can browse popular movies, upcoming releases, top-rated films, and view detailed information about each title.

## ✨ Features

### Core Features
- **Movie Discovery**: Browse popular, upcoming, and top-rated movies
- **Dynamic Content**: Real-time data from TMDB API
- **Interactive UI**: Hover effects, smooth animations, and responsive design
- **Movie Details**: Comprehensive movie information including ratings, cast, and overview
- **User Authentication**: Login system with local storage
- **Responsive Design**: Works seamlessly across desktop and mobile devices

### Interactive Elements
- **Dynamic Background**: Background images change on movie card hover
- **Rating System**: Visual rating circles with color-coded scores
- **Typewriter Effect**: Animated welcome text
- **Cast Scrolling**: Horizontal scrollable cast list with navigation buttons
- **Trailer Integration**: Direct links to movie trailers on YouTube

## 📁 Project Structure

```
Project 1.2/
├── TWEM.html              # Main homepage
├── movie.html             # Individual movie details page
├── login.html             # User authentication page
├── TWEM.js               # Main JavaScript functionality
├── movie.js              # Movie details page JavaScript
├── TWEM.css              # Main stylesheet
├── movie.css             # Movie details page styles
├── login.css             # Login page styles
├── CastImg/              # Cast member images
│   ├── elin.png
│   ├── elia.png
│   └── Jon.png
├── images/               # Additional project images
│   ├── editor.jpg
│   ├── gamer.jpg
│   ├── designer.jpg
│   ├── marketer.jpg
│   └── developer.jpg
├── poster.png            # Main poster image
├── image.png             # Background image
└── 889823.jpg           # Additional image asset
```

## 🛠 Technologies Used

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Dynamic functionality and API integration
- **Font Awesome**: Icon library for UI elements

### APIs & Services
- **The Movie Database (TMDB) API**: Movie data and images
- **YouTube**: Trailer integration
- **Local Storage**: User session management

### Design Features
- **Responsive Design**: Mobile-first approach
- **CSS Animations**: Smooth transitions and effects
- **Modern UI/UX**: Clean, intuitive interface

## 🚀 Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API access
- Local web server (optional, for development)

### Quick Start
1. **Clone or Download** the project files
2. **Open** `TWEM.html` in your web browser
3. **Enjoy** browsing movies!




## 🔌 API Integration

### TMDB API Configuration
The application uses TMDB API with the following endpoints:
- **Popular Movies**: `/movie/popular`
- **Top Rated Movies**: `/movie/top_rated`
- **Upcoming Movies**: `/movie/upcoming`

### Authentication
The application uses Bearer token authentication:
```javascript
const token = "eyJhbGciOiJIUzI1NiJ9...";
xhr.setRequestHeader("Authorization", "Bearer " + token);
```

### API Features
- **Real-time Data**: Live movie information and ratings
- **Image Integration**: High-quality movie posters and backdrops


## 📄 File Documentation

### HTML Files

#### `TWEM.html` - Main Homepage
- **Purpose**: Primary landing page with movie browsing interface
- **Features**:
  - Navigation menu with dropdown categories
  - Dynamic movie carousel sections
  - Interactive search bar with animated background
  - Footer with social links and information

#### `movie.html` - Movie Details Page
- **Purpose**: Detailed view of individual movies
- **Features**:
  - Movie poster and backdrop display
  - Rating circle with animated score
  - Cast list with horizontal scrolling
  - Trailer play button
  - Movie overview and release information

#### `login.html` - Authentication Page
- **Purpose**: User login and registration interface
- **Features**:
  - Clean login form with validation
  - Local storage integration
  - Redirect to main page after login

### JavaScript Files

#### `TWEM.js` - Main Application Logic
- **Functions**:
  - `getData()`: Fetches popular movies from TMDB API
  - `pushData()`: Fetches top-rated movies
  - `getDataSection2()`: Fetches upcoming movies
  - `getDataImages()`: Manages dynamic background images
  - `createMovieItem()`: Renders movie cards
  - `changeBgImage()`: Handles hover effects
  - `getRate()`: Animates rating circles
  - `typeWriter()`: Creates typewriter text effect

#### `movie.js` - Movie Details Logic
- **Functions**:
  - `getData()`: Fetches specific movie data based on URL parameters
  - `WorkWithMovie()`: Populates movie details page
  - Cast list scrolling functionality
  - Trailer button integration
  - Score animation system

### CSS Files

#### `TWEM.css` - Main Stylesheet
- **Features**:
  - Responsive grid layouts
  - Card-based design system
  - Hover animations and transitions
  - Navigation styling
  - Footer design

#### `movie.css` - Movie Details Styling
- **Features**:
  - Movie poster layout
  - Rating circle animations
  - Cast list horizontal scrolling
  - Responsive design for movie details

#### `login.css` - Authentication Styling
- **Features**:
  - Clean form design
  - Input validation styling
  - Responsive layout

## 📖 Usage Guide


### Browsing Movies
1. **Open** the application in your browser
2. **Navigate** through different movie categories:
   - Popular Movies (main carousel)
   - Top Rated Movies (horizontal scroll)
   - Upcoming Movies (second section)
3. **Hover** over movie cards to see dynamic background changes (using JS)
4. **Click** on any movie to view detailed information

### Viewing Movie Details
1. **Click** on any movie card
2. **Explore** the detailed movie page:
   - View movie poster and backdrop
   - See animated rating score
   - Read movie overview
   - Check release date
   - Browse cast information
3. **Use** scroll buttons to navigate cast list
4. **Click** "Play Trailer" to watch on YouTube

### User Authentication
1. **Click** "Login"in the navigation
2. **Enter** username/email and password
3. **Submit** the form to save credentials locally
4. **Return** to main page with personalized welcome message IN FOOTER

### Interactive Features
- **Hover Effects**: Movie cards change background on hover
- **Rating Animation**: Circular progress bars animate on load
- **Typewriter Text**: Welcome message types out character by character
- **Smooth Scrolling**: Cast list scrolls smoothly with navigation buttons


### Rating System
- **Color-coded scores**:
  - Red: Below 50%
  - Yellow: 50-70%
  - Green: Above 70%
- **Animated progress circles** with smooth transitions
  
### Performance Optimizations
 - **Efficient DOM manipulation**
- **Optimized API calls** with proper error handling
**About Main Page**
Header: Contains the website title/logo for clear branding.

Navigation Bar: Provides smooth navigation between sections of the website.

Dynamic Background Changer: The background photo changes automatically using JavaScript for an engaging user experience._
_
Typewriter Cursor Effect: Text animates with a typing effect and blinking cursor to highlight important content using js

Personalized Footer: Includes a customized footer with a personalized name to give the project a unique identity.

login page that stores username and password using local variables


## 🎬 About Weekend Movie

Weekend Movie is designed to provide an engaging and intuitive movie discovery experience. With its modern interface, real-time data integration, and interactive features, it offers users a comprehensive platform to explore the world of cinema.


**Happy Movie Watching! 🍿**
