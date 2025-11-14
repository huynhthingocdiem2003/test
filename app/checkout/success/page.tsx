import Link from 'next/link';

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <div className="text-8xl mb-6">✓</div>
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Order Placed Successfully!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your order. Your delicious food is being prepared!
          </p>
          
          <div className="bg-purple-50 rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-2">
              <strong className="text-purple-600">Order Number:</strong> #ODR-{Math.floor(Math.random() * 100000)}
            </p>
            <p className="text-gray-700 mb-2">
              <strong className="text-purple-600">Estimated Delivery:</strong> 25-30 minutes
            </p>
            <p className="text-gray-700">
              <strong className="text-purple-600">Confirmation Email:</strong> Sent to your email address
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              You will receive updates about your order via email and SMS.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/menu"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                href="/"
                className="px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-gray-600">
          <p>Need help? Contact us at <a href="tel:5551234567" className="text-purple-600 hover:underline">(555) 123-4567</a></p>
        </div>
      </div>
    </div>
  );
}
