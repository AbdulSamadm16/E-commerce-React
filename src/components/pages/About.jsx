export default function About() {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">🌿 About LooQue</h2>

      <div className="card p-4 shadow-sm">
        <p>
          <strong>LooQue</strong> isn’t just a skincare brand — it’s a movement toward mindful beauty.
          Born from a passion for purity and performance, we blend nature’s finest ingredients with modern science
          to create products that feel luxurious and deliver real results.
        </p>

        <p>
          Our journey began with a simple belief: skincare should be clean, effective, and empowering.
          Every formula we craft is cruelty-free, toxin-free, and designed to elevate your self-care ritual.
        </p>

        <p>
          💚 Trusted by thousands across India<br />
          🌱 Inspired by nature, backed by research<br />
          ✨ Designed for every skin type, every story
        </p>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-outline-dark" onClick={() => alert("Explore our story!")}>
          Read Our Story
        </button>
      </div>
    </div>
  );
}