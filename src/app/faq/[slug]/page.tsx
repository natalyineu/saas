import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { faqs, getFaqBySlug } from '@/data/faq';

// Generate static params for all FAQ slugs
export function generateStaticParams() {
  return faqs.map((faq) => ({
    slug: faq.slug,
  }));
}

// Generate metadata for each FAQ page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const faq = getFaqBySlug(params.slug);
  
  if (!faq) {
    return {
      title: 'FAQ Not Found',
    };
  }
  
  return {
    title: `${faq.question} | AI-Vertise FAQ`,
    description: faq.answer.substring(0, 155) + '...',
    openGraph: {
      title: faq.question,
      description: faq.answer.substring(0, 155) + '...',
      type: 'website',
      url: `https://ai-vertise.com/faq/${faq.slug}`,
    },
  };
}

export default function FAQDetailPage({ params }: { params: { slug: string } }) {
  const faq = getFaqBySlug(params.slug);
  
  // If FAQ not found, show 404
  if (!faq) {
    notFound();
  }
  
  // Find related FAQs (excluding current one)
  const relatedFaqs = faqs
    .filter((item) => item.id !== faq.id)
    .slice(0, 3);
  
  return (
    <div className="min-h-screen">
      <Breadcrumbs containerClasses="flex py-4 text-sm px-4 md:px-6 max-w-7xl mx-auto" />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">{faq.question}</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{faq.answer}</p>
              
              {/* Additional information section */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
                <h2 className="text-xl font-semibold mb-3">Additional Information</h2>
                <p className="text-gray-700">
                  This FAQ covers the basics about {faq.question.toLowerCase()}. 
                  Our customer success team is ready to provide more detailed information 
                  tailored to your specific business needs.
                </p>
              </div>
            </div>
            
            {/* Related questions */}
            {relatedFaqs.length > 0 && (
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">Related Questions</h2>
                <ul className="space-y-3">
                  {relatedFaqs.map((related) => (
                    <li key={related.id}>
                      <Link 
                        href={`/faq/${related.slug}`}
                        className="text-primary-purple hover:underline font-medium"
                      >
                        {related.question}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Back to FAQ link */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <Link 
                href="/faq"
                className="inline-flex items-center text-primary-purple hover:underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All FAQs
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
} 