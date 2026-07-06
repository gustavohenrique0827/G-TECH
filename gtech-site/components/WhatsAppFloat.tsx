"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    const labelTimer = setTimeout(() => setShowLabel(true), 4000);
    const hideLabel = setTimeout(() => setShowLabel(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(labelTimer);
      clearTimeout(hideLabel);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Label bubble */}
          <AnimatePresence>
            {showLabel && (
              <motion.div
                initial={{ opacity: 0, x: 12, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 12, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-line bg-bg-elevated px-4 py-2.5 shadow-card"
              >
                <p className="text-xs font-medium text-ink">Fale com a G-TECH</p>
                <p className="text-[10px] text-ink-muted">Resposta rápida no WhatsApp</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a G-TECH no WhatsApp"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-button-primary transition-shadow hover:shadow-button-primary-hover"
          >
            {/* Pulse ring */}
            <span
              className="absolute inset-0 rounded-full bg-primary animate-ping-slow opacity-30"
              aria-hidden="true"
            />
            <MessageCircle className="relative h-6 w-6 text-bg" aria-hidden="true" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
