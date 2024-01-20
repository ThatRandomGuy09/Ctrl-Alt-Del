"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
    const router = useRouter();

    useEffect(() => {
      // Check if the user is authenticated (replace this with your authentication logic)
      const isAuthenticated = checkAuthentication();
  
      // If authenticated, redirect to the dashboard
      if (isAuthenticated) {
        router.push('/dashboard');
      }
    }, [router]);
  
    // Your landing page UI goes here
    return (
      <div>
        <h1>Landing Page</h1>
        {/* Add your authentication and Solana wallet logic here */}
      </div>
    );
};

export default Page;

const checkAuthentication = () => {
    // Implement your authentication check here
    // For example, check if the user is logged in or has a valid Solana wallet session
    return true; // Replace with your actual authentication check
  };
