
export default function Home() {
  return (
    <div>
      <nav>
        <ul className="flex justify-end bg-gray-800 text-white p-4">
          <li className="border rounded-3xl bg-blue-600 mr-4 p-3 hover:bg-blue-300 "><a href="/signup">SignUp</a></li>
          <li className="border rounded-3xl bg-green-600 p-3 hover:bg-green-300"><a href="/login">Login</a></li>
        </ul>
      </nav>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
       <h1 className="text-7xl mb-60"> Instagram Clone</h1>
      </main>
    </div>
  );
}
