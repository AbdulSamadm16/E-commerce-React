export default function Contact() {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">📞 Get in Touch</h2>

      <div className="card p-4 shadow-sm">
        <p>
          Whether you have a question, need help with your order, or just want to say hello —
          <strong> LooQue’s support team</strong> is here for you.
        </p>

        <p className="mb-3">
          <strong>Email:</strong>{" "}
          <a href="mailto:support@looque.com" className="text-decoration-none text-dark">
            support@looque.com
          </a>
        </p>

        <p className="mb-3">
          <strong>Phone:</strong>{" "}
          <a href="tel:+919876543210" className="text-decoration-none text-dark">
            +91 98765 43210
          </a>
        </p>

        <p className="mb-0">
          <strong>Support Hours:</strong> Monday to Friday, 10 AM – 6 PM IST
        </p>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-outline-dark" onClick={() => alert("Launching support chat soon...")}>
          💬 Chat with Us
        </button>
      </div>
    </div>
  );
}