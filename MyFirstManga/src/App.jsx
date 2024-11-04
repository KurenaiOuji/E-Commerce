import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// src/App.jsx
import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">My First Manga</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-yellow-500">Inicio</a></li>
              <li><a href="#" className="hover:text-yellow-500">Mangas</a></li>
              <li><a href="#" className="hover:text-yellow-500">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-yellow-500">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <section className="container mx-auto p-6">
          <h2 className="text-2xl font-bold mb-4">Catálogo de Mangas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Product Card */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="https://via.placeholder.com/150" alt="Manga" className="w-full h-40 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-2">Título del Manga</h3>
              <p className="text-gray-600 mt-1">Autor</p>
              <p className="text-yellow-500 font-bold mt-2">$9.99</p>
              <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
                Agregar al carrito
              </button>
            </div>
            {/* Puedes replicar más tarjetas de productos */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>© 2024 My First Manga. Todos los derechos reservados.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-yellow-500">Términos y condiciones</a> | 
            <a href="#" className="hover:text-yellow-500 ml-2">Política de privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

