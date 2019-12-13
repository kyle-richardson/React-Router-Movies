import React, {useState, useEffect} from "react"
import axios from "axios"

const UpdateMovie = props => {
    const id = props.props.match.params.id;
    const [movie, setMovie] = useState({})
   

    useEffect(()=>{
        setMovie(props.movies.find(ele=>`${ele.id}`===`${id}`))
    }, [])

    const handleChange = event => {
        const {name, value} = event.target
        setMovie ({
            ...movie,
            [name]: value
        })
      }
    const putMovie = event => {
        event.preventDefault()
        axios
            .put(`http://localhost:5000/api/movies/${id}`, movie)
            .then(res=> props.props.history.push('/'))
            .catch(err=> console.log(err))
    }

    
    return (
        <div className="edit-wrapper">
             <div className="movie-card">
                 <form className="edit-form" onSubmit={putMovie}>
                     <label>
                         Title: 
                     </label>
                     <input 
                        name="title"
                        type="text"
                        placeholder="Title"
                        value={movie.title}
                        onChange={handleChange}

                        />
                    <label>
                        Director: 
                    </label>
                    <input 
                        name="director"
                        type="text"
                        placeholder="Director"
                        value={movie.director}
                        onChange={handleChange}
                     
                     />
                     <label>
                         Metascore: 
                     </label>
                     <input 
                        name="metascore"
                        type="text"
                        placeholder="Metascore"
                        value={movie.metascore}
                        onChange={handleChange}
                     
                     />
                     <label>
                         Actors:
                     </label>
                     {/* <input 
                        name="actors"
                        type="text"
                        placeholder="Actors"
                        value={props.current.actors}
                        onChange={}
                     
                     /> */}
                     <button>Save</button>
                 </form>
            </div>
        </div>
       
    )
}

export default UpdateMovie