import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import gajaliGuruAvatar from "@/assets/gajali-guru.png";

type QuickPrompt = {
  label: string;
  query: string;
};

type ChatMessage = {
  from: "user" | "bot";
  text: string;
  quickReplies?: QuickPrompt[];
};

const vegThaliLines = [
  "Special Veg Thali (₹290)",
  "Veg Thali (₹195)",
];

const nonVegThaliLines = [
  "Chicken Bhakri Thali (₹415)",
  "Chicken Vada Thali (₹490)",
  "Mutton Bhakri Thali (₹625)",
  "Egg Thali (₹270)",
  "Tisarya Thali (₹385)",
  "Surmai Thali (₹550)",
  "Prawns Thali (₹450)",
  "Rawas Thali (₹485)",
  "Pomfret Thali (₹680)",
  "Crab Thali (₹625)",
  "Bombil Thali (₹345)",
];

const initialMessages: ChatMessage[] = [
  {
    from: "bot",
    text: "नमस्कार! मी गजाली गुरु 👋 How can I help you today?",
    quickReplies: [
      { label: "Best Thali", query: "Which thali is best?" },
      { label: "Today Special", query: "What are today's specials?" },
      { label: "Location", query: "Where are you located?" },
    ],
  },
  {
    from: "bot",
    text: "You can ask me about today’s specials, thali recommendations, or directions to the restaurant.",
  },
];

const quickCommandBar: QuickPrompt[] = [
  { label: "Popular Dishes", query: "What are your popular dishes?" },
  { label: "Veg Options", query: "Suggest veg thali options" },
  { label: "Budget", query: "What is the average budget?" },
  { label: "Timings", query: "What are your opening hours?" },
];

const GajaliGuruBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, open]);

  const getLanguage = (raw: string): "marathi" | "hindi" | "english" => {
    // Detect Devanagari script
    if (/[ऀ-ॿ]/.test(raw)) {
      // Very rough separation: use a few Marathi/Hindi markers
      if (raw.includes("मी") || raw.includes("काय") || raw.includes("भूक")) {
        return "marathi";
      }
      return "hindi";
    }

    // For Roman text, always keep responses in English.
    return "english";
  };

  const getBotReply = (raw: string): string => {
    const text = raw.toLowerCase();
    const normalizedText = text.replace(/[‑–—]/g, "-");
    const lang = getLanguage(raw);
    const hasAny = (keywords: string[]) => keywords.some((k) => text.includes(k));

    const wrap = (mr: string, hi: string, en: string) => {
      if (lang === "marathi") return mr;
      if (lang === "hindi") return hi;
      return en;
    };

    const asksThali = hasAny(["thali", "थाली", "थाळी"]);
    const asksBestOrPopular = hasAny(["best", "popular", "recommend", "famous", "best thali", "top thali"]);
    const isNonVegThaliQuery =
      /\b(non\s*-?\s*veg|seafood|fish)\s+thali\b/.test(normalizedText) ||
      hasAny(["नॉन वेज", "नॉन-व्हेज", "नॉन‑व्हेज", "मासाहारी"]);
    const isVegThaliQuery =
      (/\b(veg|vegetarian)\s+thali\b/.test(normalizedText) ||
        hasAny(["veg options", "veg option", "शाकाहारी", "वेज", "शाकाहारी थाली"])) &&
      !isNonVegThaliQuery;

    if (isNonVegThaliQuery) {
      return wrap(
        `नॉन‑व्हेज थाळीचे अचूक पर्याय:\n- ${nonVegThaliLines.join("\n- ")}\nपहिल्यांदा येत असाल तर Surmai / Prawns / Crab थाळी छान choice आहे.`,
        `नॉन‑वेज थाली के सही विकल्प:\n- ${nonVegThaliLines.join("\n- ")}\nपहली बार आ रहे हों तो Surmai / Prawns / Crab थाली बढ़िया choice है।`,
        `Accurate non-veg thali options:\n- ${nonVegThaliLines.join("\n- ")}\nIf it’s your first visit, Surmai / Prawns / Crab thali is a great pick.`
      );
    }

    if (isVegThaliQuery) {
      return wrap(
        `व्हेज थाळीसाठी अचूक पर्याय:\n- ${vegThaliLines.join("\n- ")}\nसोबत Dal Fry / Dal Tadka + Solkadi छान कॉम्बो होतो.`,
        `वेज थाली के सही विकल्प:\n- ${vegThaliLines.join("\n- ")}\nसाथ में Dal Fry / Dal Tadka + Solkadi अच्छा कॉम्बो बनता है।`,
        `Accurate veg thali options:\n- ${vegThaliLines.join("\n- ")}\nPair with Dal Fry / Dal Tadka + Solkadi for a complete meal.`
      );
    }

    if (hasAny(["thali price", "price range", "thali rate", "thali cost", "थाली कीमत", "थाळी किंमत"])) {
      return wrap(
        "थाळी किंमत रेंज ₹195 ते ₹680 आहे (Special Thali सेक्शन).\n- Veg Thali ₹195\n- Special Veg Thali ₹290\n- Bombil Thali ₹345\n- Pomfret Thali ₹680\nNote: Masta Gajali Special Non Veg Thali ₹1,595 (Today’s Special).",
        "थाली कीमत ₹195 से ₹680 है (Special Thali सेक्शन)।\n- Veg Thali ₹195\n- Special Veg Thali ₹290\n- Bombil Thali ₹345\n- Pomfret Thali ₹680\nNote: Masta Gajali Special Non Veg Thali ₹1,595 (Today’s Special)।",
        "Thali prices are ₹195 to ₹680 in the Special Thali section.\n- Veg Thali ₹195\n- Special Veg Thali ₹290\n- Bombil Thali ₹345\n- Pomfret Thali ₹680\nNote: Masta Gajali Special Non Veg Thali is ₹1,595 (Today’s Special section)."
      );
    }

    if (asksThali && asksBestOrPopular) {
      return wrap(
        "थाळीसाठी best sellers:\n- Surmai Thali (₹550)\n- Prawns Thali (₹450)\n- Crab Thali (₹625)\n- Mutton Bhakri Thali (₹625)\n- Special Veg Thali (₹290)\nतुम्हाला व्हेज की नॉन‑व्हेज recommendation हवी ते सांगा, मी एक best pick देतो.",
        "थाली में best sellers:\n- Surmai Thali (₹550)\n- Prawns Thali (₹450)\n- Crab Thali (₹625)\n- Mutton Bhakri Thali (₹625)\n- Special Veg Thali (₹290)\nआप वेज या नॉन‑वेज बताइए, मैं एक best pick बताता हूँ।",
        "Best-selling thali picks:\n- Surmai Thali (₹550)\n- Prawns Thali (₹450)\n- Crab Thali (₹625)\n- Mutton Bhakri Thali (₹625)\n- Special Veg Thali (₹290)\nTell me veg or non-veg and I’ll suggest one best pick for you."
      );
    }

    if (hasAny(["popular", "best", "recommend", "famous"])) {
      return wrap(
        "आपले लोकप्रिय पदार्थ:\n- Bombil Fry, Prawns Fry, Crab Lollipop\n- Crab Masala, Kolambi Bhat, Chicken Biryani\n- Kombdi Vade, Mutton Bhakri Thali, Surmai Thali\n- Solkadi आणि Masala Chaas",
        "हमारे लोकप्रिय डिश:\n- Bombil Fry, Prawns Fry, Crab Lollipop\n- Crab Masala, Kolambi Bhat, Chicken Biryani\n- Kombdi Vade, Mutton Bhakri Thali, Surmai Thali\n- Solkadi और Masala Chaas",
        "Our popular dishes:\n- Bombil Fry, Prawns Fry, Crab Lollipop\n- Crab Masala, Kolambi Bhat, Chicken Biryani\n- Kombdi Vade, Mutton Bhakri Thali, Surmai Thali\n- Solkadi and Masala Chaas"
      );
    }

    if (asksThali) {
      return wrap(
        `थाळी पर्याय (अचूक मेनू):\nव्हेज:\n- ${vegThaliLines.join("\n- ")}\nनॉन‑व्हेज:\n- ${nonVegThaliLines.join("\n- ")}`,
        `थाली विकल्प (सही मेन्यू):\nवेज:\n- ${vegThaliLines.join("\n- ")}\nनॉन‑वेज:\n- ${nonVegThaliLines.join("\n- ")}`,
        `Thali options (accurate menu):\nVeg:\n- ${vegThaliLines.join("\n- ")}\nNon-veg:\n- ${nonVegThaliLines.join("\n- ")}`
      );
    }

    if (hasAny(["special", "today", "आज", "aaj", "todays"])) {
      return wrap(
        "आजचे स्पेशल (मेनूनुसार):\n- Varan Bhaat Sajuk Tuup (₹170)\n- Kombdi Vade (₹290)\n- Amras Puri (₹310)\n- Stuff Crab (₹390)\n- Stuff Bombil (₹295)\n- Masta Gajali Special Non Veg Thali (₹1,595)",
        "आज के स्पेशल (मेन्यू के अनुसार):\n- Varan Bhaat Sajuk Tuup (₹170)\n- Kombdi Vade (₹290)\n- Amras Puri (₹310)\n- Stuff Crab (₹390)\n- Stuff Bombil (₹295)\n- Masta Gajali Special Non Veg Thali (₹1,595)",
        "Today’s specials (as per menu):\n- Varan Bhaat Sajuk Tuup (₹170)\n- Kombdi Vade (₹290)\n- Amras Puri (₹310)\n- Stuff Crab (₹390)\n- Stuff Bombil (₹295)\n- Masta Gajali Special Non Veg Thali (₹1,595)"
      );
    }

    if (hasAny(["time", "open", "hours", "timing", "samay", "कितने बजे", "वेळ", "timings"])) {
      return wrap(
        "आमचे वेळः दररोज 12–4 pm आणि 7–11:30 pm.",
        "हमारा टाइमिंग: रोज 12–4 pm और 7–11:30 pm खुला रहता है।",
        "We are open every day from 12–4 pm and 7–11:30 pm."
      );
    }

    if (hasAny(["where", "address", "location", "direction", "map", "kidhar", "कहाँ", "पता", "kuthe", "कुठे"])) {
      return wrap(
        "आमचा पत्ता:\nShop No. 1, 2, & 3, Malim House, Galaxy CHSL,\nRambhau Bhogle Marg, Mazgaon, Mumbai - 400033.\n‘Visit Us’ सेक्शनमध्ये नकाशा आहे.",
        "हमारा पता:\nShop No. 1, 2, & 3, Malim House, Galaxy CHSL,\nRambhau Bhogle Marg, Mazgaon, Mumbai - 400033.\n‘Visit Us’ सेक्शन में मैप उपलब्ध है।",
        "We are at:\nShop No. 1, 2, & 3, Malim House, Galaxy CHSL,\nRambhau Bhogle Marg, Mazgaon, Mumbai - 400033.\nSee the live map in the ‘Visit Us’ section."
      );
    }

    if (hasAny(["price", "cost", "per person", "budget", "kitna", "कितना", "किंमत", "rate"])) {
      return wrap(
        "बेसिक बजेट साधारण ₹400–600 प्रति व्यक्ती (थाळी आणि फिशनुसार बदलू शकते).",
        "औसत खर्च लगभग ₹400–600 प्रति व्यक्ति होता है (थाली और फिश के हिसाब से बदल सकता है)।",
        "Average spend is around ₹400–600 per person, depending on thalis and seafood you choose."
      );
    }

    if (text.includes("drink") || text.includes("solkadi") || text.includes("beverage") || text.includes("juice")) {
      return wrap(
        "पेयांमध्ये सोलकढी, कैरी पन्हा, कोकम सरबत आणि मसाला छास नक्की ट्राय करा – मालवणी जेवणासोबत परफेक्ट! 🥤",
        "ड्रिंक्स में सोलकड़ी, कैरी पन्हा, कोकम शरबत और मसाला छास ज़रूर ट्राय करें – मालवनी खाने के साथ परफेक्ट! 🥤",
        "For drinks, don’t miss Solkadi, Kairi Panha, Kokam Sharbat and Masala Chaas – perfect with Malwani food! 🥤"
      );
    }

    return wrap(
      "मी गजाली गुरु 🙂 मी तुला मदत करू शकतो:\n- पॉप्युलर डिशेस आणि आजचे स्पेशल\n- कोणती थाळी घ्यायची\n- वेळ, पत्ता आणि बजेट\nउदा. विचार: \"कोणती थाळी बेस्ट आहे?\"",
      "मैं गजाली गुरु 🙂 मैं आपकी मदद कर सकता हूँ:\n- पॉप्युलर डिश और आज के स्पेशल\n- कौन‑सी थाली लेना सही रहेगा\n- टाइमिंग, एड्रेस और बजट\nपूछकर देखिए: \"सबसे ज़्यादा मशहूर डिश कौन‑सी है?\"",
      "I’m Gajali Guru 🙂 I can help with:\n- Popular dishes and today’s specials\n- Which thali to pick\n- Timings, address and budget\nTry asking: “Which thali do you recommend?” or “What are your most popular dishes?”."
    );
  };

  const getFollowUpQuickReplies = (raw: string): QuickPrompt[] => {
    const text = raw.toLowerCase();

    if (text.includes("thali") || text.includes("थाली") || text.includes("थाळी")) {
      return [
        { label: "Non-veg thali", query: "Recommend best non veg thali" },
        { label: "Veg thali", query: "Recommend veg thali" },
        { label: "Price", query: "What is the thali price range?" },
      ];
    }

    if (text.includes("where") || text.includes("address") || text.includes("location")) {
      return [
        { label: "Opening hours", query: "What are your timings?" },
        { label: "Budget", query: "What is average cost?" },
        { label: "Popular food", query: "Which popular dish should I try?" },
      ];
    }

    if (text.includes("popular") || text.includes("best") || text.includes("recommend")) {
      return [
        { label: "Today special", query: "What is today's special?" },
        { label: "Drinks", query: "What drinks do you suggest?" },
        { label: "Table timing", query: "Best time to visit?" },
      ];
    }

    return [
      { label: "Specials", query: "Show today's specials" },
      { label: "Thali options", query: "Suggest thali options" },
      { label: "Directions", query: "How do I reach your restaurant?" },
    ];
  };

  const handleUserMessage = (rawInput: string) => {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setInput("");

    setIsTyping(true);
    window.setTimeout(() => {
      const botReply = getBotReply(trimmed);
      const followUps = getFollowUpQuickReplies(trimmed);
      setMessages((prev) => [...prev, { from: "bot", text: botReply, quickReplies: followUps }]);
      setIsTyping(false);
    }, 700);
  };

  const handleSend = () => {
    handleUserMessage(input);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        type="button"
        aria-label="Open Gajali Guru chatbot"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-4 md:right-6 z-40 rounded-full bg-gradient-to-r from-golden via-primary to-golden p-[2px] shadow-[0_20px_55px_rgba(0,0,0,0.7)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="relative flex items-center gap-2 rounded-full bg-[hsl(20,15%,8%)] px-3 py-1.5 md:px-4 md:py-2 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-golden/0 via-golden/20 to-golden/0"
            animate={{ x: ["-120%", "120%"] }}
            transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
          />
          <motion.div
            className="relative h-8 w-8 rounded-full border border-golden/60 bg-black/40 overflow-hidden shadow-[0_0_18px_hsl(var(--golden)/0.45)]"
            animate={{ rotate: [-4, 4, -4] }}
            transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1 }}
          >
            <img
              src={gajaliGuruAvatar}
              alt="Gajali Guru avatar"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <span className="hidden md:inline text-xs font-body text-primary-foreground">
            Chat with <span className="font-semibold text-golden">Gajali Guru</span>
          </span>
          <MessageCircle className="h-4 w-4 text-golden hidden md:inline" />
        </div>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: "spring", damping: 18 }}
            className="fixed bottom-20 md:bottom-4 right-2 md:right-6 z-40 w-[min(380px,92vw)]"
          >
            <div className="relative rounded-3xl border border-amber-500/35 bg-[#1a120a]/98 backdrop-blur-xl shadow-[0_24px_70px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col max-h-[65vh] md:max-h-[72vh]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0_0,hsl(38_85%_55%_/_0.14),transparent_38%),radial-gradient(circle_at_100%_100%,hsl(10_80%_55%_/_0.12),transparent_42%)]" />
              {/* Header */}
              <div className="relative z-10 flex items-center justify-between px-4 py-3 border-b border-amber-500/25 bg-gradient-to-r from-[#1a120a] via-[#150f0a] to-[#1a120a]">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <motion.div
                      className="h-8 w-8 rounded-full border border-golden/60 bg-black/40 overflow-hidden shadow-[0_0_16px_hsl(var(--golden)/0.4)]"
                      animate={{ rotate: [-5, 5, -5] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    >
                      <img
                        src={gajaliGuruAvatar}
                        alt="Gajali Guru avatar"
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                    <motion.div
                      className="absolute -top-1 -right-2 rounded-full bg-golden px-1.5 py-0.5 text-[9px] font-body text-[hsl(20,15%,8%)] shadow-sm"
                      animate={{ y: [0, -2, 0], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.2 }}
                    >
                      नमस्कार
                    </motion.div>
                  </div>
                  <div>
                    <p className="font-display text-sm text-primary-foreground leading-tight">
                      Gajali Guru
                    </p>
                    <p className="font-body text-[10px] text-golden/90 flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Interactive Malwani menu guide
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full p-1.5 hover:bg-golden/15 text-primary-foreground/70 hover:text-primary-foreground transition-colors border border-transparent hover:border-golden/35"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Messages */}
              <div className="relative z-10 flex-1 overflow-y-auto px-3 py-3 space-y-2 bg-[radial-gradient(circle_at_0_0,hsl(38_85%_40%_/_0.15),transparent_55%),radial-gradient(circle_at_100%_0,hsl(10_80%_55%_/_0.12),transparent_55%)]">
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {quickCommandBar.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => handleUserMessage(item.query)}
                      className="rounded-full border border-golden/35 bg-[linear-gradient(135deg,hsl(20,15%,14%),hsl(20,15%,10%))] px-2.5 py-1 text-[10px] text-primary-foreground/90 hover:bg-golden/20 hover:border-golden/60 transition-all hover:-translate-y-[1px]"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {messages.map((msg, index) => (
                  <div
                    key={`${msg.from}-${index}-${msg.text.slice(0, 8)}`}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className="max-w-[84%]">
                      <div
                        className={`rounded-2xl px-3 py-2 text-xs font-body leading-relaxed whitespace-pre-line ${
                        msg.from === "user"
                          ? "bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--golden)))] text-[hsl(20,15%,8%)] rounded-br-sm shadow-[0_10px_24px_hsl(var(--primary)/0.35)]"
                          : "bg-[hsl(20,15%,12%/0.92)] text-primary-foreground/90 rounded-bl-sm border border-golden/25 shadow-[0_8px_20px_rgba(0,0,0,0.28)]"
                      }`}
                      >
                        {msg.text}
                      </div>

                      {msg.from === "bot" && msg.quickReplies?.length ? (
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {msg.quickReplies.map((prompt) => (
                            <button
                              key={`${index}-${prompt.label}`}
                              type="button"
                              onClick={() => handleUserMessage(prompt.query)}
                              className="rounded-full border border-golden/35 bg-[linear-gradient(135deg,hsl(20,15%,11%),hsl(20,15%,8%))] px-2.5 py-1 text-[10px] text-golden/95 hover:bg-golden/15 transition-all hover:-translate-y-[1px]"
                            >
                              {prompt.label}
                            </button>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl rounded-bl-sm bg-[hsl(20,15%,12%)] border border-golden/25 px-3 py-2 shadow-[0_8px_18px_rgba(0,0,0,0.28)]">
                      <div className="flex items-center gap-1">
                        <motion.span
                          className="h-1.5 w-1.5 rounded-full bg-golden"
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                        />
                        <motion.span
                          className="h-1.5 w-1.5 rounded-full bg-golden"
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0.15 }}
                        />
                        <motion.span
                          className="h-1.5 w-1.5 rounded-full bg-golden"
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form
                className="relative z-10 flex items-center gap-2 px-3 py-2 border-t border-border/60 bg-[hsl(20,15%,8%)]"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Gajali Guru about thalis, specials..."
                  className="flex-1 rounded-full bg-[hsl(20,15%,4%)] border border-golden/25 px-3 py-2 text-xs font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-1 focus:ring-golden/60 focus:border-golden/60"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,hsl(var(--golden)),hsl(var(--primary)))] text-[hsl(20,15%,8%)] p-2 hover:brightness-110 transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GajaliGuruBot;

