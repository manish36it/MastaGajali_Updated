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

    const text = raw.toLowerCase();
    if (text.includes("kya") || text.includes("khana") || text.includes("thali") || text.includes("samay")) {
      return "hindi";
    }

    return "english";
  };

  const getBotReply = (raw: string): string => {
    const text = raw.toLowerCase();
    const lang = getLanguage(raw);

    const wrap = (mr: string, hi: string, en: string) => {
      if (lang === "marathi") return mr;
      if (lang === "hindi") return hi;
      return en;
    };

    if (text.includes("popular") || text.includes("best") || text.includes("recommend") || text.includes("famous")) {
      return wrap(
        "आपले सर्वात लोकप्रिय पदार्थ:\n- बॉम्बील फ्राय, क्रॅब मसाला, कोलंबी भात (Kolambi Bhat)\n- कोम्बडी वडे, मटण भाकरी थाळी\n- सोलकढी आणि मसाला छास – भारी कॉम्बो! 😋",
        "हमारे सबसे मशहूर डिश:\n- बॉम्बिल फ्राई, क्रैब मसाला, कोलंबी भात (झींगा राइस)\n- कोम्बडी वड़े और मटन भाकरी थाली\n- सोलकड़ी और मसाला छास – परफेक्ट कॉम्बो! 😋",
        "Our most loved dishes:\n- Bombil Fry, Crab Masala, Kolambi Bhat (Prawns Rice)\n- Kombdi Vade & Mutton Bhakri Thali\n- Solkadi and Masala Chaas to cool everything down. 😋"
      );
    }

    if (text.includes("thali")) {
      return wrap(
        "थाळीसाठी सुचवणी:\n- नॉन‑व्हेज: सुरमई, प्रॉन्स, रावस, क्रॅब, कोम्बडी वडे, मटण भाकरी थाळी\n- व्हेज: स्पेशल व्हेज थाळी आणि रेग्युलर व्हेज थाळी\nफ्रेश फिशसाठी येताना आजचा कॅच नक्की विचारा!",
        "थाली के लिए सजेशन:\n- नॉन‑वेज: सुरमई, प्रॉन्स, रावस, क्रैब, कोम्बडी वड़े, मटन भाकरी थाली\n- वेज: स्पेशल वेज थाली और रेग्युलर वेज थाली\nफ्रेश फिश के लिए आज का ‘कैच ऑफ द डे’ ज़रूर पूछिए।",
        "Thali recommendations:\n- Non‑veg: Surmai, Prawns, Rawas, Crab, Kombdi Vade, Mutton Bhakri Thali\n- Veg: Special Veg Thali & Veg Thali\nAsk for today’s fresh catch when you visit!"
      );
    }

    if (text.includes("special") || text.includes("today")) {
      return wrap(
        "आजचे स्पेशल बहुतेक वेळा – वरण भात साजूक तूप, स्टफ क्रॅब, कोम्बडी वडे आणि सीझनल फिश.\nमेनूतील “Today’s Special” आणि “Special Thali” सेक्शन नक्की बघा.",
        "आज के स्पेशल में अक्सर – वरण–भात साजूक घी के साथ, स्टफ्ड क्रैब, कोम्बडी वड़े और सीज़नल फिश रहती है।\nमे뉴 में “Today’s Special” और “Special Thali” सेक्शन देखिए।",
        "Today’s specials often include Varan Bhaat Sajuk Tuup, Stuffed Crab, Kombdi Vade and seasonal fish.\nCheck the ‘Today’s Special’ and ‘Special Thali’ sections on the Menu page for full details."
      );
    }

    if (text.includes("time") || text.includes("open") || text.includes("hours") || text.includes("timing")) {
      return wrap(
        "आमचे वेळः दररोज 12–4 pm आणि 7–11:30 pm.",
        "हमारा टाइमिंग: रोज 12–4 pm और 7–11:30 pm खुला रहता है।",
        "We are open every day from 12–4 pm and 7–11:30 pm."
      );
    }

    if (text.includes("where") || text.includes("address") || text.includes("location") || text.includes("direction")) {
      return wrap(
        "आमचा पत्ता:\nShop No.1, Galaxy co‑op hsg ltd,\nRambhau Bhogle Marg, Ghodapdeo,\nMazgaon, Mumbai 400010.\n‘Visit Us’ सेक्शनमधील नकाशा बघा.",
        "हमारा पता:\nShop No.1, Galaxy co‑op hsg ltd,\nRambhau Bhogle Marg, Ghodapdeo,\nMazgaon, Mumbai 400010.\nसाइट पर ‘Visit Us’ में मैप भी है।",
        "We are at:\nShop No.1, Galaxy co‑op hsg ltd,\nRambhau Bhogle Marg, Ghodapdeo,\nMazgaon, Mumbai, Maharashtra 400010.\nTap ‘Visit Us’ on the site to see the live map."
      );
    }

    if (text.includes("price") || text.includes("cost") || text.includes("per person") || text.includes("budget")) {
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

    if (text.includes("thali")) {
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
        className="fixed bottom-6 right-4 md:right-6 z-40 rounded-full bg-gradient-to-r from-golden via-primary to-golden p-[2px] shadow-[0_18px_50px_rgba(0,0,0,0.65)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="flex items-center gap-2 rounded-full bg-[hsl(20,15%,8%)] px-3 py-1.5 md:px-4 md:py-2">
          <motion.div
            className="relative h-8 w-8 rounded-full border border-golden/60 bg-black/40 overflow-hidden"
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
            className="fixed bottom-4 right-2 md:right-6 z-40 w-[min(360px,90vw)]"
          >
            <div className="rounded-3xl border border-golden/35 bg-[hsl(20,15%,6%/0.98)] backdrop-blur-xl shadow-[0_24px_70px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col max-h-[70vh]">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-golden/25 bg-gradient-to-r from-[hsl(20,15%,10%)] via-[hsl(20,15%,8%)] to-[hsl(20,15%,10%)]">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <motion.div
                      className="h-8 w-8 rounded-full border border-golden/60 bg-black/40 overflow-hidden"
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
                  className="rounded-full p-1.5 hover:bg-golden/15 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2 bg-[radial-gradient(circle_at_0_0,hsl(38_85%_40%_/_0.15),transparent_55%),radial-gradient(circle_at_100%_0,hsl(10_80%_55%_/_0.12),transparent_55%)]">
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {quickCommandBar.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => handleUserMessage(item.query)}
                      className="rounded-full border border-golden/35 bg-[hsl(20,15%,12%)] px-2.5 py-1 text-[10px] text-primary-foreground/85 hover:bg-golden/20 hover:border-golden/60 transition-colors"
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
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : "bg-[hsl(20,15%,12%)] text-primary-foreground/90 rounded-bl-sm border border-golden/25"
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
                              className="rounded-full border border-golden/35 bg-[hsl(20,15%,10%)] px-2.5 py-1 text-[10px] text-golden/95 hover:bg-golden/15 transition-colors"
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
                    <div className="rounded-2xl rounded-bl-sm bg-[hsl(20,15%,12%)] border border-golden/25 px-3 py-2">
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
                className="flex items-center gap-2 px-3 py-2 border-t border-border/60 bg-[hsl(20,15%,8%)]"
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
                  className="flex-1 rounded-full bg-[hsl(20,15%,4%)] border border-border/60 px-3 py-2 text-xs font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-1 focus:ring-golden/60"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="inline-flex items-center justify-center rounded-full bg-golden text-accent-foreground p-2 hover:bg-golden/90 transition-colors"
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

