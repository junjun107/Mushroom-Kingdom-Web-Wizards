export default function Spinner() {
  return (
    <div className="d-flex justify-content-center">
      <strong>Loading...</strong>
      <div
        className="spinner-border ml-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
}
