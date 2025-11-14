import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white bg-gradient-to-br from-orange-400 via-red-500 to-purple-600">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Welcome to Delicious Bites
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Experience the finest flavors from around the world, crafted with passion and served with love
          </p>
          <Link
            href="/menu"
            className="inline-block px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-full hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Explore Our Menu
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Why Choose Us
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-6xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Premium Quality</h3>
            <p className="text-gray-600">
              We use only the finest, freshest ingredients sourced from local farms and trusted suppliers to ensure every dish is exceptional.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-6xl mb-4">👨‍🍳</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Expert Chefs</h3>
            <p className="text-gray-600">
              Our world-class chefs bring years of culinary expertise and creativity to create unforgettable dining experiences.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-6xl mb-4">🚚</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Fast Delivery</h3>
            <p className="text-gray-600">
              Enjoy hot, fresh meals delivered right to your door within 30 minutes or less, guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Delicious Bites</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Since 2010, Delicious Bites has been serving the community with exceptional food and outstanding service. 
            Our journey began with a simple vision: to create a place where people can enjoy delicious, high-quality 
            meals in a warm and welcoming atmosphere.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            We believe that great food brings people together. That&apos;s why we&apos;re committed to using only the freshest 
            ingredients, traditional cooking methods, and innovative recipes to create dishes that delight your taste buds 
            and nourish your soul.
          </p>
          <p className="text-lg leading-relaxed">
            Join us on this culinary adventure and discover why thousands of customers have made Delicious Bites 
            their favorite dining destination.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Get In Touch</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="mb-4 text-lg"><strong className="text-purple-600">📍 Address:</strong> 123 Gourmet Street, Food City, FC 12345</p>
            <p className="mb-4 text-lg"><strong className="text-purple-600">📞 Phone:</strong> (555) 123-4567</p>
            <p className="mb-4 text-lg"><strong className="text-purple-600">✉️ Email:</strong> info@deliciousbites.com</p>
            <p className="text-lg"><strong className="text-purple-600">🕒 Hours:</strong> Mon-Sun: 10:00 AM - 10:00 PM</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p className="mb-2">&copy; 2024 Delicious Bites. All rights reserved.</p>
        <p>Follow us on social media for daily specials and updates!</p>
      </footer>
    </div>
  );
}
