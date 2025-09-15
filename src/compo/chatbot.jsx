// src/components/ChatbotPopup.jsx

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';

// --- ICONS (Removed CallIcon and MicIcon) ---
const SendIcon = () => (<svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>);
const PulseIcon = () => (<svg
  fill="#000000"
  width="30"
  height="30"
  viewBox="0 0 24 24"
  id="plus"
  data-name="Line Color"
  xmlns="http://www.w3.org/2000/svg"
  className="icon line-color"
>
  <path
    id="primary"
    d="M5,12H19M12,5V19"
    style={{
      fill: "none",
      stroke: "rgb(0, 0, 0)",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
    }}
  />
</svg>);
const ClearChatIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-80 hover:opacity-100"><path d="M3 6h18" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M10 11v6" /><path d="M14 11v6" /></svg>);
const ChatIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>);
const CloseIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>);
const LeftArrow = () => (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" id="left" data-name="Flat Color" className="icon flat-color"><path id="primary" d="M21,11H5.41l5.3-5.29A1,1,0,1,0,9.29,4.29l-7,7a1,1,0,0,0,0,1.42l7,7a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,13H21a1,1,0,0,0,0-2Z" style={{ fill: "rgba(0, 0, 0, 1)" }} /></svg>);
const FileIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>);
const CopyIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>);

// --- CHATBOT COMPONENT ---
const Chatbot = () => {
  // const BACKEND_URL = 'http://127.0.0.1:8000';
   const BACKEND_URL = 'https://backend-3j4r.onrender.com';

  const initialMessage = { sender: 'bot', text: "👋 Hi! I’m Man's assistant. Ask me anything about Man's experience.", time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }), suggestions: ["What are your skills?", "Tell me about your projects", "Walk me through your resume"] };
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
  const chatboxEndRef = useRef(null);

  const DocumentBubble = ({ data }) => {
    const { fileName, fileUrl, fileSize, fileType, time } = data;

    return (
      <motion.div
        className="bg-emerald-600 text-white p-2 text-right text-xs  rounded-xl max-w-[95%] shadow-lg hover:shadow-xl"
      >
        <div className='bg-white/20 p-3 rounded-xl text-md backdrop-blur-sm' >


          <div className="flex text-left items-center gap-3">
            <motion.div
              className=" p-1 rounded-xl"
            >
              <FileIcon />
            </motion.div>
            <div className="flex-grow text-md ">
              <p className="font-semibold break-all">{fileName}</p>
              <p className="text-xs text-white/80">{fileSize}, {fileType}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 border-t pt-2 gap-2 mt-4">

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={fileUrl}
              download={fileName}
              className="text-center py-2.5 bg-white/20 backdrop-blur-sm text-md hover:bg-white/30 transition-all duration-200 rounded-lg font-medium"
            >
              Download
            </motion.a>
          </div>
        </div>
        {time}
      </motion.div>
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
      className="mt-2 h-64 p-1 bg-gray-300 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
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

  const TypingIndicator = () => {
    return (
      <div class="flex flex-row gap-2 p-4">
        <div class="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
        <div
          class="w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-.3s]"
        ></div>
        <div
          class="w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-.5s]"
        ></div>
      </div>
    );
  };
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
        time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }),
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
        time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }),
        suggestions: isLastBubble ? parsedSuggestions : [],
      };
      setMessages(prev => [...prev, nextMessage]);
    }
  };






  // ================================
  // ----- MAIN PART ----------------
  // ================================


  const sendMessage = async (messageText, isFromVoice = false) => {
    if (!messageText.trim()) return;

    const userMessage = {
      sender: 'user',
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })
    };

    const botPlaceholder = {
      sender: 'bot',
      text: '...',
      time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }),
      suggestions: []
    };


    const newMessages = [...messages, userMessage];
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




      // TOOL CALL: Generate Sticker
      if (fullResponse.includes('[TOOL_CALL:GENERATE_STICKER:')) {
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1].text = "Creating a little something for you...";
          return updated;
        });

        // Extract the JSON part of the tool call
        const jsonString = fullResponse.substring(fullResponse.indexOf('{'), fullResponse.lastIndexOf('}') + 1);
        const { prompt } = JSON.parse(jsonString);

        // Call your backend to generate the image and get a URL
        const imageGenResponse = await axios.post(`${BACKEND_URL}/api/generate-sticker/`, { prompt });
        const imageUrl = imageGenResponse.data.imageUrl;

        // Now, call the chat API again to formulate a response *with* the image
        const historyForFollowUp = [
          ...newMessages, // The original user message
          { role: "model", parts: [{ text: fullResponse }] }, // The model's decision to call the tool
          {
            role: "user", // A new user part explaining the tool's result
            parts: [{
              text: `Here is the sticker you requested: ${imageUrl}. Please present this sticker to the user in Markdown format (![sticker](${imageUrl})) along with your original friendly message. **Remember to follow all original formatting rules, including providing suggestions.**`
            }]
          }
        ];

        // This part is the same as your other tool calls
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
        time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })
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
          <button onClick={handleClearChat} title="Clear Chat"><ClearChatIcon /></button>
        </div>
      </div>


