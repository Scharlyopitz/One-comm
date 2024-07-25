export default function Buttons({ firstBtn, secondBtn }) {
  return (
    <div className="btnContainer">
      <div className="btn">
        <button>{firstBtn}</button>
        <button>{secondBtn}</button>
      </div>
      <div className="chevron"></div>
    </div>
  );
}
