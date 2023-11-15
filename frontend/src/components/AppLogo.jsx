export default function AppLogo(props) {
  return (
    <>
      {(props.neg === "false") ? (
        <img
          src="http://localhost:3000/logo.png"
          height={props.height}
          style={{ maxHeight: props.height }}
        />
      ) : (
        <img
          src="http://localhost:3000/logo-ne.png"
          height={props.height}
          style={{ maxHeight: props.height }}
        />
      )}
    </>
  );
}
