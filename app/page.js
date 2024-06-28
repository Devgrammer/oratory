"use client"

import Image from "next/image";
import { useEffect } from "react";
import { redirect } from 'next/navigation'


export default function Home() {

  useEffect(()=>{
redirect(`/jobs/job-preview`)
  },[])

  return (
    <main className="main-contianer flex justify-center items-center h-screen">
        Loading... Please wait!
    </main>
  );
}
