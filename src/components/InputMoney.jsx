import { formatarMoeda, limparMoeda } from "../utils/moeda";

function InputMoney({ label, name, values, onChange }) {
  const valor = values[name] || "";

  function handleChange(e) {
    const somenteNumeros = limparMoeda(e.target.value);

    onChange(name, somenteNumeros);
  }

  return (
    <div className="linha">

      <label>{label}</label>

      <input
        type="text"
        value={formatarMoeda(valor || 0)}
        onChange={handleChange}
      />

    </div>
  );
}

export default InputMoney;