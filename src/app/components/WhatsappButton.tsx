import React from "react";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <Link href="https://wa.me/+628119001009" target="_blank">
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg">
          <FaWhatsapp className="w-6 h-6" />
        </div>
      </div>
    </Link>
  );
};

export default WhatsappButton;
