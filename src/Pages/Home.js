import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { AddFave } from "../Store/Actions/AddFave";
import { AddIndex } from "../Store/Actions/AddIndex";
import './Style.css';

function Home() {
    const [movie, setMovie] = useState([]);
    const [numPage, setNumPage] = useState(1);
    const [searchKey, setSearchKey] = useState('');
    const [url, setUrl] = useState('https://api.themoviedb.org/3/movie/popular?api_key=92f8b1ba9a04a87d7a3184d57bf090e9');
    const dispatch = useDispatch();

    function handleFave(mov,id) {
        dispatch(AddFave(mov));
      }
    function AddIndexToChangeBg(index) {
        dispatch(AddIndex(index));
    }

    const myIndex = useSelector((state) => state.Rmovie.index);

    function search(e) {
        setSearchKey(e.target.value);
        setUrl(`https://api.themoviedb.org/3/search/movie?api_key=92f8b1ba9a04a87d7a3184d57bf090e9&query=${e.target.value}`);
      }

    function paginate(page) {
        setNumPage(page);
    }

    useEffect(() => {
        axios
          .get(url, {
            params: {
              page: numPage,
            },
          })
          .then((data) => setMovie(data.data.results))
          .catch((err) => console.log(err));
      }, [numPage, url]);

      const toggleFavorite = (index) => {
    handleFave(movie[index], movie[index].id);
    AddIndexToChangeBg(index);
      };
    return (
        <>
    <form className="d-flex justify-content-center bg-light p-3">
    <input className="form-control me-2 w-50" type="search" backgroundcolor="#2556" placeholder="Search movies..." onChange={search} />
<button className="btn btn-info" type="submit">Search</button>
</form>
<div className="container-fluid bg-light p-3">
    <div className="row row-cols-1 row-cols-md-4 justify-content-center">
        {movie.map((m, i) => (
            <div className="col mb-4" key={m.id}>
                <div className="card bg-light border-0">
                    <Card title={m}   /> <button
                            className="btn btn-dark btn-block mb-2"
                            onClick={() => toggleFavorite(i)}
                            disabled={myIndex.includes(i)}
                        >
                            {myIndex.includes(i) ? 
                                <FontAwesomeIcon icon={faHeart} style={{ color: 'gold' }} /> :
                                <FontAwesomeIcon icon={faHeart} style={{ color: 'white' }} />
                            }
                            {myIndex.includes(i) ? "Added" : "Add To Favourite"}
                        </button>
                    <div className="card-body bg-light d-flex flex-column align-items-center">
                        
                    </div>
                </div>
            </div>
        ))}
    </div>
    <nav className="container d-flex justify-content-center align-items-center">
        <ul className="pagination">
            <li className={`page-item ${numPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => paginate(numPage - 1)}>Previous</button>
            </li>
            <li className="page-item"><span className="page-link">{numPage}</span></li>
            <li className="page-item">
                <button className="page-link" onClick={() => paginate(numPage + 1)}>Next</button>
            </li>
        </ul>
    </nav>
</div>
</>
);
}

export default Home;