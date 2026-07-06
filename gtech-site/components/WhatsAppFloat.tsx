"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

/**
 * Botão flutuante de WhatsApp — requisito funcional presente em todas as páginas
 * para contato rápido, conforme documentação de projeto.
 */
export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/551140001234"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1 }}
      whileHover={{ scale: 1.06 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </motion.a>
  );
}
