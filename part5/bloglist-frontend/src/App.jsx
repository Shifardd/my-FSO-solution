import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

import Message from './components/Message'

const App = () => {
  const [blogs, setBlogs] = useState([])

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [message, setMessage] = useState(null)
  const [color, setColor] = useState('')

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const userLoggedIn = window.localStorage.getItem('loggedBlogUser')
    if (userLoggedIn) {
      const user = JSON.parse(userLoggedIn)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const user = await loginService.login({username, password})
      window.localStorage.setItem('loggedBlogUser', JSON.stringify(user))
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch {
      console.log('Wrong credentials');
      setColor('red')
      setMessage('wrong username or password')
      setTimeout(() => {
        setMessage(null)
      }, 5000);
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogUser')
    setUser(null)
  }

  const handleBlogForm = async (e) => {
    e.preventDefault()

    const blogObject = {
      title,
      author,
      url
    }

    const blog = await blogService.create(blogObject)
    setBlogs(blogs.concat(blog))
    setTitle('')
    setAuthor('')
    setUrl('')
    setColor('green')
    setMessage(`a new blog ${blog.title} by ${blog.author} added`)
    setTimeout(() => {
      setMessage(null)
    }, 5000);
  }

  const loginForm = () => (
    <div>
      <h2>log in to application</h2>
      <Message message={message} color={color} />
      <form onSubmit={handleLogin}>
        <div>
          <label>
            username
            <input 
              type="text"
              value={username}
              onChange={({target}) => setUsername(target.value)} />
          </label>
        </div>
        <div>
          <label>
            password
            <input 
              type="password" 
              value={password}
              onChange={({target}) => setPassword(target.value)} />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )

  const blogForm = () => (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleBlogForm}>
        <div>
          <label>
            title:
            <input 
              type="text"
              value={title}
              onChange={({target}) => setTitle(target.value)} />
          </label>
        </div>
        <div>
          <label>
            author:
            <input 
              type="text"
              value={author}
              onChange={({target}) => setAuthor(target.value)} />
          </label>
        </div>
        <div>
          <label>
            url:
            <input 
              type="text"
              value={url}
              onChange={({target}) => setUrl(target.value)} />
          </label>
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )

  const displayBlog = () => (
    <div>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )

  return (
    <div>
      {!user && loginForm()}
      {user && (
        <div>
          <h2>blogs</h2>
          <Message message={message} color={color} />
          <p>
            {user.name || user.username} logged in
            <button onClick={handleLogout}>logout</button>
          </p>
          {blogForm()}
          {displayBlog()}
        </div>
      )}
    </div>
  )
}

export default App