import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Sorry! That page could not be found</h1>
      <p>
        Go back to{" "}
        <Link href="/">
          <a>homepage</a>
        </Link>
      </p>
    </div>
  );
}
