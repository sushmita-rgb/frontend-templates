export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-[1400px] mx-auto px-4 py-14">
        {/* ===== TOP GRID — 4 COLUMNS ===== */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded bg-green-600"></div>
              <h2 className="text-xl font-semibold text-gray-900">
                Prescripto
              </h2>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Trusted healthcare platform for booking appointments, connecting
              with doctors, and managing medical records securely and
              efficiently.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">COMPANY</h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-green-700 cursor-pointer">Home</li>
              <li className="hover:text-green-700 cursor-pointer">About us</li>
              <li className="hover:text-green-700 cursor-pointer">Contact</li>
              <li className="hover:text-green-700 cursor-pointer">
                Privacy policy
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">GET IN TOUCH</h3>

            <div className="space-y-3 text-sm text-gray-600">
              <p>+91 90000 00000</p>
              <p>support@prescripto.com</p>
              <p>Mon–Sat • 9am–7pm</p>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">SERVICES</h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-green-700 cursor-pointer">
                Book Appointment
              </li>
              <li className="hover:text-green-700 cursor-pointer">
                Give Feedback
              </li>
              <li className="hover:text-green-700 cursor-pointer">
                Patient Reviews
              </li>
            </ul>

            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
              Book Now
            </button>
          </div>
        </div>

        {/* ===== BOTTOM ===== */}
        <div className="mt-14 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Prescripto — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
