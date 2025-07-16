export function StyledTitle({ mainTitle }) {
  const words = mainTitle.split(" ");
  return (
    <>
      {words.map((word, index) => {
        const isEffectWord = word.toLowerCase() === "red";
        return (
          <span key={index} className={isEffectWord ? "text-effect" : ""}>
            {word}{" "}
          </span>
        );
      })}
    </>
  );
}
