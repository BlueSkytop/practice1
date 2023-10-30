
const User = ({simpsons}) => {
    const{name,characteristic, image } = simpsons;

    return (
        <div>
           <div>name: {name}</div>
           <div>characteristic: {characteristic}</div>
           <img src={image} alt={image}/>
        </div>
    );
};

export  {User};