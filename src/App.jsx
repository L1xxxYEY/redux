import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customer = useSelector((state) => state.customer.customer);

  const addCash = (amount) => {
    return dispatch({ type: "ADD_CASH", payload: amount });
  };
  const getCash = (amount) => {
    return dispatch({ type: "GET_CASH", payload: amount });
  };

  const addCustomer = (name) => {
    return dispatch({ type: "ADD_CUSTOMER", payload: name });
  };

  const getCustomer = (id) => {
    return dispatch({ type: "GET_CUSTOMER", payload: id });
  };

  const getCardType = (balance) =>
    balance < 300
      ? "Бронзовая карта:"
      : balance < 800
      ? "Серебряная карта:"
      : "Золотая карта:";
      

  return (
    <div className="wrapper">
      <h1 className={cash < 300 ? "bronze" : cash < 800 ? "silver" : "gold"}>{getCardType(cash)}</h1>
      <h1>{cash}$</h1>
      <button
        onClick={() => {
          addCash(Number(prompt("Введите сумму")));
        }}
      >
        Добавить
      </button>

      <button
        onClick={() => {
          getCash(Number(prompt("Введите сумму")));
        }}
      >
        Снять
      </button>

      <button
        onClick={() => {
          addCustomer(prompt("Имя клиента"));
        }}
      >
        Добавить студента
      </button>

      {customer.length > 0 ? (
        customer.map((elem) => (
          <div
            key={elem.id}
            style={{cursor: "pointer", color: "lightgreen" }}
            onClick={() => getCustomer(elem.id)}
          >
            {elem.name}
          </div>
        ))
      ) : (
        <div className="text">Список клиентов пустой</div>
      )}
    </div>
  );
}

export default App;
