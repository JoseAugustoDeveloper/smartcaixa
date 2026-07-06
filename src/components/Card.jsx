function Card({ titulo, children }) {
    return (
        <div className="card">

            <h2>{titulo}</h2>

            {children}

        </div>
    );
}

export default Card;