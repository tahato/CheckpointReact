import { product } from "./Product";


const Descr = () => {
    let des=product.description="this is a car"
    return (
        <div>
            <h1>{des}</h1>
        </div>
    );
};

export default Descr;