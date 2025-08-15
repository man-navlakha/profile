// src/components/ChatbotPopup.jsx

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';

// --- ICONS ---
const SendIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
);

const ClearChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-80 hover:opacity-100">
        <path d="M3 6h18" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
    </svg>
);

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

// --- CHATBOT COMPONENT (Now inside the same file) ---
const Chatbot = () => {
    const initialMessage = { 
      sender: 'bot', 
      text: "👋 Hi! I’m your portfolio assistant. Ask me anything about Mann's experience.",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: ["What are your skills?", "Tell me about your projects", "I'd like to hire you"]
    };
  
    const [messages, setMessages] = useState([initialMessage]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const chatboxEndRef = useRef(null);
  
    const [showHireForm, setShowHireForm] = useState(false);
    const [hireDetails, setHireDetails] = useState({ name: '', email: '', message: '' });
  
    useEffect(() => {
      chatboxEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading]);
  
    const sendMessage = async (messageText) => {
        if (!messageText.trim()) return;
    
        const userMessage = { 
          sender: 'user', 
          text: messageText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
    
        const botPlaceholder = {
          sender: 'bot',
          text: '',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestions: []
        };
    
        const newMessages = [...messages, userMessage];
        setMessages([...newMessages, botPlaceholder]);
        setInput('');
        setLoading(true);
    
        try {
          const response = await fetch('https://backend-3j4r.onrender.com/api/chat/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ history: newMessages }),
          });
    
          if (!response.body) return;
    
          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          let fullResponse = '';
          const separator = '|||SUGGESTIONS|||';
    
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
    
            fullResponse += decoder.decode(value, { stream: true });
            
            const separatorIndex = fullResponse.indexOf(separator);
    
            if (separatorIndex !== -1) {
              const textPart = fullResponse.substring(0, separatorIndex);
              const suggestionsJson = fullResponse.substring(separatorIndex + separator.length);
    
              setMessages(prev => {
                const updated = [...prev];
                const lastMsg = updated[updated.length - 1];
                lastMsg.text = textPart;
                try {
                  if (suggestionsJson) {
                    lastMsg.suggestions = JSON.parse(suggestionsJson);
                  }
                } catch (e) { /* In case JSON is incomplete */ }
                return updated;
              });
            } else {
              setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1].text = fullResponse;
                return updated;
              });
            }
          }
    
          if (fullResponse.includes("please provide your name, email")) {
            setShowHireForm(true);
          }
    
        } catch (error) {
          console.error("Streaming API Error:", error);
          setMessages(prev => {
            const updated = [...prev];
            updated[updated.length - 1].text = "⚠️ Oops! Something went wrong.";
            return updated;
          });
        } finally {
          setLoading(false);
        }
    };
    
    const handleHireSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          await axios.post('https://backend-3j4r.onrender.com/api/hire/', hireDetails);
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
  
    const handleSuggestionClick = (suggestion) => {
      sendMessage(suggestion);
    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage(input);
      }
    };
  
    const handleClearChat = () => {
      setMessages([initialMessage]);
    };
  
    const lastMessage = messages[messages.length - 1];
  
    return (
      <div className="w-full h-full flex flex-col rounded-lg shadow-2xl font-sans bg-white">
        {/* Header */}
        <motion.div 
          className="bg-[#075E54] text-white p-3 flex items-center justify-between rounded-t-lg"
        >
          <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#128C7E] flex items-center justify-center font-bold text-xl mr-3">M</div>
              <div>
                  <div className="font-bold">Mann's Assistant</div>
                  <div className="text-xs opacity-80">online</div>
              </div>
          </div>
          <button onClick={handleClearChat} title="Clear Chat">
              <ClearChatIcon />
          </button>
        </motion.div>
  
        {/* Chatbox */}
        <div className="flex-1 p-3 overflow-y-auto bg-gray-200" style={{ backgroundImage: `url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')` }}>
          <AnimatePresence>
            {messages.map((msg, index) => {
              const prevMessage = messages[index - 1];
              const nextMessage = messages[index + 1];
  
              const isFirstInGroup = !prevMessage || prevMessage.sender !== msg.sender;
              const isLastInGroup = !nextMessage || nextMessage.sender !== msg.sender;
  
              let cornerClasses = '';
              if (msg.sender === 'user') {
                if (isFirstInGroup && isLastInGroup) cornerClasses = 'rounded-2xl';
                else if (isFirstInGroup) cornerClasses = 'rounded-t-2xl rounded-bl-2xl';
                else if (isLastInGroup) cornerClasses = 'rounded-b-2xl rounded-tl-2xl';
                else cornerClasses = 'rounded-l-2xl';
              } else {
                if (isFirstInGroup && isLastInGroup) cornerClasses = 'rounded-2xl';
                else if (isFirstInGroup) cornerClasses = 'rounded-t-2xl rounded-br-2xl';
                else if (isLastInGroup) cornerClasses = 'rounded-b-2xl rounded-tr-2xl';
                else cornerClasses = 'rounded-r-2xl';
              }
              
              const bgColor = msg.sender === 'user' ? 'bg-[#DCF8C6]' : 'bg-white';
              const margin = isLastInGroup ? 'mb-2' : 'mb-0.5';
  
              if (msg.sender === 'bot' && !msg.text && !loading) return null;
  
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`flex ${margin} ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`py-2 px-3 max-w-[80%] shadow-sm ${bgColor} ${cornerClasses}`}>
                    <div className="prose prose-sm max-w-none">
                      <ReactMarkdown
                        components={{
                          a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline" />
                        }}
                      >
                        {msg.text || '...'}
                      </ReactMarkdown>
                    </div>
                    {msg.text && <p className="text-right text-[10px] text-gray-500 mt-1">{msg.time}</p>}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          <div ref={chatboxEndRef} />
        </div>
  
        {/* Hiring Form Modal */}
        <AnimatePresence>
          {showHireForm && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="p-4 bg-white border-t-2 border-gray-200"
            >
              <h3 className="text-lg font-semibold mb-2">Hiring Request</h3>
              <form onSubmit={handleHireSubmit}>
                <input type="text" placeholder="Your Name" value={hireDetails.name} onChange={(e) => setHireDetails({...hireDetails, name: e.target.value})} required className="w-full p-2 mb-2 border rounded"/>
                <input type="email" placeholder="Your Email" value={hireDetails.email} onChange={(e) => setHireDetails({...hireDetails, email: e.target.value})} required className="w-full p-2 mb-2 border rounded"/>
                <textarea placeholder="Project details..." value={hireDetails.message} onChange={(e) => setHireDetails({...hireDetails, message: e.target.value})} required className="w-full p-2 mb-3 border rounded h-24"></textarea>
                <div className="flex justify-end gap-2">
                  <button type="button" onClick={() => setShowHireForm(false)} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-[#128C7E] text-white rounded">Send Request</button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
  
        {/* Suggested Questions */}
        <AnimatePresence>
          {!loading && !showHireForm && lastMessage.sender === 'bot' && lastMessage.suggestions && lastMessage.suggestions.length > 0 && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="p-3 bg-gray-100 border-t border-gray-200"
            >
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
          <motion.div 
            className="bg-gray-100 p-3 flex items-center rounded-b-lg"
          >
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Type a message..." className="flex-1 py-2 px-4 rounded-full border-none focus:ring-2 focus:ring-[#128C7E] outline-none"/>
            <button onClick={() => sendMessage(input)} className="ml-3 w-11 h-11 bg-[#128C7E] rounded-full flex items-center justify-center text-white hover:bg-[#075E54] transition-colors"><SendIcon /></button>
          </motion.div>
        )}
      </div>
    );
};


// --- POPOP COMPONENT (The main export) ---
const ChatbotPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed bottom-24 right-5 z-50"
                        style={{
                            width: 'clamp(300px, 90vw, 450px)', // Responsive width
                            height: 'clamp(400px, 80vh, 700px)' // Responsive height
                        }}
                    >
                        {/* We render the existing Chatbot component inside the popup */}
                        <Chatbot />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleChat}
                className="fixed bottom-5 right-5 w-16 h-16 bg-[#075E54] text-white rounded-full flex items-center justify-center shadow-xl z-50 cursor-pointer"
                title={isOpen ? "Close Chat" : "Open Chat"}
            >
                <AnimatePresence initial={false}>
                    <motion.div
                        key={isOpen ? 'close' : 'chat'}
                        initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 30, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isOpen ? <CloseIcon /> : <ChatIcon />}
                    </motion.div>
                </AnimatePresence>
            </motion.button>
        </>
    );
};

export default ChatbotPopup;
