import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";


const supabase = createClient(
  'https://aqgtnqqrykfsycgyoalz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxZ3RucXFyeWtmc3ljZ3lvYWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwOTQyMTAsImV4cCI6MjAwNjY3MDIxMH0.xefWRgZgPYIbKloLF-mKW2mzCrYGzQLwtF6fkSTi8V0'
);

export default function Login() {
  
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event === "SIGNED_IN") {
      
      navigate("/podcasts");
    }
  });

  return (
    <div className="App container p-3 ">
      <header className="App-Header p-3 mx-auto"    style={{ width: '30rem'}}>
        <div className="p-3">
        <Auth 
        supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["google"]}
        />
        </div>
      </header>
      
    </div>
  );
}
