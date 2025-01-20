/*
  # Create registration tables for students and businesses

  1. New Tables
    - `students`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `full_name` (text)
      - `university` (text)
      - `major` (text)
      - `graduation_year` (integer)
      - `skills` (text[])
      - `created_at` (timestamp)
    
    - `businesses`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `company_name` (text)
      - `industry` (text)
      - `size` (text)
      - `location` (text)
      - `needs` (text[])
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Create students table
CREATE TABLE IF NOT EXISTS students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  university text NOT NULL,
  major text NOT NULL,
  graduation_year integer NOT NULL,
  skills text[] NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Create businesses table
CREATE TABLE IF NOT EXISTS businesses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  company_name text NOT NULL,
  industry text NOT NULL,
  size text NOT NULL,
  location text NOT NULL,
  needs text[] NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own student data"
  ON students
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own student data"
  ON students
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can read own business data"
  ON businesses
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own business data"
  ON businesses
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);