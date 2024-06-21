import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aqgtnqqrykfsycgyoalz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxZ3RucXFyeWtmc3ljZ3lvYWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwOTQyMTAsImV4cCI6MjAwNjY3MDIxMH0.xefWRgZgPYIbKloLF-mKW2mzCrYGzQLwtF6fkSTi8V0'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase