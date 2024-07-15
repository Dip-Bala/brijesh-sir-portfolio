import React from 'react';
const books = [
    {
      title: "Organic Thin-Film Transistor Applications: Materials to Circuits",
      status: "Completed (Textbook)",
      authors: "B. K. Kaushik, B. Kumar, S. Prajapati and P. Mittal",
      publisher: {
        name: "CRC Press of Taylor and Francis, UK",
        details: "Total Pages-351, ISBN: 9781498736534 - CAT# K26491"
      },
      year: "August 22, 2016",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwgSvmi2xjA-0_-p_bRWF2wenBAyaW9_AQQ&s" // Replace with actual image URL or path
    }
  ];
  


function Books() {
  return (
    <div className="flex flex-col p-10 bg-slate-100 justify-center items-center">
      <h1 className="text-4xl font-lg text-indigo-700 mb-8 text-center">Books</h1>
      <div className="p-6 bg-white rounded-lg shadow-md max-w-5xl space-y-6">
        {books.map((book, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-md shadow-md flex">
            <div className="w-1/4 p-2">
              <img src={book.image} alt={book.title} className="w-full h-auto rounded-md" />
            </div>
            <div className="w-3/4 p-2">
              <h2 className="text-xl font-bold text-gray-700">{book.title}</h2>
              <p className="text-lg text-gray-600">Status: {book.status}</p>
              <p className="text-lg text-gray-600">Authors: {book.authors}</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">Publisher Details</h3>
                <p className="text-lg text-gray-700">{book.publisher.name}</p>
                <p className="text-lg text-gray-700">{book.publisher.details}</p>
              </div>
              <p className="text-lg text-gray-600 mt-4">Year: {book.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;

  