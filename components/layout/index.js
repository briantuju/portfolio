import Header from "./Header";

export default function index({ children }) {
  return (
    <>
      <Header />

      <div className="container">{children}</div>
    </>
  );
}
