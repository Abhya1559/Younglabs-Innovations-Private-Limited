import React, { useState } from "react";
import { Send, Sparkles, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setGreeting("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/greet?name=${encodeURIComponent(
          name
        )}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setGreeting(data.message);
      }
    } catch (err) {
      setError("Failed to get greeting. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-2xl border border-white/20"
      >
        <div className="flex items-center justify-center mb-8">
          <Sparkles className="w-8 h-8 text-yellow-300 mr-2" />
          <h1 className="text-3xl font-bold text-white">Younglabs Greeter</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white/90 mb-2"
            >
              Enter your name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/25 transition-all"
                placeholder="Type your name here..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !name.trim()}
            className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <span>Get Greeting</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-white text-sm"
          >
            {error}
          </motion.div>
        )}

        {greeting && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-6 bg-white/5 border border-white/10 rounded-lg"
          >
            <p className="text-white text-lg text-center font-medium">
              {greeting}
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
