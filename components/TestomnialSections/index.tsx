export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Amit Sharma",
      role: "Homeowner, Jaipur",
      message:
        "SVI DESIGN transformed our living room with beautifully crafted furniture. The quality and finishing are outstanding.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Neha Verma",
      role: "Interior Designer",
      message:
        "Their custom furniture solutions perfectly match modern interiors. Highly recommended for premium projects.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rohit Mehta",
      role: "Villa Owner",
      message:
        "From design to installation, the entire process was smooth and professional. Truly luxury craftsmanship.",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our Clients Say
        </h2>

        <p className="mt-3 text-gray-600 text-base md:text-lg">
          Trusted by homeowners, architects, and interior designers
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="mt-14 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((client, index) => (
          <div
            key={index}
            className="bg-white hover:bg-[#FFD8DF] rounded-2xl shadow-md p-8 hover:shadow-lg transition"
          >
            {/* Stars */}
            <div className="flex gap-1 text-yellow-500">
              ★★★★★
            </div>

            {/* Message */}
            <p className="mt-5 text-gray-700 text-sm leading-relaxed">
              “{client.message}”
            </p>

            {/* Divider */}
            <hr className="my-6 border-gray-300" />

            {/* Client Info */}
            <div className="flex items-center gap-4">
              {/* Client Image */}
              <img
                src={client.image}
                alt={client.name}
                className="w-14 h-14 rounded-full object-cover border"
              />

              {/* Name + Role */}
              <div>
                <h3 className="font-bold text-gray-900">{client.name}</h3>
                <p className="text-sm text-gray-500">{client.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
