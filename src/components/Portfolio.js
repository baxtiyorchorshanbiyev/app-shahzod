import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Portfolio = () => {
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() =>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) =>{
      console.log(res.data);
      setPosts(res.data);
      setLoading(false)
      setErr('');
    })
    .catch(err =>{
      setPosts({});
      setLoading(false);
      setErr("Datada ma'lumot yo'q")
    })
  }, [])
  return (
    <section className="portfolio">
      <div className="section-container">
      <div className="container-fluid">
      <div className="row">
        {loading ? (
          <div className="loader"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>
        ) : posts.map(post =>{
          return (
          <div key={post.id} className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-5">
          <div className="card">
          <img className="img-fluid w-100" src="./images/logo.jpg" alt="" />
            <div className="card-body">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
          )
        })}
        {err ? err : null}
      </div>
    </div>
      </div>
    </section>
  );
};

export default Portfolio;