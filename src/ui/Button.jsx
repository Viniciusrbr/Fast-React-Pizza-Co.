import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "transition-colorshover:bg-yellow-300 focus:ringfocus:ring-yellow-300 inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase  tracking-wide text-stone-800 focus:bg-yellow-300 focus:outline-none focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
