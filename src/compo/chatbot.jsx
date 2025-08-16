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
const MicIcon = ({ isListening }) => (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isListening ? "text-red-500" : "text-white"}><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>);

// --- AUDIO HELPER FUNCTIONS ---
const base64ToArrayBuffer = (base64) => {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
};

const pcmToWav = (pcmData, sampleRate) => {
  const header = new ArrayBuffer(44);
  const view = new DataView(header);
  const numChannels = 1;
  const bitsPerSample = 16;
  const blockAlign = (numChannels * bitsPerSample) / 8;
  const byteRate = sampleRate * blockAlign;
  const dataSize = pcmData.length * 2;

  view.setUint32(0, 0x52494646, false); // "RIFF"
  view.setUint32(4, 36 + dataSize, true);
  view.setUint32(8, 0x57415645, false); // "WAVE"
  view.setUint32(12, 0x666d7420, false); // "fmt "
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitsPerSample, true);
  view.setUint32(36, 0x64617461, false); // "data"
  view.setUint32(40, dataSize, true);

  const wavBytes = new Uint8Array(44 + dataSize);
  wavBytes.set(new Uint8Array(header), 0);
  wavBytes.set(new Uint8Array(pcmData.buffer), 44);
  return new Blob([wavBytes], { type: 'audio/wav' });
};

