import Card from "./Card";
import InputMoney from "./InputMoney";

function Section({
    titulo,
    campos,
    valores,
    alterarCampo
}) {
    return (
        <Card titulo={titulo}>

            {campos.map((campo) => (

                <InputMoney
                    key={campo.name}
                    label={campo.label}
                    name={campo.name}
                    values={valores}
                    onChange={alterarCampo}
                />

            ))}

        </Card>
    );
}

export default Section;