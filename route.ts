// pages/[slug]/index.tsx
import { useRouter } from 'next/router';

const DynamicPage = () => {
  const router = useRouter();
  const { slug } = router.query; // Access the dynamic route parameter

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>This is a dynamic page for: {slug}</p>
    </div>
  );
};

export default DynamicPage;

// route.ts
// pages/api/route.ts
// pages/api/route.ts
import { NextResponse } from 'next/server';

// Function to handle POST requests
export async function POST(req: Request) {
  try {
    // Parse JSON data from the request body
    const { username, email } = await req.json();

    // Basic validation (for demonstration)
    if (!username || !email) {
      return NextResponse.json(
        { error: 'Username and email are required' },
        { status: 400 }
      );
    }

    // Simulate some processing logic
    const isEmailValid = email.includes('@');
    const isUsernameValid = username.length > 3;

    // Determine if the input is correct based on simple validation rules
    const isCorrect = isEmailValid && isUsernameValid;

    // Return a JSON response with validation results
    return NextResponse.json(
      { isCorrect, username, email },
      { status: 200 }
    );
  } catch (error) {
    // Handle parsing or other errors
    return NextResponse.json(
      { error: 'Invalid request data' },
      { status: 400 }
    );
  }
}

// fetch data 
// JavaScript code to send a POST request using fetch
async function sendData() {
    // Data to send in the request body
    const data = {
      username: 'john_doe',
      email: 'john@example.com',
    };
  
    try {
      // Send a POST request to the API route
      const response = await fetch('/api/route', {
        method: 'POST', // Specify the request method
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify(data), // Convert the data to a JSON string
      });
  
      // Check if the response is OK
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      // Parse the JSON response
      const result = await response.json();
      console.log('Response from server:', result); // Log the response data
    } catch (error) {
      console.error('Error sending request:', error); // Log any errors
    }
  }
  
  // Call the function to send the request
  sendData();
  