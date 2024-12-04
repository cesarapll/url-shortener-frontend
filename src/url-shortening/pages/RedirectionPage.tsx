import useUrlRedirection from "../hooks/useUrlRedirection";

const RedirectionPage = () => {
  const { errorMessage } = useUrlRedirection();

  return (
    <>
      {errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <div>Redirigiendo. Espere un momento... </div>
      )}
    </>
  );
};

export default RedirectionPage;