// --- CHATBOT COMPONENT ---
const Chatbot = () => {
  // For production, use your live URL. For local development, use 'http://localhost:8000'.
  // It's best practice to manage this with environment variables in your build setup.
  // const BACKEND_URL = 'http://172.20.10.4:8000';
  const BACKEND_URL = 'https://backend-3j4r.onrender.com';

  const initialMessage = { sender: 'bot', text: "👋 Hi! I’m your portfolio assistant. Ask me anything about Mann's experience.", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), suggestions: ["What are your skills?", "Tell me about your projects", "I'd like to hire you"] };
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatboxEndRef = useRef(null);
  const [showHireForm, setShowHireForm] = useState(false);
  const [hireDetails, setHireDetails] = useState({ name: '', email: '', message: '' });
  const [showVoiceCall, setShowVoiceCall] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState('Click the mic to start');
  const recognitionRef = useRef(null);

  useEffect(() => { chatboxEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, loading]);

  const sendMessage = async (messageText, isFromVoice = false) => {
    if (!messageText.trim()) return;
    const userMessage = { sender: 'user', text: messageText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    const botPlaceholder = { sender: 'bot', text: '', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), suggestions: [] };
    const newMessages = isFromVoice ? [initialMessage, userMessage] : [...messages, userMessage];
    setMessages([...newMessages, botPlaceholder]);
    setInput('');
    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/api/chat/`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ history: newMessages }), });
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
          setMessages(prev => { const updated = [...prev]; const lastMsg = updated[updated.length - 1]; lastMsg.text = textPart; try { if (suggestionsJson) { lastMsg.suggestions = JSON.parse(suggestionsJson); } } catch (e) { } return updated; });
        } else {
          setMessages(prev => { const updated = [...prev]; updated[updated.length - 1].text = fullResponse; return updated; });
        }
      }
      if (fullResponse.includes("please provide your name, email")) { setShowHireForm(true); }
      if (isFromVoice) {
        const textToSpeak = fullResponse.split(separator)[0];
        speakText(textToSpeak);
      }
    } catch (error) {
      console.error("Streaming API Error:", error);
      setMessages(prev => { const updated = [...prev]; updated[updated.length - 1].text = "⚠️ Oops! Something went wrong."; return updated; });
    } finally { setLoading(false); }
  };

  const speakText = async (text) => {
  if (!text.trim()) return;
  setVoiceStatus('AI is speaking...');
  try {
    const response = await axios.post(`${BACKEND_URL}/api/synthesize-speech/`, { text });
    const { audioContent, mimeType } = response.data;

    if (audioContent && mimeType && mimeType.startsWith("audio/")) {
      // Convert base64 -> Blob directly (no PCM conversion needed)
      const byteArray = Uint8Array.from(atob(audioContent), c => c.charCodeAt(0));
      const audioBlob = new Blob([byteArray], { type: mimeType });
      const audioUrl = URL.createObjectURL(audioBlob);

      const audio = new Audio(audioUrl);
      audio.play();

      audio.onended = () => {
        setVoiceStatus('Click the mic to start');
        if (recognitionRef.current) recognitionRef.current.start();
      };
    }
  } catch (error) {
    console.error("Error synthesizing speech:", error);
    setVoiceStatus('Error, please try again.');
  }
};


  const toggleListen = () => {
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      setVoiceStatus('Click the mic to start');
    } else {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        setVoiceStatus("Sorry, your browser doesn't support speech recognition.");
        return;
      }
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.onstart = () => {
        setIsListening(true);
        setVoiceStatus('Listening...');
      };
      recognition.onend = () => {
        setIsListening(false);
        setVoiceStatus('Processing...');
      };
      recognition.onresult = async (event) => {
  try {
    // Get user speech transcript
    const transcript = event.results[0][0].transcript;
    console.log("User said:", transcript);

    // Send to backend
    const aiResponse = await sendMessage(transcript);

    // Display AI response in chat (if you have state)
    setMessages((prev) => [...prev, { role: "user", text: transcript }]);
    setMessages((prev) => [...prev, { role: "assistant", text: aiResponse }]);

    // Speak AI response
    await synthesizeSpeech(aiResponse);
  } catch (err) {
    console.error("Speech recognition -> chat flow failed:", err);
  }
};

      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setVoiceStatus('Error listening. Please try again.');
        setIsListening(false);
      };
      recognition.start();
      recognitionRef.current = recognition;
    }
  };

  const handleHireSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${BACKEND_URL}/api/hire/`, hireDetails);
      setShowHireForm(false);
      const confirmationMsg = { sender: 'bot', text: "Thank you! Your request has been sent. Mann will get back to you shortly.", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
      setMessages(prev => [...prev, confirmationMsg]);
    } catch (error) {
      console.error("Hiring Form Error:", error);
    } finally { setLoading(false); setHireDetails({ name: '', email: '', message: '' }); }
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
          <div><div className="font-bold">Mann's Assistant</div><div className="text-xs opacity-80">online</div></div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowVoiceCall(true)} title="Start Voice Call"><CallIcon /></button>
          <button onClick={handleClearChat} title="Clear Chat"><ClearChatIcon /></button>
        </div>
      </div>

      {/* Chatbox */}
      <div className="flex-1 p-3 overflow-y-auto bg-gray-200" style={{ backgroundImage: `url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')` }}>
        <AnimatePresence>
          {messages.map((msg, index) => {
            const prevMessage = messages[index - 1]; const nextMessage = messages[index + 1];
            const isFirstInGroup = !prevMessage || prevMessage.sender !== msg.sender; const isLastInGroup = !nextMessage || nextMessage.sender !== msg.sender;
            let cornerClasses = '';
            if (msg.sender === 'user') {
              if (isFirstInGroup && isLastInGroup) cornerClasses = 'rounded-2xl'; else if (isFirstInGroup) cornerClasses = 'rounded-t-2xl rounded-bl-2xl'; else if (isLastInGroup) cornerClasses = 'rounded-b-2xl rounded-tl-2xl'; else cornerClasses = 'rounded-l-2xl';
            } else { if (isFirstInGroup && isLastInGroup) cornerClasses = 'rounded-2xl'; else if (isFirstInGroup) cornerClasses = 'rounded-t-2xl rounded-br-2xl'; else if (isLastInGroup) cornerClasses = 'rounded-b-2xl rounded-tr-2xl'; else cornerClasses = 'rounded-r-2xl'; }
            const bgColor = msg.sender === 'user' ? 'bg-[#DCF8C6]' : 'bg-white'; const margin = isLastInGroup ? 'mb-2' : 'mb-0.5';
            if (msg.sender === 'bot' && !msg.text && !loading) return null;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, ease: "easeOut" }} className={`flex ${margin} ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`py-2 px-3 max-w-[80%] shadow-sm ${bgColor} ${cornerClasses}`}>
                  <div className="prose prose-sm max-w-none"><ReactMarkdown components={{ a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline" /> }}>{msg.text || '...'}</ReactMarkdown></div>
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
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Type a message..." className="flex-1 py-2 px-4 rounded-full border-none focus:ring-2 focus:ring-[#128C7E] outline-none" />
          <button onClick={() => sendMessage(input)} className="ml-3 w-11 h-11 bg-[#128C7E] rounded-full flex items-center justify-center text-white hover:bg-[#075E54] transition-colors"><SendIcon /></button>
        </motion.div>
      )}

      {/* --- VOICE CALL MODAL --- */}
      <AnimatePresence>
        {showVoiceCall && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-30 rounded-lg">
            <button onClick={() => { if (recognitionRef.current) recognitionRef.current.stop(); setShowVoiceCall(false); }} className="absolute top-4 right-4 text-white"><CloseIcon /></button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="text-center">
              <p className="text-white text-lg mb-8">{voiceStatus}</p>
              <motion.button onClick={toggleListen} whileTap={{ scale: 0.9 }} className={`w-24 h-24 rounded-full flex items-center justify-center transition-colors ${isListening ? 'bg-red-500/50' : 'bg-green-500/50'}`}>
                <MicIcon isListening={isListening} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
          <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.9 }} transition={{ duration: 0.3, ease: "easeOut" }} className="fixed bottom-24 right-5 z-50" style={{ width: 'clamp(300px, 90vw, 450px)', height: 'clamp(400px, 80vh, 500px)' }}>
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
