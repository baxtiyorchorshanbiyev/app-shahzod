import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Portfolio = () => {
  
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(true);
  
  console.log("AAA");
  useEffect(() =>{
    const proxyUrl = "https://www.pythonanywhere.com/";
    axios.get(`${proxyUrl}https://baxtiyor9703.pythonanywhere.com/portfolio-data/?format=json`)
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
          <div className="loader"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
        ) : posts.map(post =>{
          return (
          <div key={post.id} className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-5">
          <div className="card">
          <img className="w-100" src={post.img} alt="" />
            <div className="card-body">
              <h3>{post.title}</h3>
              <p>Used technology: {post.technology}</p>
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
// import React, { Component} from 'react';
// import axios from 'axios';

// class Portfolio extends Component{
//   state = {
//     todos : []
//   };
//   componentDidMount(){
//     this.getTodos();
//   }
//   getTodos(){
//     axios
//     .get('https://baxtiyor9703.pythonanywhere.com/portfolio-data/')
//     .then(res =>{
//       this.setState({ todos:res.data});
//       console.log(res.data);
//     })
//     .catch(err =>{
//       console.log(err)
//     })
//   }
//   render(){
//     return(
//       <div className="portfolio">
//         <div className="container">
//           <div className="row">
//             {this.state.todos.map(item =>(
//               <div key={item.id} className="col-lg-6">
//                 <div className="card">
//                   <img src={item.img} alt="Eror" />
//                   <div className="card-body">
//                     <h3>{item.title}</h3>
//                     <p>{item.technology}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   }
// }


// export default Portfolio;