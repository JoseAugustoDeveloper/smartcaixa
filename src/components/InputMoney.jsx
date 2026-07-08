import { NumericFormat } from "react-number-format";

function InputMoney({ label, name, values, onChange }) {
  return (
    <div className="linha">
      <label>{label}</label>

      <NumericFormat
        value={values[name] ?? ""}
        thousandSeparator="."
        decimalSeparator=","
        decimalScale={2}
        fixedDecimalScale
        allowNegative={false}
        prefix="R$ "
        placeholder="R$ 0,00"
        className="input-money"
        onValueChange={(values) => {
          onChange(name, values.floatValue ?? "");
        }}
      />
    </div>
  );
}

export default InputMoney;