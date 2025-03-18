import { motion } from "framer-motion";

export default function Modal({ message, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Alert</h2>
        <p className="mb-4">{message}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}