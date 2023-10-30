
const User = ({characters}) => {
    const{id,name,status,species,gender,image} = characters;

    return (
        <div>
            <div>id: {id}</div>
           <div>name: {name}</div>
           <div>status: {status}</div>
           <div>species: {species}</div>
           <div>gender: {gender}</div>
           <img src={image} alt={image}/>
        </div>
    );
};

export  {User};