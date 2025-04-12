import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TasteOfItalyCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto prose lg:prose-lg">
          <Link href="/blog" className="text-primary-purple hover:underline flex items-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Local Restaurant Promotion: Taste of Italy Boosts Weekend Reservations by 87%</h1>
            <div className="flex items-center text-gray-500 text-sm">
              <span>April 2, 2023</span>
              <span className="mx-2">•</span>
              <span>Marketing Team</span>
              <span className="mx-2">•</span>
              <span>6 min read</span>
            </div>
          </header>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg mb-12 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 p-8 flex justify-center">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background circle */}
                    <circle cx="50" cy="50" r="40" fill="rgba(63,94,251,0.1)" className="animate-pulse-slow" />
                    
                    {/* Restaurant plate */}
                    <circle cx="50" cy="50" r="30" fill="white" stroke="rgba(63,94,251,1)" strokeWidth="2" className="transform transition-transform duration-500 hover:scale-105" />
                    
                    {/* Fork and knife */}
                    <path d="M35 30 L35 70" stroke="rgba(252,70,107,1)" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M40 30 C40 40, 38 50, 40 70" stroke="rgba(252,70,107,1)" strokeWidth="2.5" strokeLinecap="round" />
                    
                    <path d="M65 30 L65 40 C65 45, 60 50, 65 55 L65 70" stroke="rgba(63,94,251,1)" strokeWidth="2.5" strokeLinecap="round" />
                    
                    {/* Food on plate */}
                    <circle cx="50" cy="50" r="12" fill="rgba(252,70,107,0.2)" className="animate-pulse-slow" />
                    <path d="M44 48 C47 44, 53 44, 56 48" stroke="rgba(63,94,251,1)" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M44 52 C47 56, 53 56, 56 52" stroke="rgba(63,94,251,1)" strokeWidth="1.5" strokeLinecap="round" />
                    
                    <div className="absolute top-0 right-0 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                      +87%
                    </div>
                  </svg>
                </div>
              </div>
              <div className="w-full md:w-2/3 p-8 bg-white/50">
                <h2 className="text-2xl font-bold mb-2">Taste of Italy</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary-purple to-primary-pink mb-4"></div>
                <h3 className="text-xl mb-2">Results at a Glance</h3>
                <p className="text-2xl font-bold text-primary-purple mb-2">87% boost in weekend reservations</p>
                <p className="text-gray-600">Family-owned Italian restaurant in Chicago's vibrant food scene</p>
              </div>
            </div>
          </div>
          
          <p className="lead">
            Taste of Italy, a family-owned Italian restaurant in Chicago's vibrant food scene, was struggling to fill tables during weekend dinner service despite their authentic cuisine and excellent reviews. They needed a way to stand out in an extremely competitive market.
          </p>
          
          <h2>The Challenge</h2>
          <p>
            Taste of Italy faced several significant challenges:
          </p>
          <ul>
            <li>Intense competition from other Italian restaurants in the area</li>
            <li>Limited recognition despite 15 years of operation</li>
            <li>Difficulty attracting new customers, especially during peak weekend hours</li>
            <li>Traditional marketing methods yielding diminishing returns</li>
          </ul>
          
          <p>
            "We had great food and service, but we were invisible to many potential customers," said the Owner and Head Chef at Taste of Italy. "Our weekend tables were only about half full, which was frustrating because we knew once people tried our food, they'd become regulars."
          </p>
          
          <h2>The Solution: AI-Vertise Boost</h2>
          <p>
            Taste of Italy partnered with AI-Vertise Boost to develop a targeted campaign focused on promoting their weekend specials. Our strategy included:
          </p>
          
          <ol>
            <li>
              <strong>Advanced audience targeting:</strong> Using AI to identify local foodies, Italian cuisine enthusiasts, and people who frequently dine out on weekends within a 10-mile radius.
            </li>
            <li>
              <strong>Weekday-to-weekend conversion:</strong> Specifically targeting customers who had dined at Taste of Italy during weekdays but not on weekends.
            </li>
            <li>
              <strong>Special promotion strategy:</strong> Creating a "Weekend Chef's Special" campaign that highlighted unique dishes only available Friday through Sunday.
            </li>
            <li>
              <strong>Reservation-focused ads:</strong> Developing ad creative that emphasized the ease of reserving a table and included appetizing visuals of their most popular weekend dishes.
            </li>
          </ol>
          
          <div className="my-8 p-5 bg-gray-50 rounded-lg border border-gray-100">
            <blockquote className="text-lg italic text-gray-700">
              "The AI targeting was remarkable. It was like the system knew exactly who would love our authentic Italian cooking and when they would be thinking about their weekend plans."
              <footer className="text-sm mt-2 text-gray-500">— Owner & Head Chef, Taste of Italy</footer>
            </blockquote>
          </div>
          
          <h2>The Implementation</h2>
          <p>
            The campaign was executed through a strategic three-stage approach:
          </p>
          
          <h3>Stage 1: Analysis and Targeting</h3>
          <p>
            We began by analyzing Taste of Italy's customer data and identifying patterns in their highest-value patrons. The AI platform created lookalike audiences across multiple advertising platforms to reach similar potential customers who weren't yet aware of the restaurant.
          </p>
          
          <h3>Stage 2: Creative Testing and Optimization</h3>
          <p>
            Multiple variations of ads were created featuring different aspects of the weekend dining experience—from the handmade pasta to the intimate ambiance. AI-Vertise Boost's algorithm continuously tested these variations, optimizing for the ones that drove the most reservation actions.
          </p>
          
          <h3>Stage 3: Scaling and Retention</h3>
          <p>
            As bookings increased, the campaign expanded to include special offers for first-time diners and a loyalty program to encourage repeat visits. The system automatically adjusted ad spend to focus on the days and times when potential customers were most likely to make weekend dining decisions.
          </p>
          
          <h2>The Results</h2>
          <p>
            Within just six weeks of launching the campaign, Taste of Italy experienced remarkable results:
          </p>
          
          <ul>
            <li><strong>87% increase in weekend reservations</strong>, reaching full capacity for Friday and Saturday dinner service</li>
            <li><strong>62% of new bookings</strong> came from customers who had never dined at the restaurant before</li>
            <li><strong>42% increase in average order value</strong> due to the success of the promoted chef's specials</li>
            <li><strong>4.8x return on ad spend</strong> across all digital channels</li>
          </ul>
          
          <p>
            Most significantly, Taste of Italy has maintained their fully booked weekends even after the initial promotion ended, as many first-time visitors have become regular patrons.
          </p>
          
          <h2>Key Insights</h2>
          <p>
            The success of Taste of Italy's campaign reveals several key insights for restaurants looking to increase bookings:
          </p>
          
          <ol>
            <li>
              <strong>Timing is crucial for restaurant marketing</strong> — the campaign specifically targeted people when they were making weekend dining decisions (primarily Wednesday through Friday afternoons).
            </li>
            <li>
              <strong>Exclusive offerings drive action</strong> — the limited-availability weekend specials created urgency and a reason to book.
            </li>
            <li>
              <strong>AI-powered audience targeting</strong> eliminated wasted ad spend by focusing only on the most likely customers.
            </li>
            <li>
              <strong>Visually appealing food photography</strong> was the most effective creative element in driving reservations.
            </li>
          </ol>
          
          <h2>Want to Fill Your Restaurant?</h2>
          <p>
            AI-Vertise Boost has helped hundreds of restaurants like Taste of Italy fill their tables through intelligent, AI-powered advertising. Our platform makes sophisticated marketing accessible to independent restaurants, with no technical expertise required.
          </p>
          
          <div className="bg-gradient-to-r from-primary-purple/10 to-primary-pink/10 p-6 rounded-lg my-8">
            <h3 className="font-bold text-xl mb-3">Ready to boost your restaurant bookings?</h3>
            <p className="mb-4">
              Join Taste of Italy and hundreds of other restaurants that have transformed their business with AI-Vertise Boost.
            </p>
            <Link href="/#pricing" className="bg-gradient-to-r from-primary-purple to-primary-pink text-white px-6 py-2 rounded-lg inline-block font-medium hover:shadow-lg transition-all">
              Get Started Today
            </Link>
          </div>
          
          <div className="mt-12 border-t border-gray-200 pt-8">
            <Link href="/blog" className="text-primary-purple hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
} 