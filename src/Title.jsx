export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? "You've reached the limit!" : "Click Counter App"}
    </h1>
  );
}
