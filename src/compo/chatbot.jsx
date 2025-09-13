// src/components/ChatbotPopup.jsx

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';

// --- ICONS ---
const SendIcon = () => (<svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>);
const ClearChatIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-80 hover:opacity-100"><path d="M3 6h18" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M10 11v6" /><path d="M14 11v6" /></svg>);
const CallIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-80 hover:opacity-100"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>);
const ChatIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>);
const CloseIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>);
const LeftArrow = () => (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
  id="left"
  data-name="Flat Color"
  className="icon flat-color"
>
  <path
    id="primary"
    d="M21,11H5.41l5.3-5.29A1,1,0,1,0,9.29,4.29l-7,7a1,1,0,0,0,0,1.42l7,7a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,13H21a1,1,0,0,0,0-2Z"
    style={{
      fill: "rgba(255, 255, 255, 1)",
    }}
  />
</svg>)
const FileIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>);
const CopyIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>);

const MicIcon = ({ isListening }) => (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isListening ? "text-red-500" : "text-white"}><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>);

// --- CHATBOT COMPONENT ---
const Chatbot = () => {
  const BACKEND_URL = 'http://127.0.0.1:8000';
  // const BACKEND_URL = 'https://backend-3j4r.onrender.com';

  const initialMessage = { sender: 'bot', text: "👋 Hi! I’m Man's assistant. Ask me anything about Man's experience.", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), suggestions: ["What are your skills?", "Tell me about your projects", "Walk me through your resume"] };
  const [messages, setMessages] = useState(() => {
    try {
      const savedMessages = localStorage.getItem('chatHistory');
      return savedMessages ? JSON.parse(savedMessages) : [initialMessage];
    } catch (error) {
      console.error("Failed to parse chat history:", error);
      return [initialMessage];
    }
  });
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [showHireForm, setShowHireForm] = useState(false);
  const [hireDetails, setHireDetails] = useState({ name: '', email: '', message: '' });
  const [showVoiceCall, setShowVoiceCall] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState('Click the mic to start');
  const chatboxEndRef = useRef(null);
  const recognitionRef = useRef(null);

  const DocumentBubble = ({ data }) => {
    const { fileName, fileUrl, fileSize, fileType } = data;

    return (
      <div className="bg-[#005C4B] text-white p-3 rounded-lg max-w-[85%]">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <FileIcon />
          </div>
          <div className="flex-grow">
            <p className="font-bold break-all">{fileName}</p>
            <p className="text-xs text-white/80">{fileSize} · {fileType}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-px mt-3 bg-white/30 rounded-b-lg overflow-hidden">
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center py-2 bg-[#005C4B] hover:bg-[#027564] transition-colors"
          >
            Open
          </a>
          <a
            href={fileUrl}
            download={fileName}
            className="text-center py-2 bg-[#005C4B] hover:bg-[#027564] transition-colors"
          >
            Save as...
          </a>
        </div>
      </div>
    );
  };
  useEffect(() => {
    // We don't save if it's just the initial default message
    if (messages.length > 1) {
      localStorage.setItem('chatHistory', JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    chatboxEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const ImageRenderer = ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="mt-2 p-1 bg-gray-300 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
      onClick={() => setLightboxImage(src)} // This opens the lightbox
    />
  );

  useEffect(() => {
    chatboxEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // src/components/ChatbotPopup.jsx

  // src/components/ChatbotPopup.jsx
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // Optional: Show a "Copied!" notification
    }).catch(err => console.error('Failed to copy text: ', err));
  };

  const TypingIndicator = () => (
    <div className="flex items-center space-x-1.5">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
    </div>
  );
  // src/components/ChatbotPopup.jsx -> inside the Chatbot component
const displayFinalResponse = async (finalResponseString) => {
  const suggestionSeparator = '|||SUGGESTIONS|||';
  const suggestionIndex = finalResponseString.indexOf(suggestionSeparator);
  let textPart = finalResponseString;
  let suggestionsJson = '[]';

  if (suggestionIndex !== -1) {
    textPart = finalResponseString.substring(0, suggestionIndex);
    suggestionsJson = finalResponseString.substring(suggestionIndex + suggestionSeparator.length);
  }

  const messageBubbles = textPart.split('|||MSG|||').map(t => t.trim()).filter(Boolean);
  const parsedSuggestions = JSON.parse(suggestionsJson.trim() || '[]');

  setMessages(prev => {
    const updated = [...prev.slice(0, -1)]; // Remove placeholder
    const firstMessage = {
      sender: 'bot',
      text: messageBubbles[0] || "Sorry, I had trouble generating a response.",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: messageBubbles.length === 1 ? parsedSuggestions : [],
    };
    return [...updated, firstMessage];
  });

  for (let i = 1; i < messageBubbles.length; i++) {
    await new Promise(res => setTimeout(res, 600));
    const isLastBubble = i === messageBubbles.length - 1;
    const nextMessage = {
      sender: 'bot',
      text: messageBubbles[i],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: isLastBubble ? parsedSuggestions : [],
    };
    setMessages(prev => [...prev, nextMessage]);
  }
};

const sendMessage = async (messageText, isFromVoice = false) => {
  if (!messageText.trim()) return;

  const userMessage = {
    sender: 'user',
    text: messageText,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  const botPlaceholder = {
    sender: 'bot',
    text: '...',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    suggestions: []
  };

  const newMessages = isFromVoice ? [initialMessage, userMessage] : [...messages, userMessage];
  setMessages([...newMessages, botPlaceholder]);
  setInput('');
  setLoading(true);

  try {
    const response = await fetch(`${BACKEND_URL}/api/chat/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ history: newMessages }),
    });

    if (!response.body) throw new Error("No response body");

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullResponse = '';

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      fullResponse += decoder.decode(value, { stream: true });
    }

    // TOOL CALL: GitHub Activity
    if (fullResponse.includes('[TOOL_CALL:GET_LATEST_COMMIT]')) {
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          text: "Fetching latest activity from GitHub..."
        };
        return updated;
      });

      const activityResponse = await axios.get(`${BACKEND_URL}/api/github-activity/`);
      const activityText = activityResponse.data.activity;

      const historyForFollowUp = [
        ...newMessages,
        { role: "model", parts: [{ text: "[TOOL_CALL:GET_LATEST_COMMIT]" }] },
        {
          role: "user",
          parts: [{
            text: `Here is the result of your tool request [GET_LATEST_COMMIT]:\n\n${activityText}\n\nPlease turn this into a friendly, human-style reply. **Include suggestions as you normally would.**`

          }]
        }
      ];

      const followUpResponse = await fetch(`${BACKEND_URL}/api/chat/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history: historyForFollowUp }),
      });

      const followUpReader = followUpResponse.body.getReader();
      let finalFullResponse = '';
      while (true) {
        const { value, done } = await followUpReader.read();
        if (done) break;
        finalFullResponse += decoder.decode(value, { stream: true });
      }
      fullResponse = finalFullResponse;
    }

    // TOOL CALL: Latest Articles
    else if (fullResponse.includes('[TOOL_CALL:GET_LATEST_ARTICLES]')) {
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          text: "Fetching my latest articles..."
        };
        return updated;
      });

      const articlesResponse = await axios.get(`${BACKEND_URL}/api/articles/`);
      const articlesText = articlesResponse.data.articles;

      const historyForFollowUp = [
        ...newMessages,
        { role: "model", parts: [{ text: "[TOOL_CALL:GET_LATEST_ARTICLES]" }] },
        {
          role: "user",
          parts: [{
            text: `Here are my latest articles:\n${articlesText}\nPlease present them to me in a friendly, conversational way. **Remember to follow all original formatting rules, including providing suggestions.**`
          }]
        }
      ];

      const followUpResponse = await fetch(`${BACKEND_URL}/api/chat/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history: historyForFollowUp }),
      });

      const followUpReader = followUpResponse.body.getReader();
      let finalFullResponse = '';
      while (true) {
        const { value, done } = await followUpReader.read();
        if (done) break;
        finalFullResponse += decoder.decode(value, { stream: true });
      }
      fullResponse = finalFullResponse;
    }

    // Display response (whether tool call or not)
    await displayFinalResponse(fullResponse);

    if (fullResponse.includes("please provide your name, email")) {
      setShowHireForm(true);
    }

    if (isFromVoice) {
      const plainText = fullResponse.split('|||SUGGESTIONS|||')[0]?.replace(/\|\|\|MSG\|\|\|/g, '\n') ?? '';
      speakText(plainText);
    }

  } catch (error) {
    console.error("API Error:", error);
    setMessages(prev => {
      const updated = [...prev.slice(0, -1)];
      const errorBotMessage = { ...botPlaceholder, text: "⚠️ Oops! Something went wrong." };
      return [...updated, errorBotMessage];
    });
  } finally {
    setLoading(false);
  }
};

const handleHireSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    await axios.post(`${BACKEND_URL}/api/hire/`, hireDetails);
    setShowHireForm(false);
    const confirmationMsg = {
      sender: 'bot',
      text: "Thank you! Your request has been sent. Mann will get back to you shortly.",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, confirmationMsg]);
  } catch (error) {
    console.error("Hiring Form Error:", error);
  } finally {
    setLoading(false);
    setHireDetails({ name: '', email: '', message: '' });
  }
};

const handleSuggestionClick = (suggestion) => { sendMessage(suggestion); };
const handleKeyDown = (e) => { if (e.key === 'Enter') { e.preventDefault(); sendMessage(input); } };
const handleClearChat = () => { setMessages([initialMessage]); };

const lastMessage = messages[messages.length - 1];

return (
  <div className="w-full h-full flex flex-col rounded-lg shadow-2xl font-sans bg-white relative">
    {/* Header */}
    <div className="bg-[#075E54] text-white p-3 flex items-center justify-between rounded-t-lg">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-[#128C7E] flex items-center justify-center font-bold text-xl mr-3">M</div>
        <div><div className="font-bold">Man's Assistant</div><div className="text-xs opacity-80">{loading ? 'Typing...' : 'online'}</div></div>
      </div>
      <div className="flex items-center gap-2">
        {/* <button onClick={() => setShowVoiceCall(true)} title="Start Voice Call"><CallIcon /></button> */}
        <button onClick={handleClearChat} title="Clear Chat"><ClearChatIcon /></button>
      </div>
    </div>
    {/* Chatbox */}
    <div className="flex-1 p-3 overflow-y-auto bg-gray-200" style={{ backgroundImage: `url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')` }}>
      <AnimatePresence>
        {messages.map((msg, index) => {
          const prevMessage = messages[index - 1];
          const nextMessage = messages[index + 1];
          const isFirstInGroup = !prevMessage || prevMessage.sender !== msg.sender;
          const isLastInGroup = !nextMessage || nextMessage.sender !== msg.sender;
          let cornerClasses = '';

          let isDocument = msg.text.startsWith('[DOCUMENT:');
          let docData = null;
          if (isDocument) {
            try {
              // Extract and parse the JSON from the tag
              const jsonString = msg.text.substring(10, msg.text.length - 1);
              docData = JSON.parse(jsonString);
            } catch (e) {
              console.error("Failed to parse document JSON", e);
              isDocument = false; // Fallback to rendering as text if parsing fails
            }
          }
          if (msg.sender === 'user') {
            if (isFirstInGroup && isLastInGroup) cornerClasses = 'rounded-2xl'; else if (isFirstInGroup) cornerClasses = 'rounded-t-2xl rounded-bl-2xl'; else if (isLastInGroup) cornerClasses = 'rounded-b-2xl rounded-tl-2xl'; else cornerClasses = 'rounded-l-2xl';
          } else { if (isFirstInGroup && isLastInGroup) cornerClasses = 'rounded-2xl'; else if (isFirstInGroup) cornerClasses = 'rounded-t-2xl rounded-br-2xl'; else if (isLastInGroup) cornerClasses = 'rounded-b-2xl rounded-tr-2xl'; else cornerClasses = 'rounded-r-2xl'; }
          const bgColor = msg.sender === 'user' ? 'bg-[#DCF8C6]' : 'bg-white';
          const margin = isLastInGroup ? 'mb-2' : 'mb-0.5';
          if (msg.sender === 'bot' && msg.text === '...' && !loading) return null;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`flex ${margin} ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {isDocument ? (
                <DocumentBubble data={docData} />
              ) : (
                <div className={`py-2 px-3 max-w-[80%] shadow-sm ${bgColor} ${cornerClasses}`}>
                  {loading && msg.sender === 'bot' && msg.text === '...' ? (
                    <TypingIndicator />
                  ) : (
                    <button
                      onClick={() => handleCopy(msg.text)}
                      className="absolute top-1 right-1 p-1.5 bg-gray-200 rounded-full text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Copy text"
                    >
                      <CopyIcon />
                    </button>
                  )}
                  <div className="prose prose-sm max-w-none">
                    <ReactMarkdown
                      components={{
                        a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline" />,

                        img: ImageRenderer
                      }}
                    >
                      {msg.text || '...'}
                    </ReactMarkdown>
                  </div>
                  {msg.text && msg.text !== '...' && <p className="text-right text-[10px] text-gray-500 mt-1">{msg.time}</p>}
                </div>)}
            </motion.div>
          );
        })}
      </AnimatePresence>
      <div ref={chatboxEndRef} />
    </div>

    {/* Hiring Form Modal */}
    <AnimatePresence>
      {showHireForm && (
        <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="p-4 bg-white border-t-2 border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Hiring Request</h3>
          <form onSubmit={handleHireSubmit}>
            <input type="text" placeholder="Your Name" value={hireDetails.name} onChange={(e) => setHireDetails({ ...hireDetails, name: e.target.value })} required className="w-full p-2 mb-2 border rounded" />
            <input type="email" placeholder="Your Email" value={hireDetails.email} onChange={(e) => setHireDetails({ ...hireDetails, email: e.target.value })} required className="w-full p-2 mb-2 border rounded" />
            <textarea placeholder="Project details..." value={hireDetails.message} onChange={(e) => setHireDetails({ ...hireDetails, message: e.target.value })} required className="w-full p-2 mb-3 border rounded h-24"></textarea>
            <div className="flex justify-end gap-2">
              <button type="button" onClick={() => setShowHireForm(false)} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-[#128C7E] text-white rounded">Send Request</button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
    {/* --- STEP 4: ADD THE LIGHTBOX JSX --- */}
    <AnimatePresence>
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)} // Close lightbox on background click
        >
          <motion.img
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            src={lightboxImage}
            alt="Lightbox view"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
          <button onClick={() => setLightboxImage(null)} className="absolute top-4 left-4 text-white border border-black p-2 bg-black rounded hover:opacity-80">
            <LeftArrow />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
    {/* --- UI RENDERING FIX IS HERE --- */}
    <AnimatePresence>
      {/* Remove `!loading` and check `lastMessage` directly for suggestions */}
      {!showHireForm && lastMessage?.sender === 'bot' && lastMessage?.suggestions?.length > 0 && (
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} transition={{ duration: 0.2 }} className="p-3 bg-gray-100 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {lastMessage.suggestions.map((q, i) => (
              <button key={i} onClick={() => handleSuggestionClick(q)} className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50">{q}</button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Input Area */}
    {!showHireForm && (
      <motion.div className="bg-gray-100 p-3 flex items-center rounded-b-lg">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Type a message..." className="flex-1 py-2 px-4 rounded-full border-none focus:ring-2 focus:ring-[#128C7E] outline-none" />
        <button onClick={() => sendMessage(input)} className="ml-3 w-11 h-11 bg-[#128C7E] rounded-full flex items-center justify-center text-white hover:bg-[#075E54] transition-colors"><SendIcon /></button>
      </motion.div>
    )}

  </div>
);
};

// --- POPOP COMPONENT (The main export) ---
const ChatbotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleChat = () => { setIsOpen(!isOpen); };
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.9 }} transition={{ duration: 0.3, ease: "easeOut" }} className="fixed bottom-24 right-5 z-50" style={{
            width: 'clamp(300px, 94vw, 950px)',
            height: 'clamp(600px, 83vh, 900px)',
          }} >
            <Chatbot />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={toggleChat} className="fixed bottom-5 right-5 w-16 h-16 bg-[#075E54] text-white rounded-full flex items-center justify-center shadow-xl z-50 cursor-pointer" title={isOpen ? "Close Chat" : "Open Chat"}>
        <AnimatePresence initial={false}>
          <motion.div key={isOpen ? 'close' : 'chat'} initial={{ opacity: 0, rotate: -30, scale: 0.5 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 30, scale: 0.5 }} transition={{ duration: 0.2 }}>
            {isOpen ? <CloseIcon /> : <ChatIcon />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default ChatbotPopup;