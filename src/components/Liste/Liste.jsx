export default function Liste({ title, date, description }) {
  return (
    <div className="liste">
      <div className="listeImg">IMAGE</div>
      <div className="listeTxt">
        <p>{title}</p>
        <span>{date}</span>
        <p className="listeDescription">{description}</p>
        <button>En savoir plus</button>
      </div>
    </div>
  );
}
