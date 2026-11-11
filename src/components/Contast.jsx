import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // Telegram Bot Token និង Chat ID របស់អ្នក
  const TELEGRAM_BOT_TOKEN = '8549843780:AAF_yJZ7yVnLp9ShLgnqO8vR542Szf12SoA';
  const TELEGRAM_CHAT_ID = '6134851242';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // បង្កើតកាលបរិច្ឆេទ និងម៉ោងបច្ចុប្បន្ន
    const now = new Date();
    const dateStr = now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString();

    // រៀបចំសារដែលត្រូវផ្ញើទៅ Telegram ជាមួយ Time & Date
    const textMessage = `
📩 *New Portfolio Inquiry*
--------------------------------
📅 *Date:* ${dateStr}
⏰ *Time:* ${timeStr}
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📌 *Subject:* ${formData.subject}
📝 *Message:* 
${formData.message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: textMessage,
            parse_mode: 'Markdown',
          }),
        }
      );

      if (response.ok) {
        setStatus({ type: 'success', text: 'សាររបស់អ្នកត្រូវបានផ្ញើទៅកាន់ Telegram ជោគជ័យ!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', text: 'មានបញ្ហាក្នុងការផ្ញើសារ! សូមព្យាយាមម្តងទៀត។' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({ type: 'error', text: 'មិនអាចតភ្ជាប់ទៅកាន់ Telegram Server បានទេ!' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Badge & Title */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-3">
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              📬 Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Me</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            មានសំណួរ ឬគម្រោងចង់សហការ? សូមផ្ញើសារមកកាន់ខ្ញុំតាមរយៈ Form ឬព័ត៌មានខាងក្រោម!
          </p>
        </div>

        {/* Main Grid: Left Contact Info + Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-2xl font-bold text-white">Let's talk about everything!</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                ខ្ញុំមានចំណាប់អារម្មណ៍លើការងារ Freelance, ការអភិវឌ្ឍន៍ប្រព័ន្ធ software និងគម្រោងបច្ចេកវិទ្យាផ្សេងៗ។
              </p>

              <div className="space-y-4 pt-2">
                {/* Location */}
                <a
                  href="https://maps.app.goo.gl/wkjJW4RWqFAPgu8D6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-purple-500/50 transition-all group"
                >
                  <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/30 group-hover:scale-110 transition-transform">
                    📍
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Location</span>
                    <span className="text-slate-200 font-semibold group-hover:text-purple-400 transition-colors">
                      Phnom Penh, Cambodia
                    </span>
                  </div>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/student_score_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/30 group-hover:scale-110 transition-transform">
                    📲
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Telegram</span>
                    <span className="text-slate-200 font-semibold group-hover:text-cyan-400 transition-colors">
                      @Heang Offiecal
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Form */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

            {status && (
              <div
                className={`mb-6 p-4 rounded-xl text-sm font-semibold border ${
                  status.type === 'success'
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-red-500/10 border-red-500/30 text-red-400'
                }`}
              >
                {status.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hi Heang, I'd like to discuss a new project..."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold transition-all shadow-lg shadow-cyan-500/25 text-center text-sm disabled:opacity-50"
              >
                {loading ? 'Sending to Telegram...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;