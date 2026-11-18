import {Link} from 'router-react-dom'
import { useSelector } from 'react-redux'

const Navbar=()=>{
    const produits=useSelector(
        (state)=>state.produits.produits
    );
    const paneirProduits=useSelector(
        (state)=>state.panier.panier
    );

    return(
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-between">
            <div> <i></i> </div>
        </nav>
    )
}