<div
  className="flex-1 p-4 overflow-y-auto bg-gray-100"
  style={{
    backgroundImage: `url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat'
  }}
>
  <AnimatePresence>
    {messages.map((msg, index) => {
      const prev = messages[index - 1];
      const next = messages[index + 1];

      const isFirst = !prev || prev.sender !== msg.sender;
      const isLast = !next || next.sender !== msg.sender;

      let isDocument = msg.text.startsWith('[DOCUMENT:');
      let docData = null;

      if (isDocument) {
        try {
          const jsonString = msg.text.slice(10, -1);
          docData = JSON.parse(jsonString);
        } catch (err) {
          console.error("Failed to parse document JSON", err);
          isDocument = false;
        }
      }

      const isUser = msg.sender === 'user';
      const alignment = isUser ? 'justify-end' : 'justify-start';

      const cornerStyles = isFirst && isLast
        ? 'rounded-2xl'
        : isFirst
        ? isUser
          ? 'rounded-t-2xl rounded-bl-2xl'
          : 'rounded-t-2xl rounded-br-2xl'
        : isLast
        ? isUser
          ? 'rounded-b-2xl rounded-tl-2xl'
          : 'rounded-b-2xl rounded-tr-2xl'
        : isUser
        ? 'rounded-l-2xl'
        : 'rounded-r-2xl';

      const bgColor = isUser ? 'bg-[#DCF8C6]' : 'bg-white text-black';
      const marginBottom = isLast ? 'mb-3' : 'mb-1';
      const showSuggestions = msg.sender === 'bot' && isLast && msg.suggestions?.length > 0 && index === messages.length - 1;

      if (msg.sender === 'bot' && msg.text === '...' && !loading) return null;

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={`flex ${alignment} ${marginBottom}`}
        >
          {isDocument ? (
            <DocumentBubble data={{ ...docData, time: msg.time }} />
          ) : (
            <div className={`flex flex-col max-w-[85%] shadow-sm ${bgColor} ${cornerStyles} overflow-hidden`}>
              <div className="px-3 py-2">
                {loading && msg.sender === 'bot' && msg.text === '...' ? (
                  <TypingIndicator />
                ) : (
                  <div className="prose prose-sm max-w-none relative group">
                    <button
                      onClick={() => handleCopy(msg.text)}
                      className="absolute top-1 right-1 p-1.5 bg-gray-200 rounded-full text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Copy text"
                    >
                      <CopyIcon />
                    </button>
                    <ReactMarkdown
                      components={{
                        a: ({ node, ...props }) => (
                          <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline" />
                        ),
                        img: ImageRenderer
                      }}
                    >
                      {msg.text || '...'}
                    </ReactMarkdown>
                  </div>
                )}
                {msg.text && msg.text !== '...' && (
                  <p className="text-right text-[10px] text-gray-500 mt-1">{msg.time}</p>
                )}
              </div>

              {/* 💬 Suggestions */}
              {showSuggestions && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-1 flex-col px-3 pb-3 mt-2"
                >
                  {msg.suggestions.map((suggestion, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-4 py-2 bg-gray-50/30 text-gray-700 hover:text-gray-900 rounded-md text-sm font-medium border border-gray-200 transition duration-200 shadow-sm"
                    >
                      {suggestion} ⤴
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>
          )}
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


      {/* --- ADD THE LIGHTBOX JSX --- */}
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
            <button onClick={() => setLightboxImage(null)} className="absolute top-4 left-4 text-black border border-black p-2 bg-white rounded hover:opacity-80">
              <LeftArrow />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Area */}
      {!showHireForm && (
        <motion.div className="bg-gray-100 px-3 py-2 flex items-center rounded-b-lg">
          <button onClick={() => alert("Working on it ")} className="mx-1 w-11 h-11 rounded-full flex items-center justify-center text-black hover:bg-[#d9d9d9] transition-colors"><PulseIcon /></button>
         <textarea
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={handleKeyDown}
  placeholder="Type a message"
  rows={1}
  className="flex-1 resize-none py-2 px-4 rounded-full border-none focus:ring-2 focus:ring-[#128C7E] outline-none overflow-hidden"
/>

          <button onClick={() => sendMessage(input)} className="ml-3 w-11 h-11 bg-[#128C7E] rounded-full flex items-center justify-center text-white hover:bg-[#075E54] transition-colors"><SendIcon /></button>
        </motion.div>
      )}

    </div>
  );
};

// --- POPOP COMPONENT (The main export) ---
const ChatbotPopup = ({ isOpen, setIsOpen }) => {
  const toggleChat = () => { setIsOpen(!isOpen); };
  return (
    <>
      <AnimatePresence>
        {/* This `isOpen` correctly refers to the prop */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-5 z-50"
            style={{
              width: 'clamp(300px, 94vw, 950px)',
              height: 'clamp(600px, 73vh, 900px)',
            }}
          >
            {/* You would have another component here for the chat UI */}
            <div className="w-full h-full bg-white rounded-lg shadow-2xl flex items-center justify-center">
              <Chatbot />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* This button correctly toggles the state in the PARENT component */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="fixed bottom-5 right-5 w-11 h-11 md:w-13 md:h-13 lg:w-16 lg:h-16 text-xl lg:text-3xl bg-[#075E54] text-white rounded-full flex items-center justify-center shadow-xl z-50 cursor-pointer"
        title={isOpen ? 'Close Chat' : 'Open Chat'}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={isOpen ? 'close' : 'chat'}
            initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? '🗙' : '🗨️'}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default ChatbotPopup;
