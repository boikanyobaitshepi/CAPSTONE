import React from "react";
import { Link } from "react-router-dom";
import {createClient} from "@supabase/supabase-js"
import {Auth} from "@supabase/auth-ui-react"
import { ThemeSupa} from "@supabase/auth-ui-shared"
import { useNavigate } from "react-router-dom"


const supabase = createClient(
  'https://aqgtnqqrykfsycgyoalz.supabase.co',
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxZ3RucXFyeWtmc3ljZ3lvYWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwOTQyMTAsImV4cCI6MjAwNjY3MDIxMH0.xefWRgZgPYIbKloLF-mKW2mzCrYGzQLwtF6fkSTi8V0'
)

export default function SignOut (){

    const [user, setUser] = React.useState({})
    const navigate = useNavigate()


    React.useEffect(()=> {
     async function getUserData() {
       await supabase.auth.getUser().then((value)=>{
         if (value.data?.user){
           console.log(value.data.user)
           setUser(value.data.user)
         }
       })
     }
     getUserData();
    }, [])

    async function signOutUser () {
     const { error }= await supabase.auth.signOut();
     navigate("/login")
    }


    return (

        <div className= "App">
                {/* Genres */}
           {Object.keys(user).length!==0 ?



               <>
            <button onClick={()=> signOutUser()}>SignOut</button>
                </>
              :
              <>

              <h1>User not logged in</h1>
              <button onClick={()=>{navigate("/login")}}>Go to login</button>
              </>
           }
        </div>
        )


}