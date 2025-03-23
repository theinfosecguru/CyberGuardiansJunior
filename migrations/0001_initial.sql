-- Migration number: 0001 	 2025-03-23
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS progress;
DROP TABLE IF EXISTS badges;
DROP TABLE IF EXISTS user_badges;
DROP TABLE IF EXISTS leaderboard;
DROP TABLE IF EXISTS avatars;
DROP TABLE IF EXISTS user_avatars;
DROP TABLE IF EXISTS learning_modules;
DROP TABLE IF EXISTS module_activities;
DROP TABLE IF EXISTS user_activities;
DROP TABLE IF EXISTS parent_accounts;
DROP TABLE IF EXISTS parent_child_links;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  email TEXT,
  age INTEGER,
  xp_points INTEGER DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_login DATETIME,
  is_active BOOLEAN DEFAULT TRUE,
  parental_consent BOOLEAN DEFAULT FALSE
);

-- Progress tracking
CREATE TABLE IF NOT EXISTS progress (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  module_id INTEGER NOT NULL,
  activity_id INTEGER NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  score INTEGER DEFAULT 0,
  completed_at DATETIME,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (module_id) REFERENCES learning_modules(id),
  FOREIGN KEY (activity_id) REFERENCES module_activities(id)
);

-- Badges
CREATE TABLE IF NOT EXISTS badges (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  image_path TEXT,
  xp_reward INTEGER DEFAULT 0
);

-- User badges
CREATE TABLE IF NOT EXISTS user_badges (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  badge_id INTEGER NOT NULL,
  earned_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (badge_id) REFERENCES badges(id)
);

-- Leaderboard
CREATE TABLE IF NOT EXISTS leaderboard (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  weekly_score INTEGER DEFAULT 0,
  monthly_score INTEGER DEFAULT 0,
  all_time_score INTEGER DEFAULT 0,
  last_updated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Avatars
CREATE TABLE IF NOT EXISTS avatars (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  image_path TEXT NOT NULL,
  xp_required INTEGER DEFAULT 0,
  category TEXT
);

-- User avatars
CREATE TABLE IF NOT EXISTS user_avatars (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  avatar_id INTEGER NOT NULL,
  is_active BOOLEAN DEFAULT FALSE,
  unlocked_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (avatar_id) REFERENCES avatars(id)
);

-- Learning modules
CREATE TABLE IF NOT EXISTS learning_modules (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT,
  order_index INTEGER,
  image_path TEXT,
  is_premium BOOLEAN DEFAULT FALSE
);

-- Module activities
CREATE TABLE IF NOT EXISTS module_activities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  module_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  activity_type TEXT,
  content_path TEXT,
  xp_reward INTEGER DEFAULT 0,
  order_index INTEGER,
  FOREIGN KEY (module_id) REFERENCES learning_modules(id)
);

-- User activities
CREATE TABLE IF NOT EXISTS user_activities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  activity_id INTEGER NOT NULL,
  started_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  completed_at DATETIME,
  attempts INTEGER DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (activity_id) REFERENCES module_activities(id)
);

-- Parent accounts
CREATE TABLE IF NOT EXISTS parent_accounts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_login DATETIME
);

-- Parent-child links
CREATE TABLE IF NOT EXISTS parent_child_links (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  parent_id INTEGER NOT NULL,
  child_id INTEGER NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (parent_id) REFERENCES parent_accounts(id),
  FOREIGN KEY (child_id) REFERENCES users(id)
);

-- Create indexes
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_progress_user_id ON progress(user_id);
CREATE INDEX idx_user_badges_user_id ON user_badges(user_id);
CREATE INDEX idx_leaderboard_scores ON leaderboard(weekly_score, monthly_score, all_time_score);
CREATE INDEX idx_learning_modules_category ON learning_modules(category);
CREATE INDEX idx_module_activities_module_id ON module_activities(module_id);
CREATE INDEX idx_parent_child_links ON parent_child_links(parent_id, child_id);

-- Initial data for learning modules
INSERT INTO learning_modules (name, description, category, order_index, is_premium) VALUES 
('Cyber Basics', 'Introduction to basic cybersecurity concepts', 'fundamentals', 1, FALSE),
('Threat Landscape', 'Learn about different types of cyber threats', 'fundamentals', 2, FALSE),
('Defense Mechanisms', 'Discover how to protect against cyber threats', 'protection', 3, FALSE),
('Adversaries', 'Learn about different types of hackers', 'awareness', 4, FALSE),
('Cybersecurity Careers', 'Explore exciting careers in cybersecurity', 'careers', 5, TRUE),
('ISC2 Domains Simplified', 'Simplified version of professional security domains', 'advanced', 6, TRUE);

-- Initial data for module activities
INSERT INTO module_activities (module_id, name, description, activity_type, xp_reward, order_index) VALUES 
(1, 'What is malware?', 'Learn about different types of malicious software', 'lesson', 10, 1),
(1, 'Passwords vs. hackers', 'Understand how passwords protect your accounts', 'lesson', 10, 2),
(1, 'Safe browsing', 'Learn how to browse the internet safely', 'lesson', 10, 3),
(1, 'Virus Blaster', 'Mini-game: tap viruses attacking a device', 'game', 20, 4),
(2, 'Phishing explained', 'Learn about fake emails and messages', 'lesson', 10, 1),
(2, 'Ransomware dangers', 'Understand how ransomware locks your files', 'lesson', 10, 2),
(2, 'Social engineering', 'Learn about stranger danger online', 'lesson', 10, 3),
(2, 'Phish or Friend?', 'Quiz to identify suspicious messages', 'quiz', 20, 4);

-- Initial badges
INSERT INTO badges (name, description, image_path, xp_reward) VALUES
('Cyber Rookie', 'Completed your first lesson', '/images/badges/rookie.png', 5),
('Password Pro', 'Created a strong password', '/images/badges/password.png', 10),
('Threat Spotter', 'Identified 5 phishing attempts', '/images/badges/threat.png', 15),
('Cyber Defender', 'Completed all basic security modules', '/images/badges/defender.png', 25);

-- Initial avatars
INSERT INTO avatars (name, image_path, xp_required, category) VALUES
('Rookie Robot', '/images/avatars/robot_basic.png', 0, 'starter'),
('Cyber Cat', '/images/avatars/cyber_cat.png', 50, 'animals'),
('Tech Turtle', '/images/avatars/tech_turtle.png', 100, 'animals'),
('Hacker Glasses', '/images/avatars/hacker_glasses.png', 200, 'accessories'),
('Digital Shield', '/images/avatars/digital_shield.png', 300, 'equipment');
