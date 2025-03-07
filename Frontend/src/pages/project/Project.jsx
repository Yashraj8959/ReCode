import React, {useEffect, useState} from 'react'
import { io } from 'socket.io-client'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import { useParams } from 'react-router-dom'

const Project = () => {
  const [socket, setSocket] = useState(null)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [code, setCode] = useState('')

  useEffect(() => {
    const temp = io('http://localhost:3030')
    setSocket(temp)

    temp.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg])
    })

    return () => temp.disconnect()
  }, [])

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('message', message)
      setMessages((prevMessages) => [...prevMessages, message])
      setMessage('')
    }
  }

  useEffect(() => {
    Prism.highlightAll()
  }, [code])

  return (
    <main className="p-4 h-screen">
        <section className='project-view flex gap-4 w-full h-full'>
            <div className="conversation w-1/3 bg-gray-100 p-4 rounded-lg shadow-md flex flex-col h-full">
                <h2 className="text-xl font-bold mb-4">Chat</h2>
                <div className="flex-1 overflow-y-auto mb-4">
                  {messages.map((msg, index) => (
                    <div key={index} className="mb-2 p-2 bg-white rounded shadow">
                      {msg}
                    </div>
                  ))}
                </div>
                <div className="flex">
                  <input 
                    type="text" 
                    className="flex-1 p-2 border rounded-l-lg" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder="Type a message..."
                  />
                  <button 
                    className="p-2 bg-blue-500 text-white rounded-r-lg" 
                    onClick={sendMessage}
                  >
                    Send
                  </button>
                </div>
            </div>
            <div className="code w-1/3 bg-gray-100 p-4 rounded-lg shadow-md h-full">
                <h2 className="text-xl font-bold mb-4">Code</h2>
                <textarea 
                  className="w-full h-4/5 p-2 border rounded-lg" 
                  value={code} 
                  onChange={(e) => setCode(e.target.value)} 
                  placeholder="Write your code here..."
                />
                <pre className="language-js mt-4">
                  <code className="language-js">
                    {code}
                  </code>
                </pre>
            </div>
            <div className="review w-1/3 bg-gray-100 p-4 rounded-lg shadow-md h-full">
                <h2 className="text-xl font-bold mb-4">Review</h2>
                {/* Code review content goes here */}
            </div>
        </section>
    </main>
  )
}

export default Project
