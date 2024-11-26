import { useState, useEffect } from 'react';
import axios from 'axios';

interface Topic {
  id: number;
  name: string;
  description?: string;
}

export default function Chat() {
  const [topics, setTopics] = useState<Topic[]>([]); // Explicitly type topics as Topic[]
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null); // Store selected topic ID
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch('/api/topics');
        if (res.ok) {
          const data = await res.json();
          setTopics(data); // Assuming `setTopics` updates your topics state
        } else {
          console.error("Failed to fetch topics");
        }
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };
    fetchTopics();
  }, []);

  const handleChat = async (event: React.FormEvent)=> {
    if (!selectedTopic || !setQuestion) {
      alert("Please select a topic and enter a question.");
      return;
    }
  
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topicId: selectedTopic, question: setQuestion }),
        cache: 'no-store',  // Prevents caching on mobile and desktop
      });
  
      if (response.ok) {
        const data = await response.json();
        setResponse(data.response); // Display the response in your component
      } else {
        setResponse("No result available. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResponse("An error occurred. Please try again.");
    }
  };


  return (
    <div className="">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">Game Helper Chat</h1>

      <div className='flex justify-center items-center mt-2'>
        <select
          onChange={(e) => setSelectedTopic(Number(e.target.value))}
          className="mt-2 text-zinc-800 "
          value={selectedTopic || ''}
        >
          <option value="">Select Topic</option>
          {topics.map((topic) => (
            <option key={topic.id} value={topic.id}>{topic.name}</option>
            
          ))}
        </select>
      </div>
  
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full mt-4 p-2 border text-black flex justify-center"
        placeholder="select a topic and ask"
      />

      <div className='flex justify-center items-center mt-2'>
        <button onClick={handleChat} className="mt-2 bg-purple-700/60 text-white p-2 rounded">
          Ask Me
        </button>
      </div>
      
      <div className=''>
        {response && 
          <p className="mt-4 px-4 md:px-0">{response}</p>
        }
      </div>
    </div>
  );
}
