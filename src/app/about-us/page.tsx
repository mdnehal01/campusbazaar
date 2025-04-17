import React from "react";

function page(){
    return(
        <div className="h-full bg-green-100">
            
            <div className="container mx-auto px-4 py-12">
    {/*  Header Section  */}
    <section className="text-center mb-12">
      <h1 className="text-4xl font-bold text-green-800 mb-4 md:text-5xl">About Campus Bazaar</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Empowering college students to buy, sell, and exchange pre-owned items while fostering sustainability and affordability.
      </p>
    </section>

    {/* Mission and Vision Section */}
    <section className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To create a trusted, user-friendly platform that helps college students in India buy and sell second-hand items like books, electronics, and furniture, promoting affordability and a circular economy.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To foster a sustainable campus culture where students across India access affordable resources, reduce waste, and build community through eco-conscious practices.
          </p>
        </div>
      </div>
    </section>

    {/* <!-- Why Campus Bazaar Section --> */}
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-8 md:text-4xl">Why Campus Bazaar?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-green-600 mb-2">Affordability</h3>
          <p className="text-gray-600">
            Buy and sell pre-owned textbooks, gadgets, and more at budget-friendly prices tailored for students.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-green-600 mb-2">Sustainability</h3>
          <p className="text-gray-600">
            Reuse items to reduce campus waste, with our impact tracker showing your environmental contributions.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-green-600 mb-2">Trust & Convenience</h3>
          <p className="text-gray-600">
            Shop securely with college email verification, ratings, and flexible pickup or delivery options.
          </p>
        </div>
      </div>
    </section>

    {/* <!-- Our Story Section --> */}
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-8 md:text-4xl">Our Story</h2>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <p className="text-gray-600 mb-4">
          Campus Bazaar started with a vision to solve two key challenges for college students in India: financial constraints and campus waste. We noticed students struggling to afford textbooks and electronics, while usable items were often discarded. Our mobile-first platform, built with Next.js and Supabase, connects students to buy, sell, and exchange pre-owned goods securely and conveniently.
        </p>
        <p className="text-gray-600">
          Through pilot testing with over 790 students, we’ve seen strong demand for affordable second-hand items (82.7%) and support for sustainability (85.3%). With features like AI-driven item pricing and an environmental impact tracker, we’re making campus life more affordable and eco-friendly, one deal at a time.
        </p>
      </div>
    </section>

    {/* <!-- Our Impact Section --> */}
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-8 md:text-4xl">Our Impact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-3xl font-bold text-green-600 mb-2">790+</p>
          <p className="text-gray-600">Students engaged in pilot testing</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-3xl font-bold text-green-600 mb-2">82.7%</p>
          <p className="text-gray-600">Seeking affordable second-hand items</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-3xl font-bold text-green-600 mb-2">85.3%</p>
          <p className="text-gray-600">Supporting sustainability goals</p>
        </div>
      </div>
    </section>

    {/* <!-- Call to Action --> */}
    <section className="text-center">
      <h2 className="text-3xl font-bold text-green-800 mb-4 md:text-4xl">Join Campus Bazaar</h2>
      <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
        Be part of a community making campus life affordable, sustainable, and connected. Sign up and start exploring today!
      </p>
      <a href="/signup" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
        Get Started
      </a>
    </section>
  </div>



        </div>
    );
}

export default page;