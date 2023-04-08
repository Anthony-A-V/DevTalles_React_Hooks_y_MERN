import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  // * 1era forma si se quiere usar el counter

  // const { author, quote } = !!data
  // && data.length === counter && data[counter - 1];

  // * 2da forma si se quiere usar el counter

  // ? Si se quiere usar el counter, se requiere evaluar
  // ? la data antes de buscar el arreglo específico
  // let author, quote;
  // if (!!data && data.length === counter) {
  // ? Se pone entre paréntesis la asignación de las variables
  // ? para que el compilador de JS lo tome como una expresión
  // ? y no una declaración
  //   ({ author, quote } = data[counter - 1]);
  // }

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        onClick={() => increment(1)}
        className="btn btn-primary"
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};
